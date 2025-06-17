import { redirect } from '@/utils/redicrect'
import buttonImage from './static/b2-1400x282.png'
import cs01Image from './static/cs01-1.jpg'
import cs02Image from './static/cs02-1067x800.jpg'
import cs03Image from './static/cs03.jpg'
import cs04Image from './static/cs04.jpg'
// 导入所有静态图片资源
import logoImage from './static/photo_2025-02-27_01-55-17.png'
import './static/flatsome.css'
import './styles.css'

function Page() {
  return (
    <>
      <div id="wrapper">
        <header id="header" className="header ">
          <div className="header-wrapper">
            <div
              id="masthead"
              className="header-main show-logo-center hide-for-sticky"
            >
              <div
                className="header-inner flex-row container logo-center"
                role="navigation"
              >
                {/* Logo */}
                <div id="logo" className="flex-col logo">
                  {/* Header logo */}
                  <a href="#" title="株式市場情報です" rel="home">
                    <img
                      width={320}
                      height={62}
                      src={logoImage}
                      className="header_logo header-logo"
                      alt="株式市場情報です"
                    />
                    <img
                      width={320}
                      height={62}
                      src={logoImage}
                      className="header-logo-dark"
                      alt="株式市場情報です"
                    />
                  </a>
                </div>
                {/* Mobile Left Elements */}
                <div className="flex-col show-for-medium flex-left">
                  <ul className="mobile-nav nav nav-left "></ul>
                </div>
                {/* Left Elements */}
                <div
                  className="flex-col hide-for-medium flex-left
      "
                >
                  <ul className="header-nav header-nav-main nav nav-left  nav-size-xsmall nav-spacing-xsmall"></ul>
                </div>
                {/* Right Elements */}
                <div className="flex-col hide-for-medium flex-right">
                  <ul className="header-nav header-nav-main nav nav-right  nav-size-xsmall nav-spacing-xsmall"></ul>
                </div>
                {/* Mobile Right Elements */}
                <div className="flex-col show-for-medium flex-right">
                  <ul className="mobile-nav nav nav-right "></ul>
                </div>
              </div>
            </div>
            <div className="header-bg-container fill">
              <div className="header-bg-image fill" />
              <div className="header-bg-color fill" />
            </div>
          </div>
        </header>
        <main id="main" className="">
          <div id="content" role="main" className="content-area">
            {/* 添加动画效果到标题 */}
            <div
              data-aos="fade-down"
              data-aos-duration={1000}
              className="aos-init aos-animate"
            >
              <h2 className="uppercase">
                累計利益100億円を達成した個人投資家・藤野英人2025年の目標、個人投資家へのアドバイスを公開
              </h2>
            </div>
            <div
              className="img has-hover x md-x lg-x y md-y lg-y"
              id="image_227475490"
            >
              <div className="img-inner dark" onClick={redirect}>
                <img
                  fetchpriority="high"
                  decoding="async"
                  width={1020}
                  height={569}
                  src={cs01Image}
                  className="attachment-large s1ize-large"
                  alt=""
                  sizes="(max-width: 63.75rem) 100vw, 63.75rem"
                />
              </div>
            </div>
            <div id="text-1926757589" className="text">
              <p className="lead" style={{ textAlign: 'left' }}>
                本当に歴史的な1年でした。日経平均株価がバブル後の最高値を更新したのは、まさに私がかつて信じていた日本株の復活を証明してくれたようでした。私自身も、2025年2月に累計利益が100億円を突破。2023年末に日経平均先物を大量に買い増したのが功を奏しました。単年利益はこれで20年連続のプラスです。
                <br />
                <br />
                日本企業の本質的な価値に注目し、正しい投資判断をすれば、マーケットは必ず応えてくれる——これは、かつて「モノ言う株主」として知られた私、藤野英人が身をもって体験してきた「事実」です。
                <br />
                <br />
                今日は、私のファンや友人、そして日本株に可能性を感じているあなたに、株式市場で儲けるための「事実」と「コツ」を紹介します。
                <br />
                <br />
                下のボタンをクリックしてください。500万ドル相当のデータを受信！
              </p>
            </div>
            <div
              className="img has-hover jump x md-x lg-x y md-y lg-y aos-init aos-animate"
              id="image_165374672"
              data-aos="zoom-in"
              data-aos-duration={800}
              onClick={redirect}
              style={{ cursor: 'pointer' }}
            >
              <div className="img-inner dark">
                <img
                  decoding="async"
                  width={1020}
                  height={205}
                  src={buttonImage}
                  className="attachment-large size-large"
                  alt=""
                />
              </div>
            </div>
            <div id="text-2931120030" className="text">
              <p className="lead">
                この講座を通じて、私が重視してきた「本質的価値に基づく投資手法」、高配当株の見極め方、そして将来の株式市場の動向を的確に予測する力を身につけることができます。現在の的中率は、私自身の30年以上にわたる投資経験に裏打ちされ、**驚異の98.8%**を誇ります。
                <br />
                <br />
                重要なのは——この講座が完全無料であるという事実です。
                かつて「モノ言う株主」として企業改革を促してきた私が、今度は個人投資家の力を底上げしたい。
                <br />
                そんな想いで、すべてを公開する決意をしました。
              </p>
            </div>
            <div
              className="img has-hover x md-x lg-x y md-y lg-y"
              id="image_732662775"
            >
              <div className="img-inner dark">
                <img
                  decoding="async"
                  width={1020}
                  height={765}
                  src={cs02Image}
                  className="attachment-large size-large"
                  alt=""
                  sizes="(max-width: 63.75rem) 100vw, 63.75rem"
                />
              </div>
            </div>
            <div id="text-608648210" className="text">
              <p className="lead">
                株式市場では、時間が経てば経験は積めます。
                <br />
                しかし——経験だけでは成功は掴めません。
                <br />
                これは、私が何度も痛感してきた真実です。
                <br />
                <br />
                損失を利益に変えるためには、「正しい株の買い方」と「時代に合った判断力」が必要です。
                <br />
                今の経済環境に不安を抱える友人や個人投資家の方々の力になりたい——そう思い、私は無料の株式知識講座を開催することを決意しました。
                <br />
                <br />
                この講座には、日本を代表するプロの投資家たちを招いています。
                <br />
                株式投資に少しでも興味のある方なら、どなたでも参加可能です。
                <br />
                本気で経済的自由を目指す方々のための、完全無料の公開講座です。
              </p>
            </div>
            <div
              className="img has-hover jump x md-x lg-x y md-y lg-y"
              id="image_593371238"
            >
              <div className="img-inner dark">
                <img
                  decoding="async"
                  width={1020}
                  height={205}
                  src={buttonImage}
                  className="attachment-large size-large"
                  alt=""
                  sizes="(max-width: 63.75rem) 100vw, 63.75rem"
                />
              </div>
            </div>
            <div
              className="img has-hover x md-x lg-x y md-y lg-y"
              id="image_1645356765"
            >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  decoding="async"
                  width={499}
                  height={347}
                  src={cs03Image}
                  className="attachment-large size-large"
                  alt=""
                />
              </div>
            </div>
            <div id="text-3973726314" className="text">
              <p className="lead">
                「それは現実的ではない」と思う人もいるかもしれません。
                <br />
                しかし、私はこれまでに多くの人々が株式で正しく稼ぐ方法を学ぶ手助けをしてきました。
                <br />
                この手法は、20年近くにわたり効果が実証されているものです。
                <br />
                そして——あなたにも、必ずできます。
                <br />
                <br />
                今すぐ参加してみてください。
                <br />
                株式投資に関する情報やアドバイスをすべて無料で提供しています。
                <br />
                内容は「株」の話だけ。ですが、本気で学びたい方の参加を心から歓迎します。
                <br />
                これは私が、本気で届けたい「知の講座」です。
              </p>
            </div>
            <div
              className="img has-hover x md-x lg-x y md-y lg-y"
              id="image_2068815990"
            >
              <div className="img-inner dark">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1020}
                  height={574}
                  src={cs04Image}
                  className="attachment-large size-large"
                  alt=""
                  sizes="auto, (max-width: 63.75rem) 100vw, 63.75rem"
                />
              </div>
            </div>
            <div id="text-391002468" className="text">
              <p className="lead">
                お困りの方のお役に立てれば嬉しく思います。
                手数料は一切かかりません。新しい投資手法やテクニックを活用し、投資の根本的な論理を理解し、自分の未来を自分でコントロールすることができるようにしましょう。
                <br />
                <br />
                LINEを追加して、優良株リストを無料でお受け取りください。
                そのうち3銘柄は今週大きく上昇します。
                金融専門家からのアドバイスを取得し、株式の知識を学んで株式投資に役立ててください。
              </p>
            </div>
            <div
              className="img has-hover jump x md-x lg-x y md-y lg-y"
              id="image_1017081754"
            >
              <div className="img-inner dark">
                <img
                  decoding="async"
                  width={1020}
                  height={205}
                  src={buttonImage}
                  className="attachment-large size-large"
                  alt=""
                  sizes="(max-width: 63.75rem) 100vw, 63.75rem"
                />
              </div>
            </div>
            <div
              className="content-section aos-init aos-animate"
              data-aos="fade-up"
            >
              <h2 className="uppercase">
                藤野英人: 20年連続プラス収益達成の投資哲学
              </h2>
              <div className="stock-stats">
                <div
                  className="stat-card aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <div className="stat-number">100億円</div>
                  <p>累計利益</p>
                </div>
                <div className="stat-card aos-init aos-animate" data-aos="fade-up">
                  <div className="stat-number">20年</div>
                  <p>連続プラス収益</p>
                </div>
                <div
                  className="stat-card aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <div className="stat-number">98.8%</div>
                  <p>投資予測的中率</p>
                </div>
              </div>
              <div className="quote-block aos-init aos-animate" data-aos="fade-up">
                「市場の本質を理解し、長期的な視点で投資することが、持続的な利益を生み出す鍵となります」-
                藤野英人
              </div>
            </div>
            <div
              className="content-section aos-init aos-animate"
              data-aos="fade-up"
            >
              <h3>2025年の投資戦略と市場展望</h3>
              <div className="investment-tips">
                <p>• 日経平均株価が34年ぶりの高値を更新</p>
                <p>
                  •
                  2025年の重点セクター：テクノロジー、グリーンエネルギー、AI関連企業
                </p>
                <p>• インフレと金利動向を見据えたポートフォリオ構築の重要性</p>
              </div>
            </div>
            <div
              className="img has-hover jump aos-init aos-animate"
              data-aos="zoom-in"
              onClick={redirect}
            >
              <div className="img-inner dark">
                <img src={buttonImage} alt="投資セミナー参加" />
              </div>
            </div>
            <div
              className="content-section aos-init aos-animate"
              data-aos="fade-up"
            >
              <h3>無料投資講座の特典</h3>
              <ul>
                <li>✓ プロの投資家による市場分析</li>
                <li>✓ 厳選された投資銘柄情報</li>
                <li>✓ リスク管理戦略の解説</li>
                <li>✓ ポートフォリオ構築のアドバイス</li>
              </ul>
            </div>
          </div>
        </main>
        <footer id="footer" className="footer-wrapper">
          {/* FOOTER 1 */}
          {/* FOOTER 2 */}
          <div className="absolute-footer dark medium-text-center text-center">
            <div className="container clearfix">
              <div className="footer-primary pull-left">
                <div className="copyright-footer"></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>

  )
}
export default Page
