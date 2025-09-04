import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '朝倉 慶',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          朝倉 慶が特別公開する無料オンライン講座で、今、日本株市場で急上昇のサインを出している特定の3銘柄の詳細と、エントリーから利益確定までの戦略をお届けします！
          <br />
          過去、同じパターンを持つ銘柄は、わずか数週間で500万円以上の利益を生み出した事例があります。さらに、参加者全員に「今、押さえておくべき日本株リスト」をプレゼントします📈
        </article>
        <p className="text-box">
          今すぐ参加して、無料の特別講座と
          <br />
          注目株情報をゲットしましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span className="text-box">
          👉 LINEを追加するだけで
          <br />
          無料の特別講座と注目株情報をゲットしましょう
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
