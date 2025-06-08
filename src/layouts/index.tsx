import ReactGA from 'react-ga4'
import './index.less'

ReactGA.initialize([
  {
    trackingId: 'G-4W2QRS0ZM2',
  },
])

ReactGA.send({ hitType: 'pageview', hostname: document.location.hostname })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      { children }
    </>
  )
}
