import Page from './index.jsx'
import buttonImage from './static/b2-1400x282.png'
import cs01Image from './static/cs01-1.jpg'
import cs02Image from './static/cs02-1067x800.jpg'
import cs03Image from './static/cs03.jpg'
import cs04Image from './static/cs04.jpg'
import logoImage from './static/photo_2025-02-27_01-55-17.png'

function PageWithImages() {
  return (
    <Page
      logoImage={logoImage}
      buttonImage={buttonImage}
      cs01Image={cs01Image}
      cs02Image={cs02Image}
      cs03Image={cs03Image}
      cs04Image={cs04Image}
      // 使用默认的包含人名的文本内容，也可以自定义
      // personName="田中太郎"
      // mainTitle="累計利益50億円を達成した個人投資家・田中太郎2025年の目標、個人投資家へのアドバイスを公開"
      // personDescription="かつて「革新的投資家」として知られた私、田中太郎が身をもって体験してきた「事実」です。"
      // sectionTitle="田中太郎: 15年連続プラス収益達成の投資哲学"
    />
  )
}

export default PageWithImages
