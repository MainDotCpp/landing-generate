import Template from '@/templates/学长/index'
import o_htdyImage from './static/htdy.jpg'
import o_tuImage from './static/TU.png'

export const config = {
  title: '成田悠輔のデータドリブン投資法：アルゴリズムで市場を攻略する',
}
export default () => {
  return (
    <Template
      personName="成田悠輔"
      introText="皆さん、こんにちは。成田悠輔です。私はイェール大学でアシスタント・プロフェッサーを務めながら、半熟仮想株式会社の代表取締役として活動しています。データ・アルゴリズム・数学・ポエムを駆使したビジネスと公共政策のデザインが私の専門領域です。今日は従来の投資概念を覆す、データサイエンスに基づいた革新的な投資手法をお教えしましょう。感情に左右されない、純粋に数学的なアプローチで市場を征服する時代が来ました！"
      strategyButtonText="成田悠輔のアルゴリズム投資戦略 – データが示す勝利の方程式"
      htdyImage={o_htdyImage}
      tuImage={o_tuImage}
    />
  )
}
