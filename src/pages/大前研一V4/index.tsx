import Template from '@/templates/经典4.0/index'
import a5Png from './static/A5.png'
import about02Img01Png from './static/about02_img01.png'
import mvBgPcPng from './static/mv_bg_pc.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: 'src/templates/经典4.0/index.html',
}
export default () => {
  return (
    <Template
      personName="大前流・資産形成学院"
      a5Png={a5Png}
      mvBgPcPng={mvBgPcPng}
      about02Img01Png={about02Img01Png}
    />
  )
}
