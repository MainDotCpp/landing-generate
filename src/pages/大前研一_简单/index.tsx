import Template from '@/templates/学长/index'
import o_htdyImage from './static/htdy.jpg'
import o_tuImage from './static/TU.png'

export const config = {
  title: '大前研一の戦略的投資法：グローバル視点で市場を制する',
}
export default () => {
  return (
    <Template
      personName="大前研一"
      introText="皆さん、こんにちは。大前研一です。私はマッキンゼー・アンド・カンパニー日本支社長を務め、現在はビジネス・ブレークスルー大学学長として活動しています。戦略コンサルタントとして培った「戦略的思考」こそが、投資の世界でも最強の武器となります。今日は従来の感情的な投資手法を一掃し、グローバルな視点と論理的分析に基づいた革新的な投資戦略をお教えしましょう。21世紀の投資家に必要なのは、国境を超えた戦略的思考です！"
      strategyButtonText="大前研一の戦略的投資法 – グローバル思考で勝利を掴む"
      htdyImage={o_htdyImage}
      tuImage={o_tuImage}
    />
  )
}
