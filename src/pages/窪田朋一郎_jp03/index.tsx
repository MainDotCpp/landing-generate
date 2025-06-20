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
      personName="窪田朋一郎"
      mainTitle="累計利益100億円を達成した個人投資家・窪田朋一郎2025年の目標、個人投資家へのアドバイスを公開"
      personDescription="かつて「モノ言う株主」として知られた私、窪田朋一郎が身をもって体験してきた「事実」です。"
      sectionTitle="窪田朋一郎: 20年連続プラス収益達成の投資哲学"
    />
  )
}
