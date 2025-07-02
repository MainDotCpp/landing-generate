import Template from '@/templates/合体/index'
import a5Png from './static/A5.png'
import about02Img01Png from './static/about02_img01.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: 'src/templates/合体/index.html',
}
export default () => {
  return (
    <Template
      personName={
        <div style={{ padding: '0 30px', fontSize: '26px', fontWeight: '300', lineHeight: '1.7' }}>馬渕磨理子のLINEを無料で追加して、明日の急騰株を入手しましょう！LINEを追加するだけで、無料で受け取れます。さらに、グループにも参加可能！無料の投資関連書籍や、毎週10％の利益が期待される銘柄も入手できます。投資初心者でも、たった1ヶ月で100万、200万は当たり前に稼げてしま 5。 1日たった5分で出来る投資法が無料公開され絶賛の声が続出！！</div>
      }
      a5Png={a5Png}
      about02Img01Png={about02Img01Png}
    />
  )
}
