import Template from '@/templates/经典 mini/index'
// import about02Img01Png from './static/about02_img01.png'
// import mvBgPcPng from './static/mv_bg_pc.png'
import mvBgPcPng from './static/G1.png'
// import a5Png from './static/A5.png'
import a5Png from './static/G2.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: 'src/templates/经典 mini/index.html',
}
export default () => {
  return (
    <Template
      personName="大前 研一"
      a5Png={a5Png}
      mvBgPcPng={mvBgPcPng}
      // about02Img01Png={about02Img01Png}
    />
  )
}
