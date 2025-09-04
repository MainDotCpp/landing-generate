import Template from '@/templates/銘柄相談スパッと回答くん/index'
import a5Png from './static/A5.png'
import about02Img01Png from './static/about02_img01.png'
import mvBgPcPng from './static/mv_bg_pc.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: 'src/templates/銘柄相談スパッと回答くん/index.html',
}
export default () => {
  return (
    <Template
      personName="テスタ"
      a5Png={a5Png}
      mvBgPcPng={mvBgPcPng}
      about02Img01Png={about02Img01Png}
    />
  )
}
