import Template from '@/templates/学长/index'
import o_htdyImage from './static/htdy.jpg'
import o_tuImage from './static/TU.png'

export const config = {
  title: '三橋貴明の投資メソッド：毎月70～150%の配当を狙える',
}
const style = `
body {
  background-color: #B3B1B1;
}
.second-button,
.button {
  color: #000;
  margin: 0 auto;
  background-color: #FFF;
}

.button:hover {
  color: #FFF;
  background-color: #05A948;
}
.second-button:hover {
  color: #FFF;
  background-color: #05A948;
}



`

export default () => {
  return (
    <>
      <style>{style}</style>
      <Template
        personName="三橋貴明"
        introText="三橋貴明のLINEを無料で追加して、明日の急騰株を入手しましょう！LINEを追加するだけで、無料で受け取れます。さらに、グループにも参加可能！無料の投資関連書籍や、毎週300％の利益が期待される銘柄も入手できます。"
        strategyButtonText="特別な投資情報をお届けします！"
        htdyImage={o_htdyImage}
        tuImage={o_tuImage}
      />
    </>
  )
}
