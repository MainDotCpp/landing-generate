import Template from '@/templates/jp_plain/index'
import image1 from './assets/images/daqian_image1.jpg'
import image2 from './assets/images/daqian_image2.jpg'
import image3 from './assets/images/daqian_image3.jpg'

export const config = {
  template: 'src/templates/jp_plain/template.html',
}
export default () => {
  return (
    <Template
      teacherName="大前 研一"
      heroImage={image1}
      avatarImage={image2}
      contentImage={image3}
    />
  )
}
