import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '馬渕磨理子',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          馬渕磨理子のLINEを無料で追加し、「受取」と送信するだけで、翌日株価が上がる銘柄がわかります。
          さらに、毎週50％の利益が期待できる優良銘柄の情報も手に入ります。
        </article>
        <p className="text-box">
          今すぐ参加して、優良株をゲ
          <br />
          ットしましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span class="text-box">
          LINEを追加して「受取」と送信する
          <br />
          と、最新の株価上昇ニュースを
          <br />
          無料で受け取れます！
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
