import Template from '@/templates/jp02/index'
import schoolImage from './static/zeshang_6336dae9-ba07-43fe-afc1-9ba86fc60eab.jpg'
import motivationImage from './static/zeshang_617325b7-f62c-4373-a533-869c3f00d34a.png'
import teacherImage from './static/zeshang_700763a9-712d-4ecf-8097-a5aa69737879.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: '/src/templates/jp02/template.html',
}
export default () => {
  return <Template name="澤上篤人" motivationImage={motivationImage} teacherImage={teacherImage} schoolImage={schoolImage} />
}
