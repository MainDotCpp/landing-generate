import { redirect } from '@/utils/redicrect'
import o_liImage from './static/LI.png'
import './styles.css'

function Page({
  personName = '本田健',
  introText = '皆さん、こんにちは。本田健です。私は長年にわたり投資と資産運用の分野で活動し、多くの人々の経済的自立をサポートしてきました。私のファンや読者の皆さんに恩返しをするために、今日は株式市場で儲けるための「事実」と「コツ」を紹介しよう！日本市場は暴落が始まる…でも、それがチャンスだ！暴落こそが、富を築く最大のチャンス！',
  strategyButtonText = '本田健の投資戦略 – 成功のカギは"逆張り"',
  htdyImage,
  liImage = o_liImage,
  tuImage,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 第一张图片 */}
      <div className="image-container">
        <img src={htdyImage} alt={personName} />
      </div>
      {/* 第一段文本 */}
      <div className="text-container">
        <h1>最新の株式市場情報を共有する</h1>
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
        <div onClick={redirect}>
          {/* 点击打开弹窗 */}
          <img src={tuImage} alt="投資チャート" />
        </div>
        {/* 第二段文本覆盖在图片底部 */}
        <div className="second-text-overlay">毎週、厳選した急騰銘柄3選を無料配信（利益期待度90%以上）</div>
      </div>
      {/* 第二个按钮 */}
      <div className="second-button" onClick={redirect} style={{ textDecoration: 'none' }}>
        <img src={liImage} alt="LINE" />
        先着50名限定！LINEで友達追加して無料情報をゲット
      </div>
    </div>
  )
}
export default Page
