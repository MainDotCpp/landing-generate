import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '小谷真生子',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          小谷真生子のLINE公式アカウントでは、過去1年間で平均獲得利益率216%を達成した注目銘柄情報を毎日無料で配信中。
          投資初心者から上級者まで、誰でもチャンスを掴めます。
        </article>
        <p className="text-box">
          今すぐLINEを追加して、最短翌日に上昇する銘柄情報を手に入れましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span class="text-box">
          LINEで「受取」と送信するだけで、毎週最大300%の利益が期待できる厳選銘柄や、最新の急騰ニュースをいち早くお届け。
          <br />
          今だけ限定、無料で体験可能！
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
