import Template from '@/templates/jp04V2/index'
import heroAiba from './static/hero_aiba.png'
import heroBgSpWebp from './static/hero_bg_sp.webp'
import profileAiba from './static/profile_aiba.png'
import reasonThumb02 from './static/reason_thumb02.jpg'
import reasonThumb04 from './static/reason_thumb04.jpg'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: 'src/templates/jp04/template.html',
}
export default () => {
  return (
    <Template
      firstName="大前"
      personName="大前 研一"
      heroAiba={heroAiba}
      heroBgSpWebp={heroBgSpWebp}
      profileAiba={profileAiba}
      reasonThumb02={reasonThumb02}
      reasonThumb04={reasonThumb04}
    />
  )
}
