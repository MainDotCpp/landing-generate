import ReactGA from 'react-ga4'

export function redirect() {
  // @ts-expect-error GA is defined
  if (GA) {
    try {
      ReactGA.event({
        category: 'conversion',
        action: 'cta_button_click',
        label: 'cta_button_click',
        value: 100,
      })
    }
    catch (error) {
      console.error(error)
    }
  }
  // window.umami.track('button_click', {
  //   url: window.location.href,
  //   title: document.title,
  //   key: KEY_ENCRYPTED,
  // })
  onLinkBtnClick?.()
}
