import Template from '@/templates/銘柄相談スパッと回答くん/index'
import a5Png from './static/songben_A5.png'
import about02Img01Png from './static/songben_about02_img01.png'
import mvBgPcPng from './static/songben_mv_bg_pc.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: '/src/templates/銘柄相談スパッと回答くん/index.html',
}
export default () => {
  return (
    <Template
      personName="松本大"
      a5Png={a5Png}
      mvBgPcPng={mvBgPcPng}
      about02Img01Png={about02Img01Png}
    />
  )
}
