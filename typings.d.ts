import 'umi/typings'

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare const PAGE: string
declare const KEY: string

declare global {
  const PAGE: string
  const KEY: string
  const KEY_ENCRYPTED: string
  const onLinkBtnClick: () => void | undefined
  const gtag_report_conversion: (link: string | undefined) => void | undefined
  const link: string | undefined
  interface Window {
    umami: {
      track: (event: string, data: Record<string, any>) => void
    }
  }
}

export {}
