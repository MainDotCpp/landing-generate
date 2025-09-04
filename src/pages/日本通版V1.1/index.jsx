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
          <div>知識を身につけるかどうかで、未来が変わります。</div>
          <div>資産を守り、冷静に判断するための第一歩を今すぐ。</div>
          <div>「金融リテラシー」を学び、不安定な相場でも落ち着いて考えられる力を身につけましょう。</div>
          <div>✔ 相場をデータで理解する基礎知識</div>
          <div>✔ 制度や仕組みを正しく知る方法（NISAやiDeCoなど）</div>
          <div>✔ 初心者でもスマホ1台で学べるシンプルなステップ</div>
          <div className="highlight">
            現在、LINEを追加すると、
            <br />
            「初心者向け金融学習資料」を無料で受け取れます。
            <br />
            学習資料を通じて、冷静な判断力を身につけましょう。
          </div>
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
