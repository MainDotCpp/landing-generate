import Template from '@/templates/jp02/index'

import motivationImage from './static/617325b7-f62c-4373-a533-869c3f00d34a.png'
import teacherImage from './static/700763a9-712d-4ecf-8097-a5aa69737879.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: '/src/templates/jp02/template.html',
}
export default () => {
  return <Template name="高橋洋一" motivationImage={motivationImage} teacherImage={teacherImage} />
}
