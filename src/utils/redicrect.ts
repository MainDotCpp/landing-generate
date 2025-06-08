import ReactGA from 'react-ga4'

export function redirect() {
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
  onLinkBtnClick?.()
}
