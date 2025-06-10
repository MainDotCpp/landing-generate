import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import './index.less'

// ReactGA.initialize([
//   {
//     trackingId: 'G-4W2QRS0ZM2',
//   },
// ])

// ReactGA.set({
//   // @ts-expect-error PAGE is defined
//   page: PAGE,
//   // @ts-expect-error KEY_ENCRYPTED is defined
//   key: KEY_ENCRYPTED,
//   // @ts-expect-error PAGE is defined
//   content_group: PAGE,
//   hostname: document.location.hostname,
// })

// mGbSqaPxSgmQXjYBhItCwg

// ReactGA.send({
//   hitType: 'pageview',
//   hostname: document.location.hostname,
//   // @ts-expect-error PAGE is defined
//   page: PAGE,
//   // @ts-expect-error KEY is defined
//   key: KEY_ENCRYPTED,
// })
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
