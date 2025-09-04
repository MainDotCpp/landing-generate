import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '森 ふゆこ',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          投資のプロ・森 ふゆこが厳選した銘柄で、過去の実績では平均150%以上の収益率を達成し、多くの投資家が資産を大幅に増やしています。
          LINE公式アカウントで毎日無料配信中。市場の動きを先取りし、高収益チャンスを逃さずお届けします。
        </article>
        <p className="text-box">
          今すぐLINEを追加して、資産増加のチャンスを掴みましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span class="text-box">
          LINEで「受取」と送信するだけで、期待収益率200%以上の厳選銘柄や市場の急騰情報をいち早くお届け。
          <br />
          毎週の収益チャンスと資産増加の機会を、今だけ無料で体験できます！
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
