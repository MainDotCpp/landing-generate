import Template from '@/templates/学长V2/index'
import o_htdyImage from './static/htdy.jpg'
import o_tuImage from './static/TU.png'

export const config = {
  title: '大前研一の投資の秘訣：初心者でも分かる市場分析',
}
export default () => {
  return (
    <Template
      personName="大前研一"
      introText="大前研一の公式LINEを追加して、限定の投資情報を手に入れましょう。「特別」とメッセージを送ると、厳選された推奨銘柄リストを無料でお届けします。毎週更新される市場分析で、賢い投資を始めましょう。

今すぐ登録して、富への第一歩を踏み出しましょう！"
      strategyButtonText="限定情報を受け取る"
      htdyImage={o_htdyImage}
      tuImage={o_tuImage}
    />
  )
}
