import type { IApi } from 'umi'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import md5 from 'md5'
import { aesEncrypt } from '../src/utils/crypto'

// 生成新文件名的方法
function generateFileName(originalName: string, extension?: string): string {
  const hash = md5(originalName + process.env.KEY)
  return extension ? `${hash}.${extension}` : hash
}

export default (api: IApi) => {
  api.describe({
    key: 'norse',
  })

  api.onStart(() => {
    const { p, k } = api.args
    if (p) {
      process.env.MPA_FILTER = p
    }
    if (k) {
      process.env.KEY = k
    }
  })

  api.modifyAppData((memo) => {
    const flag = `${process.env.MPA_FILTER}_${process.env.KEY}}`

    // 对flag进行对称加密，使用固定密码"leuan"
    const encryptedFlag = aesEncrypt(flag)
    if (memo.mpa?.entry?.[0]) {
      memo.mpa.entry[0].mountElementId = encryptedFlag || 'root'
    }

    // 输出加密信息用于跟踪（使用允许的console.warn）
    console.warn(`🔐 Flag已加密: ${encryptedFlag}`)
    console.warn(`📝 原始Flag: ${flag}`)
    return memo
  })

  api.modifyConfig((memo) => {
    const suffix = `${process.env.MPA_FILTER}${process.env.KEY}`
    memo.outputPath = `dist/${suffix}`

    // 修改打包文件名
    memo.hash = true // 启用文件哈希
    memo.chunks = ['vendors', 'umi'] // 分块配置
    memo.inlineLimit = 0 // 禁用所有资源的内联，强制输出为文件

    // 使用 UMI 内置的文件名配置
    memo.outputPath = `dist/${suffix}`

    // 通过 webpack 配置修改文件名
    const originalChainWebpack = memo.chainWebpack
    memo.chainWebpack = (config: any, { env }: any) => {
      // 如果原来有 chainWebpack，先执行
      if (originalChainWebpack) {
        originalChainWebpack(config, { env })
      }

      // 修改 JS 文件名
      config.output
        .filename((pathData: any) => {
          const originalName = pathData.chunk?.name || pathData.filename || 'unknown'
          const hash = generateFileName(originalName, 'js')
          return `assets/${hash}`
        })
        .chunkFilename((pathData: any) => {
          const originalName = pathData.chunk?.name || 'chunk'
          const hash = generateFileName(`${originalName}_chunk`)
          return `assets/${hash}.js`
        })

      // 修改 CSS 文件名 - 尝试修改常见的 CSS 插件
      const cssPluginNames = ['extract-css', 'mini-css-extract-plugin', 'optimize-css-assets-webpack-plugin']
      cssPluginNames.forEach((pluginName) => {
        try {
          if (config.plugins.has(pluginName)) {
            config.plugin(pluginName).tap((args: any) => {
              if (args && args[0] && typeof args[0] === 'object') {
                args[0].filename = (pathData: any) => {
                  const originalName = pathData.chunk?.name || 'style'
                  const hash = generateFileName(originalName)
                  return `${hash}.css`
                }
                args[0].chunkFilename = (pathData: any) => {
                  const originalName = pathData.chunk?.name || 'chunk'
                  const hash = generateFileName(`${originalName}_chunk`)
                  return `${hash}.css`
                }
              }
              return args
            })
          }
        }
        catch {
          // 忽略不存在的插件
        }
      })

      // 修改静态资源文件名 - 更全面的处理方式

      // 直接设置webpack输出配置
      config.output.assetModuleFilename((pathData: any) => {
        const resourcePath = pathData.filename || ''
        const originalName = resourcePath.split('/').pop()?.split('.')[0] || 'asset'
        const ext = resourcePath.split('.').pop()
        const hash = generateFileName(originalName)

        // 根据文件类型分类
        return `static/${hash}.${ext}`
      })

      // 强制所有图片使用 asset/resource (webpack 5)
      config.module
        .rule('force-assets')
        .test(/\.(png|jpe?g|gif|webp|bmp|tiff|svg|ico|woff2?|eot|ttf|otf|mp4|webm|ogg|mp3|wav|flac|aac)$/i)
        .type('asset/resource')
        .generator({
          filename: (pathData: any) => {
            const resourcePath = pathData.filename || ''
            const originalName = resourcePath.split('/').pop()?.split('.')[0] || 'asset'
            const ext = resourcePath.split('.').pop()
            const hash = generateFileName(originalName)

            return `static/${hash}.${ext}`
          },
        })

      return config
    }

    return memo
  })

  // 使用UMI的onBuildComplete钩子来重命名HTML文件
  api.onBuildComplete(({ err }) => {
    if (err)
      return

    try {
      const suffix = `${process.env.MPA_FILTER}${process.env.KEY}`
      const distPath = path.join(process.cwd(), 'dist', suffix)
      const sourceFileName = `${process.env.MPA_FILTER}.html` // 查找{MPA_FILTER}.html文件

      // 查找{MPA_FILTER}.html文件并重命名为index.html
      const sourcePath = path.join(distPath, sourceFileName)
      const targetPath = path.join(distPath, 'index.html')

      if (fs.existsSync(sourcePath)) {
        // 如果已存在index.html，先删除
        if (fs.existsSync(targetPath)) {
          fs.unlinkSync(targetPath)
        }

        fs.renameSync(sourcePath, targetPath)
        console.warn(`✅ HTML文件已重命名: ${sourceFileName} -> index.html`)
      }
      else {
        console.warn(`⚠️  未找到文件: ${sourceFileName}`)
      }
    }
    catch (error) {
      console.error('重命名HTML文件时出错:', error)
    }
  })
}
