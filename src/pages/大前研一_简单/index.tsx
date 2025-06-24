import Template from '@/templates/学长V2/index'
import o_htdyImage from './static/htdy.jpg'
import o_tuImage from './static/TU.png'

export const config = {
  title: '大前 研一の投資の秘訣：初心者でも分かる市場分析',
}
export default () => {
  return (
    <Template
      personName="大前 研一"
      introText={(
        <div style={{ fontSize: '12px', textAlign: 'left' }}>
          <div>✅暴騰候補銘柄を毎日配信</div>
          <div>✅急騰株の最新情報を每日更新</div>
          <div>✅優良銘柄を無料受取. 株式市場の動向をわかりやすく配信中</div>
          <div>✅高勝率投資スキルを学び、毎週3つの急騰株を推奨</div>
          <div>✅株主優待投资家「大前 研一」の株式取引法</div>
          <div>✅少額から学べる無料投資クラブ、LINE追加で今すぐスタート</div>
        </div>
      )}
      strategyButtonText="限定情報を受け取る"
      htdyImage={o_htdyImage}
      tuImage={o_tuImage}
    />
  )
}
