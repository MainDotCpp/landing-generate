import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '上岡正明',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          <strong>上岡正明</strong>
          が厳選する投資情報で、
          <strong>500万円以上の利益</strong>
          を実現した方が続出中！特別な知識や経験は一切不要。スマホで情報をチェックするだけで、あなたの資産が変わるかもしれません。
          <br />
          私たちのLINEグループでは、
          <strong>急落リスクの高い注意銘柄</strong>
          と
          <strong>急騰が期待される注目銘柄</strong>
          を毎日無料で配信。この情報を活用して、短期間で大きな資産の変化を手にした方も多数いらっしゃいます🚀
        </article>
        <p className="text-box">
          投資で最も重要なのは
          <br />
          <strong>「知っているかどうか」</strong>
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span className="text-box">
          👉 LINEを追加するだけで
          <br />
          次の500万円チャンスを掴みましょう！
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
