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
          9月の日本株市場は、明暗がくっきりと分かれてきました。
          <br />
          半導体、AI関連、そして自社株買いが加速する銘柄が、静かに動き始めています。
          <br />
          私の投資研究グループでは、
          <strong>急落リスクがある【要注意銘柄3つ】</strong>
          と、
          <strong>成長が期待される【注目銘柄】</strong>
          を、毎日LINEで無料配信しています。
          <br />
          実際、この半年で紹介した銘柄の多くが、
          <strong>日経平均を大きく上回るパフォーマンス</strong>
          を記録しました。
          <br />
          複雑な分析は必要ありません。
          スマホで届く情報を確認するだけです。
          <br />
          今は
          <strong>「知っている人だけ」</strong>
          が、資産を守り、増やせる時代です。
          下のボタンからLINEを追加して、
          <strong>9月の注目銘柄と最新投資情報</strong>
          を、今すぐ無料で受け取ってください。
        </article>
        <p className="text-box">
          投資で最も重要なのは
          <br />
          <strong>「知っているかどうか」</strong>
        </p>
        <img src={btn} alt="btn" className="btn" {...redirectProps} />

        <span className="text-box">
          👉 LINEを追加するだけで
          <br />
          次の500万円チャンスを掴みましょう！
        </span>

        <img src={img1} alt="img1" className="img1" />
        <img src={btn} alt="btn" className="btn" {...redirectProps} />
        <span className="text-box">プライバシーポリシー</span>
      </div>
    </>
  )
}
