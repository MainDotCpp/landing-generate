import Template from '@/templates/銘柄相談スパッと回答くん/index'

import a5Png from './static/A5.png'
import about02Img01Png from './static/about02_img01.png'
import mvBgPcPng from './static/mv_bg_pc.png'

export default () => {
  return (
    <Template
      personName="高橋洋一"
      a5Png={a5Png}
      mvBgPcPng={mvBgPcPng}
      about02Img01Png={about02Img01Png}
      // 人物介绍相关
    />
  )
}
