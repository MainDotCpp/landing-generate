import { redirect } from '@/utils/redicrect'
import bookImg01PcPng from './assets2/images/book_img01_pc.png'

import bookImg01PcWebp from './assets2/images/book_img01_pc.webp'
import bookImg01SpPng from './assets2/images/book_img01_sp.png'
import bookImg01SpWebp from './assets2/images/book_img01_sp.webp'
import bookListJpg from './assets2/images/book_list.jpg'
import bookListWebp from './assets2/images/book_list.webp'
import btnPng from './assets2/images/btn.png'
import btnWebp from './assets2/images/btn.webp'
import btnLPng from './assets2/images/btn_l.png'
import btnLWebp from './assets2/images/btn_l.webp'
import btnSPng from './assets2/images/btn_s.png'
import btnSWebp from './assets2/images/btn_s.webp'
import btnSSpPng from './assets2/images/btn_s_sp.png'
import btnSSpWebp from './assets2/images/btn_s_sp.webp'
import contactBlowingPcPng from './assets2/images/contact_blowing_pc.png'
import contactBlowingPcWebp from './assets2/images/contact_blowing_pc.webp'
import contactBlowingSpPng from './assets2/images/contact_blowing_sp.png'
import contactBlowingSpWebp from './assets2/images/contact_blowing_sp.webp'
import contactFlowImgPcPng from './assets2/images/contact_flow_img_pc.png'
import contactFlowImgPcWebp from './assets2/images/contact_flow_img_pc.webp'
import contactFlowImgSpPng from './assets2/images/contact_flow_img_sp.png'
import contactFlowImgSpWebp from './assets2/images/contact_flow_img_sp.webp'
import flowImg01PcPng from './assets2/images/flow_img01_pc.png'
import flowImg01PcWebp from './assets2/images/flow_img01_pc.webp'
import flowImg01SpPng from './assets2/images/flow_img01_sp.png'
import flowImg01SpWebp from './assets2/images/flow_img01_sp.webp'
import flowListPng from './assets2/images/flow_list.png'
import flowListWebp from './assets2/images/flow_list.webp'
import flowSummaryArrowPng from './assets2/images/flow_summary_arrow.png'
import flowSummaryArrowWebp from './assets2/images/flow_summary_arrow.webp'
import flowSummaryImgPng from './assets2/images/flow_summary_img.png'
import flowSummaryImgWebp from './assets2/images/flow_summary_img.webp'
import fvFormImgPcPng from './assets2/images/fv_form_img_pc.png'
import fvFormImgPcWebp from './assets2/images/fv_form_img_pc.webp'
import fvFormImgSpPng from './assets2/images/fv_form_img_sp.png'
import fvFormImgSpWebp from './assets2/images/fv_form_img_sp.webp'
import fvImg01PcPng from './assets2/images/fv_img01_pc.png'
import fvImg01PcWebp from './assets2/images/fv_img01_pc.webp'
import fvImg01SpPng from './assets2/images/fv_img01_sp.png'
import fvImg01SpWebp from './assets2/images/fv_img01_sp.webp'
import leadChart01Png from './assets2/images/lead_chart01.png'
import leadChart01Webp from './assets2/images/lead_chart01.webp'
import leadChart02Png from './assets2/images/lead_chart02.png'
import leadChart02Webp from './assets2/images/lead_chart02.webp'
import leadImg01PcPng from './assets2/images/lead_img01_pc.png'
import leadImg01PcWebp from './assets2/images/lead_img01_pc.webp'
import leadImg01SpPng from './assets2/images/lead_img01_sp.png'
import leadImg01SpWebp from './assets2/images/lead_img01_sp.webp'
import leadImg02Png from './assets2/images/lead_img02.png'
import leadImg02Webp from './assets2/images/lead_img02.webp'
import leadImg03PcPng from './assets2/images/lead_img03_pc.png'
import leadImg03PcWebp from './assets2/images/lead_img03_pc.webp'
import leadImg03SpPng from './assets2/images/lead_img03_sp.png'
import leadImg03SpWebp from './assets2/images/lead_img03_sp.webp'
import leadImg04PcPng from './assets2/images/lead_img04_pc.png'
import leadImg04PcWebp from './assets2/images/lead_img04_pc.webp'
import leadImg04SpPng from './assets2/images/lead_img04_sp.png'
import leadImg04SpWebp from './assets2/images/lead_img04_sp.webp'
import leadSummaryPng from './assets2/images/lead_summary.png'
import leadSummaryWebp from './assets2/images/lead_summary.webp'
// Image imports
import logoWhtPng from './assets2/images/logo_wht.png'
import logoWhtWebp from './assets2/images/logo_wht.webp'
import reasonImg01Png from './assets2/images/reason_img01.png'
import reasonImg01Webp from './assets2/images/reason_img01.webp'
import reasonImg02Png from './assets2/images/reason_img02.png'
import reasonImg02Webp from './assets2/images/reason_img02.webp'
import reasonImg03Png from './assets2/images/reason_img03.png'
import reasonImg03Webp from './assets2/images/reason_img03.webp'
import reasonSummaryPng from './assets2/images/reason_summary.png'
import reasonSummaryWebp from './assets2/images/reason_summary.webp'
import './assets2/css/normalize.min.css'
import './assets2/css/style.css'
import './common/system.css'

