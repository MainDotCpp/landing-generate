import { redirect } from '@/utils/redicrect'
import chartImage from './static/667.jpg.png'
import whatsappIcon from './static/LI.png.jpeg'
import rwImage from './static/RW.jpg'
import './style.css'

export const config = {
  title: 'HKCM',
}

export default () => {
  return (
    <div className="us03">
      {/* 第一张图片 */}
      <div className="image-container">
        <img src={rwImage} alt="图片" />
      </div>
      {/* 第一段文本 */}
      <div className="text-container">
        <h1>Jens Rabe</h1>
        <p>
          Fügen Sie mich einfach kostenlos bei WhatsApp hinzu und senden Sie die
          Zahl "7" – und Sie erfahren, welche Aktie morgen steigt!Antworten Sie mit
          "77", um die stabile, langfristige Premium-Mitgliedschaft freizuschalten
          und eine kontinuierliche Zusammenarbeit zu ermöglichen Nur durch das
          Hinzufügen auf WhatsApp erhalten Sie kostenlos exklusive Infos und
          Empfehlungen zu Top-Aktien mit bis zu 30 % Wochenrendite.
        </p>
        {/* 第一个按钮 */}
        <button className="button" onClick={redirect}>
          Jetzt beitreten und von starken Kursgewinnen profitieren!
        </button>
      </div>
      {/* 第二张图片 */}
      <div className="second-image-container">
        <a onClick={redirect}>
          {/* 点击跳转链接 */}
          <img src={chartImage} alt="图片" />
        </a>
        {/* 第二段文本覆盖在图片底部 */}
        <div className="second-text-overlay">
          Fügen Sie mich bei WhatsApp hinzu und senden Sie "7" – schon erhalten Sie
          kostenlos die neuesten Infos zu Aktien mit Aufwärtspotenzial!
        </div>
      </div>
      {/* 第二个按钮 */}
      <button className="second-button" onClick={redirect}>
        <img src={whatsappIcon} alt="图标" />
        WhatsApp hinzu – antworten Sie dann mit "7" oder "77"
      </button>
      <footer>
        <div className="footer-links"></div>
      </footer>
    </div>

  )
}
