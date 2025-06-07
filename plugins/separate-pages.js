const path = require('node:path')
const fs = require('fs-extra')
const { parse } = require('node-html-parser')

module.exports = function separatePagesPlugin(api) {
  api.describe({
    key: 'separatePages',
    config: {
      schema(joi) {
        return joi.boolean()
      },
    },
  })

  // 在构建开始前处理页面config
  api.onStart(() => {
    const { paths } = api
    const pagesPath = path.join(paths.absSrcPath, 'pages')

    if (fs.existsSync(pagesPath)) {
      processPageConfigs(pagesPath)
    }
  })

  // 在构建完成后处理文件
  api.onBuildComplete(async ({ err }) => {
    if (err)
      return

    const { paths, config } = api
    const outputPath = paths.absOutputPath
    const pagesPath = path.join(paths.absSrcPath, 'pages')

    // 读取所有页面目录
    const pageDirectories = fs.readdirSync(pagesPath).filter((item) => {
      return fs.statSync(path.join(pagesPath, item)).isDirectory()
    })

    console.log('🚀 开始分离页面资源...')
    console.log(`📂 发现页面: ${pageDirectories.join(', ')}`)

    // 获取页面的实际文件名映射
    const pageFileNameMap = await getPageFileNameMap(pagesPath, pageDirectories, outputPath)
    console.log('📋 页面文件名映射:', pageFileNameMap)

    // 创建pages输出目录
    const pagesOutputDir = path.join(outputPath, 'pages')
    await fs.ensureDir(pagesOutputDir)

    for (const pageName of pageDirectories) {
      await separatePageResources(outputPath, pageName, pageFileNameMap, config)
    }

    // 延迟清理，让Umi完成所有操作
    setTimeout(async () => {
      await cleanupUnnecessaryFiles(outputPath, pageDirectories, pageFileNameMap)
      console.log('✅ 页面资源分离完成！')
      console.log(`📁 独立页面已输出到: ${path.join(outputPath, 'pages')}`)
    }, 1000)
  })
}

// 处理页面config，添加默认字段
function processPageConfigs(pagesPath) {
  console.log('🔧 处理页面配置文件...')

  const pageDirectories = fs.readdirSync(pagesPath).filter((item) => {
    return fs.statSync(path.join(pagesPath, item)).isDirectory()
  })

  for (const pageName of pageDirectories) {
    const pageFile = path.join(pagesPath, pageName, 'index.tsx')

    if (fs.existsSync(pageFile)) {
      processPageConfig(pageFile, pageName)
    }
  }
}

// 处理单个页面的config
function processPageConfig(pageFile, pageName) {
  try {
    const content = fs.readFileSync(pageFile, 'utf-8')

    // 检查是否已有config导出
    const hasConfig = /export\s+const\s+config\s*=/.test(content)

    if (hasConfig) {
      // 解析现有config
      const configMatch = content.match(/export\s+const\s+config\s*=\s*(\{[\s\S]*?\})/)
      if (configMatch) {
        const configStr = configMatch[1]

        try {
          // 安全地评估config对象（简单的对象字面量）
          const configObj = eval(`(${configStr})`)

          // 检查是否需要添加默认字段
          let needsUpdate = false
          const updates = []

          // 添加默认name字段
          if (!configObj.name) {
            configObj.name = pageName
            needsUpdate = true
            updates.push(`name: '${pageName}'`)
          }

          // 添加默认title字段（如果没有）
          if (!configObj.title) {
            const defaultTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1)
            configObj.title = defaultTitle
            needsUpdate = true
            updates.push(`title: '${defaultTitle}'`)
          }

          if (needsUpdate) {
            // 重建config对象字符串
            const newConfigObj = {
              ...configObj,
            }

            const newConfigStr = JSON.stringify(newConfigObj, null, 2)
              .replace(/"/g, '\'') // 使用单引号
              .replace(/'/g, '\'') // 确保引号一致性

            // 替换原有config
            const newContent = content.replace(
              /export\s+const\s+config\s*=\s*\{[\s\S]*?\}/,
              `export const config = ${newConfigStr}`,
            )

            fs.writeFileSync(pageFile, newContent, 'utf-8')
            console.log(`📝 更新页面 ${pageName} 配置: ${updates.join(', ')}`)
          }
        }
        catch (error) {
          console.log(`⚠️  无法解析页面 ${pageName} 的config: ${error.message}`)
        }
      }
    }
    else {
      // 添加默认config
      const defaultTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1)
      const defaultConfig = {
        title: defaultTitle,
        name: pageName,
      }

      const configStr = JSON.stringify(defaultConfig, null, 2).replace(/"/g, '\'')

      // 在文件开头添加config导出
      const lines = content.split('\n')
      const insertIndex = lines.findIndex(line =>
        line.trim().startsWith('export default')
        || line.trim().startsWith('function')
        || line.trim().startsWith('const'),
      )

      if (insertIndex >= 0) {
        lines.splice(insertIndex, 0, '', `export const config = ${configStr}`, '')
        const newContent = lines.join('\n')
        fs.writeFileSync(pageFile, newContent, 'utf-8')
        console.log(`📝 为页面 ${pageName} 添加默认配置: name='${pageName}', title='${defaultTitle}'`)
      }
    }
  }
  catch (error) {
    console.log(`⚠️  处理页面 ${pageName} 配置时出错: ${error.message}`)
  }
}

