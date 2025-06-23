// 简单的cookie允许逻辑
document.addEventListener('DOMContentLoaded', () => {
  let acceptBtn = document.getElementById('cookie-accept')
  let banner = document.getElementById('cookie-banner')
  if (!acceptBtn || !banner)
    return
  acceptBtn.onclick = function () {
    banner.style.display = 'none'
    document.cookie = 'cookieAccepted=true; path=/; max-age=31536000'
  }
  // 如果已同意则不显示
  if (document.cookie.includes('cookieAccepted=true')) {
    banner.style.display = 'none'
  }

  // Start Analysis 按钮过渡动画+modal
  let btn = document.querySelector('.btn')
  let modal = document.getElementById('ai-modal')
  let progress = [
    document.getElementById('bar-1'),
    document.getElementById('bar-2'),
    document.getElementById('bar-3'),
  ]
  let aiProgress = document.getElementById('ai-progress')
  let aiResult = document.getElementById('ai-result')
  let chatBtn = document.getElementById('chat-btn')
  if (
    btn
    && modal
    && progress[0]
    && progress[1]
    && progress[2]
    && aiProgress
    && aiResult
    && chatBtn
  ) {
    btn.addEventListener('click', () => {
      if (btn.disabled)
        return
      let oldText = btn.textContent
      btn.textContent = 'Analyzing...'
      btn.disabled = true
      btn.style.opacity = '0.7'
      setTimeout(() => {
        btn.textContent = oldText
        btn.disabled = false
        btn.style.opacity = ''
      }, 1500)

      // 显示modal和进度
      modal.style.display = 'block'
      aiProgress.style.display = 'block'
      aiResult.style.display = 'none'
      // 重置进度条
      progress.forEach((bar) => {
        bar.style.width = '0%'
      })
      // 动画进度
      let t = 0
      let interval = 30
      let duration = 1500
      var timer = setInterval(() => {
        t += interval
        let percent = Math.min(100, Math.round((t / duration) * 100))
        progress[0].style.width = `${percent}%`
        if (percent > 33)
          progress[1].style.width = `${(percent - 33) * 1.5}%`
        if (percent > 66)
          progress[2].style.width = `${(percent - 66) * 3}%`
        if (t >= duration) {
          clearInterval(timer)
          progress.forEach((bar) => {
            bar.style.width = '100%'
          })
          // 0.2秒后显示结果
          setTimeout(() => {
            aiProgress.style.display = 'none'
            aiResult.style.display = 'block'
          }, 200)
        }
      }, interval)
    })

    // 用户点击 WhatsApp 按钮后关闭modal
    chatBtn.addEventListener('click', () => {
      modal.style.display = 'none'
      aiProgress.style.display = 'block'
      aiResult.style.display = 'none'
    })
  }
})
