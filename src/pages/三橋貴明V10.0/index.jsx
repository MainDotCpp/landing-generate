import { redirectProps } from '@/utils/redicrect'
import btn from './static/btn.png'
import header from './static/header.png'
import img1 from './static/img.png'
import './index.css'

export const config = {
  title: '三橋貴明',
}

export default () => {
  return (
    <>
      <div className="container">
        <img src={header} alt="header" className="header" />
        <article className="text">
          三橋貴明が特別公開する無料オンライン講座で、「間もなく急落する可能性のある3銘柄」の詳細と、急落の前にどう資産を守り、次のチャンスに備えるべきかをすべてお届けします！
          <br />
          長年の日本株市場経験と実証された投資ノウハウで特定した3銘柄。投資で大切なのは、利益を伸ばすこと以上に、損失を防ぐことです。さらに、参加者全員に「緊急・急落警戒リスト」もプレゼントします📉
        </article>
        <p className="text-box">
          今すぐ参加して、無料の特別講座と
          <br />
          緊急警戒情報をゲットしましょう！
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span className="text-box">
          👉 LINEを追加するだけで
          <br />
          無料の特別講座と緊急警戒情報をゲットしましょう
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