// 获取页面的实际HTML文件名
async function getPageFileNameMap(pagesPath, pageDirectories, outputPath) {
  const fileNameMap = {}

  for (const pageName of pageDirectories) {
    const pageFileTsx = path.join(pagesPath, pageName, 'index.tsx')
    const pageFileJsx = path.join(pagesPath, pageName, 'index.jsx')
    const pageFile = fs.existsSync(pageFileTsx) ? pageFileTsx : pageFileJsx
    let htmlFileName = `${pageName}.html` // 默认文件名

    if (fs.existsSync(pageFile)) {
      try {
        const content = await fs.readFile(pageFile, 'utf-8')

        // 使用正则表达式提取 name 配置
        const nameMatch = content.match(/name:\s*['"`]([^'"`]+)['"`]/)
        if (nameMatch) {
          htmlFileName = `${nameMatch[1]}.html`
        }
      }
      catch (error) {
        console.log(`⚠️  读取页面配置失败: ${pageName}`)
      }
    }

    fileNameMap[pageName] = htmlFileName
  }

  return fileNameMap
}

async function separatePageResources(outputPath, pageName, pageFileNameMap, config) {
  const pageOutputDir = path.join(outputPath, 'pages', pageName)

  // 创建页面输出目录
  await fs.ensureDir(pageOutputDir)

  // 使用实际的HTML文件名
  const htmlFileName = pageFileNameMap[pageName] || `${pageName}.html`
  const htmlFile = path.join(outputPath, htmlFileName)

  if (fs.existsSync(htmlFile)) {
    let htmlContent = await fs.readFile(htmlFile, 'utf-8')

    // 解析HTML，提取资源依赖
    const root = parse(htmlContent)
    const assets = extractAssetsFromHtml(root)

    // 分析页面JS文件中的静态资源依赖
    const staticAssets = await analyzeStaticAssets(outputPath, pageName, htmlFileName)

    // 处理HTML中的资源路径
    htmlContent = processHtmlPaths(htmlContent, assets)

    // 写入处理后的HTML
    await fs.writeFile(path.join(pageOutputDir, 'index.html'), htmlContent)

    // 复制页面相关的资源文件
    await copyPageAssets(outputPath, pageOutputDir, assets, pageName, staticAssets, htmlFileName)
  }
  else {
    console.log(`⚠️  未找到页面HTML文件: ${htmlFileName}`)
  }

  console.log(`📄 页面 ${pageName} 资源已输出到: pages/${pageName}/`)
}

async function cleanupUnnecessaryFiles(outputPath, pageDirectories, pageFileNameMap) {
  console.log('🧹 清理多余文件...')

  try {
    const files = await fs.readdir(outputPath)

    for (const file of files) {
      const filePath = path.join(outputPath, file)
      const stat = await fs.stat(filePath)

      // 跳过pages目录
      if (file === 'pages') {
        continue
      }

      // 删除页面HTML文件（使用实际文件名）
      const isPageHtml = Object.values(pageFileNameMap).includes(file)
      if (file.endsWith('.html') && isPageHtml) {
        await fs.remove(filePath)
        console.log(`🗑️  删除页面HTML: ${file}`)
        continue
      }

      // 删除页面JS文件（基于文件名模式匹配，支持新hash格式）
      if (file.endsWith('.js')) {
        const md5 = require('md5')
        function generateCustomFileName(pageName, originalName, extension) {
          const hashInput = `${pageName}_${originalName}`
          const customHash = md5(hashInput)
          return `${customHash}.${extension}`
        }

        // 检查是否包含页面相关的名称
        const isPageJs = Object.keys(pageFileNameMap).some((pageName) => {
          const htmlName = pageFileNameMap[pageName]
          const jsName = htmlName.replace('.html', '')

          // 尝试匹配自定义hash文件名 - 使用jsName（config.name）而不是目录名
          const expectedJsFile = generateCustomFileName(jsName, jsName, 'js')

          return file === expectedJsFile
            || file.startsWith(`${jsName}.`)
            || file.includes(`${pageName}.`)
            || file.includes(jsName)
            || file.includes(pageName)
        })

        if (isPageJs) {
          await fs.remove(filePath)
          console.log(`🗑️  删除页面JS: ${file}`)
          continue
        }
      }

      // 删除静态资源目录（因为已经复制到各个页面中）
      if (file === 'static' && stat.isDirectory()) {
        await fs.remove(filePath)
        console.log(`🗑️  删除静态目录: ${file}`)
        continue
      }

      // 删除其他不需要的文件
      if (file.endsWith('.css') || file.endsWith('.map')) {
        await fs.remove(filePath)
        console.log(`🗑️  删除文件: ${file}`)
      }
    }

    console.log('✨ 文件清理完成！')
  }
  catch (error) {
    console.log('⚠️  清理文件时出现错误:', error.message)
  }
}

function extractAssetsFromHtml(root) {
  const assets = {
    scripts: [],
    styles: [],
    others: [],
  }

  // 提取script标签
  root.querySelectorAll('script[src]').forEach((script) => {
    const src = script.getAttribute('src')
    if (src && !src.startsWith('http')) {
      assets.scripts.push(src.replace(/^\//, ''))
    }
  })

  // 提取link标签（CSS等）
  root.querySelectorAll('link[href]').forEach((link) => {
    const href = link.getAttribute('href')
    if (href && !href.startsWith('http')) {
      assets.styles.push(href.replace(/^\//, ''))
    }
  })

  return assets
}

async function analyzeStaticAssets(outputPath, pageName, htmlFileName) {
  const staticAssets = new Set()

  // 基于HTML文件名查找对应的JS文件
  const jsFileName = htmlFileName.replace('.html', '')

  // 查找页面相关的JS文件 (支持新的hash格式)
  const files = await fs.readdir(outputPath)

  // 由于现在使用完整MD5哈希，需要通过generateCustomFileName函数计算文件名
  const md5 = require('md5')
  function generateCustomFileName(configName, originalName, extension) {
    const hashInput = `${configName}_${originalName}`
    const customHash = md5(hashInput)
    return `${customHash}.${extension}`
  }

  const pageJsFiles = files.filter((file) => {
    if (!file.endsWith('.js'))
      return false

    // 尝试匹配自定义hash文件名 - 使用jsFileName（实际的config.name）而不是目录名
    const expectedJsFile = generateCustomFileName(jsFileName, jsFileName, 'js')

    // 检查是否为页面JS文件
    return file === expectedJsFile
      || file.startsWith(`${jsFileName}.`)
      || file.includes(`${pageName}.`)
      || file.includes(jsFileName)
      || file.includes(pageName)
  })

  // 分析JS文件内容，查找静态资源引用
  for (const jsFile of pageJsFiles) {
    const jsFilePath = path.join(outputPath, jsFile)
    if (fs.existsSync(jsFilePath)) {
      const jsContent = await fs.readFile(jsFilePath, 'utf-8')

      // 使用更宽泛的正则表达式查找静态资源引用
      const staticMatches = jsContent.match(/"static\/[^"]+\.[a-zA-Z0-9]+"/g)

      if (staticMatches) {
        staticMatches.forEach((match) => {
          const assetPath = match.slice(1, -1)
          staticAssets.add(assetPath)
        })
      }
    }
  }

  return staticAssets
}

function processHtmlPaths(htmlContent, assets) {
  // 将所有绝对路径改为相对路径
  htmlContent = htmlContent.replace(/href="\/([^"]*)"/g, 'href="./$1"')
  htmlContent = htmlContent.replace(/src="\/([^"]*)"/g, 'src="./$1"')

  // 处理特殊的umi运行时文件
  htmlContent = htmlContent.replace(/href="\.\/umi\./g, 'href="./umi.')
  htmlContent = htmlContent.replace(/src="\.\/umi\./g, 'src="./umi.')

  return htmlContent
}

async function copyPageAssets(outputPath, pageOutputDir, assets, pageName, staticAssets, htmlFileName) {
  const copiedFiles = new Set()

  // 复制HTML中引用的所有资源
  const allAssets = [...assets.scripts, ...assets.styles, ...assets.others]

  for (const asset of allAssets) {
    const srcFile = path.join(outputPath, asset)
    const destFile = path.join(pageOutputDir, asset)

    if (fs.existsSync(srcFile) && !copiedFiles.has(asset)) {
      await fs.ensureDir(path.dirname(destFile))
      await fs.copy(srcFile, destFile)
      copiedFiles.add(asset)
    }
  }

  // 只复制页面实际使用的静态资源
  if (staticAssets.size > 0) {
    console.log(`📎 页面 ${pageName} 使用的静态资源: ${Array.from(staticAssets).join(', ')}`)

    for (const staticAsset of staticAssets) {
      const srcFile = path.join(outputPath, staticAsset)
      const destFile = path.join(pageOutputDir, staticAsset)

      if (fs.existsSync(srcFile) && !copiedFiles.has(staticAsset)) {
        await fs.ensureDir(path.dirname(destFile))
        await fs.copy(srcFile, destFile)
        copiedFiles.add(staticAsset)
      }
    }
  }
  else {
    console.log(`📎 页面 ${pageName} 没有使用静态资源`)
  }

  // 查找并复制页面相关的chunk文件 (支持新的hash格式)
  const jsFileName = htmlFileName.replace('.html', '')
  const files = await fs.readdir(outputPath)

  // 使用相同的hash生成函数
  const md5 = require('md5')
  function generateCustomFileName(pageName, originalName, extension) {
    const hashInput = `${pageName}_${originalName}`
    const customHash = md5(hashInput)
    return `${customHash}.${extension}`
  }

  const relevantFiles = files.filter((file) => {
    const isRelevantType = file.endsWith('.js')
      || file.endsWith('.css')
      || file.endsWith('.js.map')
      || file.endsWith('.css.map')

    if (!isRelevantType)
      return false

    // 检查是否为页面相关文件（使用自定义hash匹配）
    const expectedFile = generateCustomFileName(jsFileName, jsFileName, file.split('.').pop())

    return file === expectedFile
      || file.startsWith(`${jsFileName}.`)
      || file.includes(`${pageName}.`)
      || file.includes(jsFileName)
      || file.includes(pageName)
      || file.startsWith('umi.')
      || file.startsWith('vendors.')
  })

  for (const file of relevantFiles) {
    if (!copiedFiles.has(file)) {
      const srcFile = path.join(outputPath, file)
      const destFile = path.join(pageOutputDir, file)

      if (fs.statSync(srcFile).isFile()) {
        await fs.copy(srcFile, destFile)
        copiedFiles.add(file)
      }
    }
  }
}
