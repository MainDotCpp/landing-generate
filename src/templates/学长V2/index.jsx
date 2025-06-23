import { FaLine } from 'react-icons/fa'
import { redirect } from '@/utils/redicrect'
import './styles.css'

function Page({
  personName = '本田健',
  introText = '皆さん、こんにちは。本田健です。私は長年にわたり投資と資産運用の分野で活動し、多くの人々の経済的自立をサポートしてきました。私のファンや読者の皆さんに恩返しをするために、今日は株式市場で儲けるための「事実」と「コツ」を紹介しよう！日本市場は暴落が始まる…でも、それがチャンスだ！暴落こそが、富を築く最大のチャンス！',
  strategyButtonText = '本田健の「逆張り」投資戦略',
  htdyImage,
  tuImage,
}) {
  return (
    <div className="page-container">
      {/* 第一张图片 */}
      <div className="image-container">
        <img src={htdyImage} alt={personName} />
      </div>
      {/* 第一段文本 */}
      <div className="text-container">
        <h1>{personName}</h1>
        <p>
          {introText}
        </p>
        {/* 第一个按钮 */}
        <div className="button" onClick={redirect}>
          {strategyButtonText}
        </div>
      </div>
      {/* 第二张图片 */}
      <div className="second-image-container">
        <img src={tuImage} alt="投資チャート" onClick={redirect} />
        {/* 第二段文本覆盖在图片底部 */}
        {/* <div className="second-text-overlay">
          LINE友だち追加で限定情報を受け取る
        </div> */}
      </div>
      {/* 第二个按钮 */}
      <div className="second-button" onClick={redirect}>
        <FaLine />
        LINEで限定情報を受け取る
      </div>
    </div>
  )
}
export default Page
