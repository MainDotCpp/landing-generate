import { FaLine } from 'react-icons/fa'
import { redirect } from '@/utils/redicrect'
import './styles.css'

function Page({
  personName = '本田健',
  introText,
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
        {introText}
        {/* 第一个按钮 */}
        <div
          className="button"
          onClick={redirect}
          style={{ marginInline: 'auto', marginTop: '10px' }}
        >
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
