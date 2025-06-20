import Template from '@/templates/jp03/index'
import cs01Image from './static/cs01-1.jpg'
import cs02Image from './static/cs02-1067x800.jpg'
import cs03Image from './static/cs03.jpg'
import cs04Image from './static/cs04.jpg'

export const config = {
  title: '株式市場情報です',
}
export default () => {
  return (
    <Template
      cs01Image={cs01Image}
      cs02Image={cs02Image}
      cs03Image={cs03Image}
      cs04Image={cs04Image}
    />
  )
}
