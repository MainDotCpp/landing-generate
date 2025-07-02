import { redirect } from '@/utils/redicrect'
import img1 from './static/1.jpg'
import img2 from './static/2.jpg'
import btn1 from './static/btn.png'
import logo from './static/logo.png'
import './index.css'

export const config = {
  title: '急騰候補株を無料で配信',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div className="text-box">
          <div>暴落相場こそ、"知っているか知らないか"で未来が変わる。 資産を守り、増やすための第一歩を今すぐ。 </div>
          <div>株価が暴落して不安になっていませんか？ 実はこの局面、「資産を増やしている人」がいます。  </div>
          <div>✔️ 暴落をチャンスと捉えた“逆張り”戦略。 </div>
          <div>✔️ NISAやiDeCoでは守れなかった資産を取り戻す方法。 </div>
          <div>✔️ 初心者でもスマホ1台で始め。 </div>
          <div className="highlight">現在、先生のLINEを追加して、「優良株の受け取り」を送信すれば、短期急騰する優良株と2025年の株市の最新情報分析を無料で受け取ることができます。</div>
        </div>
        <div className="btn-box">
          <img src={btn1} alt="btn1" className="btn" onClick={redirect} />
        </div>
        <div className="img-box">
          <img src={img1} alt="img1" className="img" />
        </div>
        <div className="btn-box">
          <img src={btn1} alt="btn1" className="btn" onClick={redirect} />
        </div>
        <div className="img-box">
          <img src={img2} alt="img2" className="img" />
        </div>
        <div className="btn-box float">
          <img src={btn1} alt="btn1" className="btn" onClick={redirect} />
        </div>
      </div>
    </>
  )
}
