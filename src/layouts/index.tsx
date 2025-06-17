import { useExternal } from 'ahooks'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import './index.less'
import '../../tailwind.css'

// @ts-expect-error GA is defined
if (GA) {
  ReactGA.initialize([{ trackingId: 'G-4W2QRS0ZM2' }], {
  })

  ReactGA.set({
    page: PAGE,
    key: KEY_ENCRYPTED,
    content_group: PAGE,
    hostname: document.location.hostname,
  })
}

// mGbSqaPxSgmQXjYBhItCwg

export default function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = 'https://umami.ddiwo.com/script.js'
  //   script.async = true
  //   script.dataset.websiteId = '5dbf4988-364b-455c-b69d-6976c26ef00f'
  //   document.body.querySelector('main')?.appendChild(script)
  //   window.addEventListener('load', () => {
  //     window.umami.track('view', {
  //       url: window.location.href,
  //       title: document.title,
  //       key: KEY_ENCRYPTED,
  //     })
  //   })
  // }, [])
  return (
    <>
      {children}
    </>
  )
}
