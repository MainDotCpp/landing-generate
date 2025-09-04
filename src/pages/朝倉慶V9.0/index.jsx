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
          朝倉 慶のLINEを無料で追加し、「7」と送るだけで、明日急騰が期待される銘柄情報がすぐに届きます！
          <br />
          LINEを追加するだけで、毎週最大60％の利益が見込める有望銘柄の無料情報を受け取れます📈
        </article>
        <p className="text-box">
          今すぐ参加して、無料の注目株情報をゲ
          <br />
          ットしましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span class="text-box">
          👉 LINEを追加するだけで
          <br />
          無料の注目株情報をゲットしましょう
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