export const config = {
  title: '急騰低位株で大勝利する投資術 - Vinetec',
}

export default () => {
  return (
    <>
      <header className="l-header">
        <div className="l-header__logo">
          <picture>
            <source srcSet={logoWhtWebp} type="image/webp" />
            <img
              width={161}
              height={41}
              src={logoWhtPng}
              alt="Vinetecのロゴ"
            />
          </picture>
        </div>
        <div className="l-header__tel">
          <a href="tel:03-5579-5113">03-5579-5113</a>
        </div>
      </header>
      <main>
        {/* l-fv */}
        <section className="l-fv" id="anc01">
          <div className="c-section_wrapper--800">
            <div className="l-fv__img">
              <picture>

                <source
                  media="(max-width:768px)"
                  srcSet={fvImg01SpWebp}
                  type="image/webp"
                  width={674}
                  height={782}
                />
                <source
                  media="(max-width:768px)"
                  srcSet={fvImg01SpPng}
                  width={674}
                  height={782}
                />

                <source
                  srcSet={fvImg01PcWebp}
                  type="image/webp"
                />
                <img
                  width={778}
                  height={331}
                  src={fvImg01PcPng}
                  alt="少額で100倍株をキャッチ！急騰低位株で大勝利する投資術"
                  className="u-mb40"
                />
              </picture>
            </div>
            <div className="p-cta_btn--s">
              <a href="#form">
                <picture>
                  <source
                    media="(max-width:768px)"
                    srcSet={btnSSpWebp}
                    type="image/webp"
                    width={674}
                    height={782}
                  />
                  <source
                    media="(max-width:768px)"
                    srcSet={btnSSpPng}
                    width={551}
                    height={141}
                  />
                  <source srcSet={btnSWebp} type="image/webp" />
                  <img
                    width={551}
                    height={141}
                    src={btnSPng}
                    alt="最短30秒で受け取り完了 無料書籍をダウンロード"
                  />
                </picture>
              </a>
            </div>
          </div>
        </section>
        {/* l-lead */}
        <section className="l-lead" id="anc02">
          <div className="u-textarea">
            <div className="c-section_wrapper--1000">
              <div className="p-flex--left">
                <div className="p-flex--left__img">
                  <picture>
                    <source
                      media="(max-width:768px)"
                      srcSet={leadImg01SpWebp}
                      type="image/webp"
                      width={768}
                      height={800}
                    />
                    <source
                      media="(max-width:768px)"
                      srcSet={leadImg01SpPng}
                      width={768}
                      height={800}
                    />
                    <source
                      srcSet={leadImg01PcWebp}
                      type="image/webp"
                    />
                    <img
                      width={370}
                      height={380}
                      src={leadImg01PcPng}
                      alt="チャート画像"
                    />
                  </picture>
                </div>
                <div className="p-flex--left__text">
                  <h2 className="u-mb40 p-flex--left__text__title">
                    大人気の半導体銘柄も
                    <br className="u-only--pc" />
                    10年前は低位株だった⁈
                  </h2>
                  <p>
                    低位株とは、
                    <span>100株の購入金額が10万円以下で取引される株</span>
                    のこと。
                    <br />
                    1株あたり100円以下で取引される株は「ボロ株」と呼ばれています。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="l-lead__summary01">
            <div className="c-section_wrapper--1000">
              <div className="u-text__align--center">
                <p className="l-lead__summary01__markertext">
                  今や国内外の
                  <br className="u-only--sp" />
                  投資家から注目される半導体銘柄。
                  <br />
                  実は10年前は誰からも
                  <br className="u-only--sp" />
                  見向きされない
                  <span>低位株</span>
                  でした。
                </p>
              </div>
              <div className="l-lead__summary01__img">
                <picture>
                  <source
                    srcSet={leadImg02Webp}
                    type="image/webp"
                  />
                  <img
                    width={1000}
                    height={428}
                    src={leadImg02Png}
                    alt="しかしある人物によって株価が急騰したのです。"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="l-lead__chart">
            <div className="c-section_wrapper--1000">
              <div className="l-lead__chart__wrap u-mb70">
                <div className="l-lead__chart__wrap__title">
                  <p>6920 レーザーテック</p>
                </div>
                <div className="l-lead__chart__wrap__img">
                  <div className="u-mb30">
                    <picture>
                      <source
                        srcSet={leadChart01Webp}
                        type="image/webp"
                      />
                      <img
                        width={732}
                        height={510}
                        src={leadChart01Png}
                        alt="レザーテック 株価212倍"
                      />
                    </picture>
                  </div>
                  <p className="p-attention--red u-mt10">
                    ※あくまで一例として過去の株価チャートを掲載しております。本書籍による学習成果を保証するものではありません。
                  </p>
                </div>
              </div>
              <div className="l-lead__chart__wrap u-mb120">
                <div className="l-lead__chart__wrap__title">
                  <p>6857 アドバンテスト</p>
                </div>
                <div className="l-lead__chart__wrap__img">
                  <div className="u-mb30">
                    <picture>

                      <source
                        srcSet={leadChart02Webp}
                        type="image/webp"
                      />
                      <img
                        width={732}
                        height={513}
                        src={leadChart02Png}
                        alt="アドバンテスト 株価22.4倍"
                      />
                    </picture>
                  </div>
                  <p className="p-attention--red u-mt10">
                    ※あくまで一例として過去の株価チャートを掲載しております。本書籍による学習成果を保証するものではありません。
                  </p>
                </div>
              </div>
              <div className="l-lead__chart__img">
                <picture>
                  <source
                    media="(max-width:426px)"
                    srcSet={leadImg03SpWebp}
                    type="image/webp"
                    width={713}
                    height={800}
                  />
                  <source
                    media="(max-width:426px)"
                    srcSet={leadImg03SpPng}
                    width={713}
                    height={800}
                  />
                  <source
                    srcSet={leadImg03PcWebp}
                    type="image/webp"
                  />
                  <img
                    width={888}
                    height={457}
                    src={leadImg03PcPng}
                    alt="もし、ある人物の介入前にレーザーテックを100株購入していたら…2万円が360万円に大化けしていました。"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className="l-lead__summary">
            <div className="c-section_wrapper--1000">
              <picture>
                <source
                  srcSet={leadSummaryWebp}
                  type="image/webp"
                />
                <img
                  width={988}
                  height={212}
                  src={leadSummaryPng}
                  alt="半導体銘柄を急騰させた【ある人物】その正体は機関投資家"
                />
              </picture>
            </div>
          </div>
          <div className="u-textarea">
            <div className="c-section_wrapper--1000">
              <div className="p-flex--right">
                <div className="p-flex--right__text">
                  <p className="u-mb50">
                    「機関投資家」とは
                    <span>顧客の資金を預かり運用・管理する投資家の総称。</span>
                    主に銀行・年金基金・保険会社・投資信託会社などを指します。
                  </p>
                  <p className="u-mb50">
                    彼らは
                    <span>勝つ」ことがモットー</span>
                    であり、厳格なルールのもと丹念に情報分析を行い、投資先を選定しているのです。
                  </p>
                </div>
                <div className="p-flex--right__img">
                  <picture>
                    <source
                      media="(max-width:768px)"
                      srcSet={leadImg04SpWebp}
                      type="image/webp"
                      width={768}
                      height={800}
                    />
                    <source
                      media="(max-width:768px)"
                      srcSet={leadImg04SpPng}
                      width={768}
                      height={800}
                    />
                    <source
                      srcSet={leadImg04PcWebp}
                      type="image/webp"
                    />
                    <img
                      width={370}
                      height={380}
                      src={leadImg04PcPng}
                      alt="会議をしている画像"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* l-flow */}
        <section className="l-flow" id="anc03">
          <div className="l-flow__img">
            <div className="c-section_wrapper--1000">
              <h2 className="u-mb60">
                低位株が
                <span>急騰</span>
                する流れ
              </h2>
              <picture>
                <source srcSet={flowListWebp} type="image/webp" />
                <img
                  width={768}
                  height={895}
                  src={flowListPng}
                  alt="低位株流れのフローチャート"
                />
              </picture>
            </div>
          </div>
          <div className="u-textarea">
            <div className="c-section_wrapper--1000">
              <div className="p-flex--left">
                <div className="p-flex--left__img">
                  <picture>
                    <source
                      media="(max-width:768px)"
                      srcSet={flowImg01SpWebp}
                      type="image/webp"
                      width={768}
                      height={800}
                    />
                    <source
                      media="(max-width:768px)"
                      srcSet={flowImg01SpPng}
                      width={768}
                      height={800}
                    />
                    <source
                      srcSet={flowImg01PcWebp}
                      type="image/webp"
                    />
                    <img
                      width={370}
                      height={380}
                      src={flowImg01PcPng}
                      alt="お金を手で持つ画像"
                    />
                  </picture>
                </div>
                <div className="p-flex--left__text">
                  <p className="u-mb50">
                    先ほど紹介した半導体銘柄「レーザーテック」も世界最大の資産運用会社・B社や国内の証券会社が大量購入し株価が急騰しました。
                  </p>
                  <p>
                    すなわち、
                    <span>
                      機関投資家が介入し、買いが買いを呼ぶことで10倍、100倍株が生まれてきた
                    </span>
                    のです。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="l-flow__summary">
            <div className="c-section_wrapper--1000">
              <div className="u-mb80 l-flow__summary__arrow">
                <picture>
                  <source
                    srcSet={flowSummaryArrowWebp}
                    type="image/webp"
                  />
                  <img
                    width={204}
                    height={133}
                    src={flowSummaryArrowPng}
                    alt="つまり"
                  />
                </picture>
              </div>
              <div className="l-flow__summary__img">
                <picture>
                  <source
                    srcSet={flowSummaryImgWebp}
                    type="image/webp"
                  />
                  <img
                    width={737}
                    height={266}
                    src={flowSummaryImgPng}
                    alt="株式投資で大きく稼ぐ近道は機関投資家より先回りして有望低位株を見つけること"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>
        {/* l-book */}
        <section className="l-book" id="anc04">
          <div className="c-section_wrapper--900">
            <div className="l-book__img01 u-mb100">
              <picture>
                <source
                  media="(max-width:768px)"
                  srcSet={bookImg01SpWebp}
                  type="image/webp"
                  width={768}
                  height={800}
                />
                <source
                  media="(max-width:768px)"
                  srcSet={bookImg01SpPng}
                  width={768}
                  height={800}
                />
                <source
                  srcSet={bookImg01PcWebp}
                  type="image/webp"
                />
                <img
                  width={800}
                  height={228}
                  src={bookImg01PcPng}
                  alt="機関投資家はなにを見て有望低位株を選定しているのか？"
                />
              </picture>
            </div>
            <div className="p-cap--blowing u-mb70">
              <p>
                無料プレゼント中の
                <br className="u-only--sp" />
                書籍にて解説！
              </p>
            </div>
            <div className="l-book__figure u-mb100">
              <picture>
                <source srcSet={bookListWebp} type="image/webp" />
                <img
                  width={900}
                  height={709}
                  src={bookListJpg}
                  alt="本書の中身"
                />
              </picture>
            </div>
            <div className="p-cta_btn--l">
              <a href="#form">
                <picture>
                  <source srcSet={btnLWebp} type="image/webp" />
                  <img
                    width={667}
                    height={168}
                    src={btnLPng}
                    alt="最短30秒で受け取り完了 無料書籍をダウンロード"
                  />
                </picture>
              </a>
            </div>
          </div>
        </section>
        {/* l-reason */}
        <section className="l-reason" id="anc05">
          <div className="c-section_wrapper--1000 u-mb150">
            <div className="l-reason__img01 u-mb60">
              <picture>

                <source
                  srcSet={reasonImg01Webp}
                  type="image/webp"
                />
                <img
                  width={1000}
                  height={333}
                  src={reasonImg01Png}
                  alt="お急ぎください。今、低位株の大化けが迫っています。"
                />
              </picture>
            </div>
            <div className="l-reason__list_wrap u-mb40">
              <div className="l-reason__list_wrap__img">
                <picture>

                  <source
                    srcSet={reasonImg02Webp}
                    type="image/webp"
                  />
                  <img
                    width={216}
                    height={216}
                    src={reasonImg02Png}
                    alt="マスクを外す女性"
                  />
                </picture>
              </div>
              <div className="l-reason__list_wrap__box">
                <p className="l-reason__list_wrap__box__title">理由1</p>
                <p className="l-reason__list_wrap__box__text">
                  Withコロナ時代に突入！
                  <br />
                  日本経済再開によって
                  <span className="u-font__color--red">企業成長に追い風</span>
                </p>
              </div>
            </div>
            <div className="l-reason__list_wrap">
              <div className="l-reason__list_wrap__img">
                <picture>

                  <source
                    srcSet={reasonImg03Webp}
                    type="image/webp"
                  />
                  <img
                    width={216}
                    height={216}
                    src={reasonImg03Png}
                    alt="機関投資家"
                  />
                </picture>
              </div>
              <div className="l-reason__list_wrap__box">
                <p className="l-reason__list_wrap__box__title">理由2</p>
                <p className="l-reason__list_wrap__box__text">
                  国内外の機関投資家が
                  <br />
                  <span className="u-font__color--red">日本株に再注目</span>
                  している！
                </p>
              </div>
            </div>
          </div>
          <div className="l-reason__summary">
            <div className="c-section_wrapper--1000">
              <picture>
                <source
                  srcSet={reasonSummaryWebp}
                  type="image/webp"
                />
                <img
                  width={906}
                  height={238}
                  src={reasonSummaryPng}
                  alt="10倍、100倍株を手にするなら今がチャンスです！"
                />
              </picture>
            </div>
          </div>
        </section>
        {/* l-contact */}
        <section className="l-contact" id="anc06">
          <div className="c-section_wrapper--1000">
            <div className="l-contact__flow u-mb120">
              <div className="l-contact__flow__blowing">
                <picture>

                  <source
                    media="(max-width:426px)"
                    srcSet={contactBlowingSpWebp}
                    type="image/webp"
                    width={768}
                    height={800}
                  />
                  <source
                    media="(max-width:426px)"
                    srcSet={contactBlowingSpPng}
                    width={768}
                    height={800}
                  />

                  <source
                    srcSet={contactBlowingPcWebp}
                    type="image/webp"
                  />
                  <img
                    width={1000}
                    height={189}
                    src={contactBlowingPcPng}
                    alt="無料書籍の受け取りはたったの3ステップ"
                  />
                </picture>
              </div>
              <div className="l-contact__flow__inner">
                <p className="u-font__text--26 u-font__color--black u-font__text_weight--500 u-text__align--center__left u-mb40">
                  受け取りにご用意いただくのはメールアドレスのみ！
                  <br className="u-only--pcsp" />
                  氏名・電話番号・住所は一切必要ありません。
                </p>
                <div className="l-contact__flow__inner__img">
                  <picture>

                    <source
                      media="(max-width:426px)"
                      srcSet={contactFlowImgSpWebp}
                      type="image/webp"
                      width={768}
                      height={748}
                    />
                    <source
                      media="(max-width:426px)"
                      srcSet={contactFlowImgSpPng}
                      width={768}
                      height={748}
                    />

                    <source
                      srcSet={contactFlowImgPcWebp}
                      type="image/webp"
                    />
                    <img
                      width={800}
                      height={748}
                      src={contactFlowImgPcPng}
                      alt="無料書籍受け取りのフロー"
                    />
                  </picture>
                </div>
              </div>
            </div>
            <div className="l-contact__textborder u-mb120">
              <p>
                予告なく本書の配布を
                <br className="u-only--sp" />
                終了する場合がございます。
                <br />
                気になる方はお早めにお受け取りください。
              </p>
            </div>
            <div className="p-cta_btn--l u-mb100">
              <a href="#form">
                <picture>
                  <source srcSet={btnLWebp} type="image/webp" />
                  <img
                    width={667}
                    height={168}
                    src={btnLPng}
                    alt="最短30秒で受け取り完了 無料書籍をダウンロード"
                  />
                </picture>
              </a>
            </div>
          </div>
          <div className="c-section_wrapper--900">
            <div className="l-contact__box">
              <h3>お問い合わせ</h3>
              <p>
                弊社サービスに関する疑問や気になる点など、
                <br className="u-only--pcsp" />
                どんな些細なことでも迅速丁寧にお答え出来る様、万全のサポート体制を整えました。
                <br />
                お客様が安心してご利用頂けるよう、全力でサポートさせて頂きます。
              </p>
              <ul className="l-contact__box__info">
                <li>
                  <a href="tel:03-5579-5113">03-5579-5113</a>
                  <br />
                  <span>受付時間：平日8:30～18:00</span>
                </li>
                <li>
                  <div>お問い合わせ</div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* l-fv_form */}
        <section className="l-fv_form" id="anc07">
          <div className="c-section_wrapper--1200">
            <picture>

              <source
                media="(max-width:768px)"
                srcSet={fvFormImgSpWebp}
                type="image/webp"
                width={718}
                height={800}
              />
              <source
                media="(max-width:768px)"
                srcSet={fvFormImgSpPng}
                width={718}
                height={800}
              />

              <source
                srcSet={fvFormImgPcWebp}
                type="image/webp"
              />
              <img
                width={1200}
                height={650}
                src={fvFormImgPcPng}
                alt="少額で100倍株をキャッチ！急騰低位株で大勝利する投資術"
              />
            </picture>
          </div>
        </section>
        {/* l-form */}
        <div className="l-form" id="anc08">
          <div className="c-section_wrapper--900">
            <div className="p-cap--blowing u-mb70">
              <p>無料書籍の受け取りはこちらから</p>
            </div>
          </div>
          <div id="form" className="p-form c-section_wrapper--1000">
            <div className="form_wrap u-text__align--center">
              <div className="p-form__text_box u-mb30">
                <p className="p-form__text_box__text01 u-mb30">
                  <span>必須</span>
                  {' '}
                  メールアドレスを入力してください。
                </p>
              </div>
              <div className="p-form__textarea u-mb30">
                <input
                  type="email"
                  name="mailAddress"
                  placeholder="メールアドレスを入力してください"
                />
              </div>
              <div className="u-mb20 p-cta_btn--n">
                <button type="submit" onClick={redirect}>
                  <picture>
                    <source srcSet={btnWebp} type="image/webp" />
                    <img
                      width={551}
                      height={98}
                      src={btnPng}
                      alt="無料書籍をダウンロード"
                    />
                  </picture>
                </button>
              </div>
              <div className="p-form__check_box u-mb30">
                <label>
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    name="agreement"
                    className="check_agreement"
                  />
                  <span className="check_agreement-parts">
                    Vinetecの
                    <a href="#">利用規約</a>
                    、
                    <a href="#">プライバシーポリシー</a>
                    に同意する
                  </span>
                </label>
              </div>
              <p className="u-mt20 p-attention--black">
                ※書籍（PDF版）はご登録いただいたメール宛に送らせていただきます。
              </p>
              <p className="u-mt20 p-attention--black">
                ※書籍ダウンロード時に発生するデータ通信料のみお客様自身にご負担いただいております。予めご了承ください。
              </p>
              <p className="u-mt20 p-attention--black">
                ※当コンテンツは過去事例をもとに投資学習を行うことを目的としており、個別銘柄の株価・値動きを予測するものではございません。
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer className="l-footer">
        <div className="c-section_wrapper--1000">
          <div className="l-footer__text">
            <p className="l-footer__text__disclaimer u-mb20">
              【免責事項】
              <br />
              本サービスは、株式投資の知識やスキルを身に付けるためのコンテンツ提供を行っておりますが、投資勧誘を目的とするものではありません。金商法第2条第8項第11号にあたる投資助言業務は行っておりません。
              <br />
            </p>
            <p className="l-footer__text__disclaimer u-mb40">
              提供するコンテンツ内容の正確性について万全を期しておりますが、コンテンツ内容に基づいてユーザー様が行う取引結果を保証するものではありません。本サービスが提供するコンテンツによって万が一、ユーザー様が被害を被った場合でも、本サービスは一切の責任を負いかねますので予めご了承ください。
              <br />
            </p>
            <ul>
              <li>
                <a href="#">会社概要</a>
              </li>
              <li>
                <a href="#">利用規約</a>
              </li>
              <li>
                <a href="#">特定商取引法に基づく表示</a>
              </li>
              <li>
                <a href="#">プライバシーポリシー</a>
              </li>
              <li>
                <a href="#">サービスのご案内</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="l-footer__copyright c-section_wrapper--1000">
          <small>COPYRIGHT © Vinetec All RIGHTS RESERVED.</small>
        </p>
      </footer>
    </>
  )
}
