import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '高橋洋一',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          高橋洋一のLINEを無料で追加し、「受取」と送信するだけで、注目の銘柄情報をチェックできます。
          さらに、300%利益実績に基づいた優良銘柄の情報も毎週お届けします。

        </article>
        <p className="text-box">
          今すぐ参加して
          <br />
          投資の参考に役立てましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span class="text-box">
          LINEを追加して「受取」と送信すると
          <br />
          最新の注目銘柄情報を無料でチェックできます。
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
