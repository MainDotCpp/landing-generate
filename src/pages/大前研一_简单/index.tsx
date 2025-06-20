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
      introText="大前研一のLINEを無料で追加して「7」と送信するだけで、明日上がる銘柄がわかります！LINEを追加するだけで、無料で情報を受け取ることができ、毎週30％の利益を約束する優良株も手に入ります。

今すぐ参加して、優良株をゲットしましょう！"
      strategyButtonText="特別な投資情報をお届けします！"
      htdyImage={o_htdyImage}
      tuImage={o_tuImage}
    />
  )
}
