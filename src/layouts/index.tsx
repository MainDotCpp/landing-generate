import { useExternal } from 'ahooks'
import AOS from 'aos'
import ReactLenis, { useLenis } from 'lenis/react'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import 'aos/dist/aos.css'
import './index.less'

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

function aosInit() {
  AOS.init({
    duration: 1000,
    once: true,
  })
}

function initLenis() {
  useLenis()
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
