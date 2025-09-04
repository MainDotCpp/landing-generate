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
          今、日本の市場全体に大きな潮の変化が押し寄せています。テレビでは「最高値更新」のニュースが続き、消費も活気を取り戻し、海外資金も静かに流入中。
          <br />
          しかし、この変化を「ただ眺めている人」と「波を先に掴む人」の差は、あまりにも大きい。準備をしている人だけが、いざという時に動けるのです。
        </article>
        <p className="text-box">
          今すぐLINEを追加して、市場の変化を
          <br />
          先取りしましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span className="text-box">
          👉 LINEでは、今起きている"潮の変化"を
          <br />
          短く、分かりやすくお届けします
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
