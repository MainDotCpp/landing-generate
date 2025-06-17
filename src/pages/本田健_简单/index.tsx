import Template from '@/templates/学长/index'
import o_htdyImage from './static/htdy.jpg'
import o_tuImage from './static/TU.png'

export const config = {
  title: '本田健の投資メソッド：毎月70～150%の配当を狙える',
}
export default () => {
  return (
    <Template
      personName="本田健"
      introText="皆さん、こんにちは。本田健です。私は長年にわたり投資と資産運用の分野で活動し、多くの人々の経済的自立をサポートしてきました。私のファンや読者の皆さんに恩返しをするために、今日は株式市場で儲けるための「事実」と「コツ」を紹介しよう！日本市場は暴落が始まる…でも、それがチャンスだ！暴落こそが、富を築く最大のチャンス！"
      strategyButtonText='本田健の投資戦略 – 成功のカギは"逆張り"'
      htdyImage={o_htdyImage}
      tuImage={o_tuImage}
    />
  )
}
