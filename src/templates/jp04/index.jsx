import { redirect } from '@/utils/redicrect'
// 导入所有静态资源
import reportImage from './static/picture/09aca2d00bee427043eab1680d6aa766.png'
import endingBgWebp from './static/picture/ending_bg.webp'
import endingBgSpJpg from './static/picture/ending_bg_sp.jpg'
import endingBgSpWebp from './static/picture/ending_bg_sp.webp'
import heroArrow from './static/picture/hero_arrow.png'
import heroBgWebp from './static/picture/hero_bg.webp'
import heroTitle from './static/picture/hero_title.png'
import heroTitleSp from './static/picture/hero_title_sp.png'
import iconQPop from './static/picture/icon_q_pop.png'

import profileBgArrowLWebp from './static/picture/profile_bg_arrow_l.webp'
import profileBgArrowRWebp from './static/picture/profile_bg_arrow_r.webp'
import reasonThumb01 from './static/picture/reason_thumb01.jpg'
import reasonThumb03 from './static/picture/reason_thumb03.jpg'
import reasonThumb05 from './static/picture/reason_thumb05.jpg'
import reasonThumb06 from './static/picture/reason_thumb06.jpg'
import reasonUpPic from './static/picture/reason_up_pic.png'
import reasonUpPicSp from './static/picture/reason_up_pic_sp.png'
import troubleArrow from './static/picture/trouble_arrow.png'
import troubleManPop from './static/picture/trouble_man_pop.png'
import troubleManPopSp from './static/picture/trouble_man_pop_sp.png'
import userIcon01 from './static/picture/user_icon01.png'
import userIcon02 from './static/picture/user_icon02.png'
import userIcon03 from './static/picture/user_icon03.png'
import userIcon04 from './static/picture/user_icon04.png'
import './styles.css'
import './static/css/mcv6kon.css'
import './static/css/yakuhanjp-narrow.min.css'
import './static/css/yakuhanjp-noto.min.css'
import './static/css/main.034d3275.css'

function Page({
  firstName,
  personName,
  heroAiba,
  heroBgSpWebp,
  profileAiba,
  reasonThumb02,
  reasonThumb04,
}) {
  return (
    <>
      <div>
        <div className="l-wrapper" id="top">
          <div id="popup1" className="popup" style={{ display: 'none' }}>
            <div className="popup-content">
              <span className="close-popup">×</span>
              <p>
                <br />
              </p>
              <p
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 'larger',
                }}
              >
                LINEの友達を追加で即無料入手
              </p>
              <img
                src={reportImage}
                alt="Report Image"
                style={{ display: 'block', margin: '15px auto', maxWidth: '100%' }}
              />
              ✅独自の市場分析
              <br />
              ✅リアルタイム取引戦略
              <br />
              ✅毎月5つの高精度有望株を提供
              <br />
              ⏱️
              <span style={{ color: 'red' }}>時間限定 / 人数限定</span>
              <br />
              <br />
              <p />
              <div className="popup-buttons">
                <div id="confirm-button" onClick={redirect}>友だち追加</div>
                <button id="cancel-button" style={{ float: 'right' }}>
                  放棄
                </button>
              </div>
            </div>
          </div>
          <main className="l-main">
            <section className="p-hero" id="hero">
              <div className="p-hero__inner">
                <div className="p-hero__heading">
                  <h1 className="p-hero__title">
                    <picture>
                      <source
                        media="(min-width: 768px)"
                        srcSet={heroTitle}
                      />
                      <img
                        src={heroTitleSp}
                        alt="1か月で100万が800万に！"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </h1>
                  <p className="p-hero__catch">
                    勝ち続ける
                    {firstName}
                    流トレードの本質とは?
                  </p>
                  <div className="p-hero__body">
                    <p className="p-hero__caption u-white">
                      <span className="line">
                        <span className="no">43</span>
                        年連勝！現役億トレーダーの
                      </span>
                      <span className="line">売買明細から</span>
                    </p>
                    <p className="p-hero__caption u-white">
                      <span className="line">トレードで勝つための</span>
                      <span className="line">ノウハウ・マインドが学べる！</span>
                    </p>
                    <div className="p-hero__arrow">
                      <img
                        src={heroArrow}
                        alt="arrow"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="p-hero__limited c-title-linePopImg-double u-red">
                      <span>
                        先着
                        <span className="no">300</span>
                        名様限定！
                      </span>
                    </p>
                    <div className="p-hero__cta">
                      <a
                        href="javascript:{gofun()}"
                        className="c-btn c-btn--anchor"
                      >
                        ラインで急騰する株情報を受け取る
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-hero__img">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={heroAiba}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={heroAiba}
                    />
                    <source
                      media="(max-width: 767px)"
                      srcSet={heroAiba}
                    />
                    <img
                      src={heroAiba}
                      className="p-hero__aiba"
                      alt="bg"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={heroBgWebp}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={heroBgWebp}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={heroBgSpWebp}
                />
                <img
                  src={heroBgSpWebp}
                  className="p-hero__bg"
                  alt="bg"
                  decoding="async"
                />
              </picture>
            </section>
            <section className="p-trouble">
              <div className="c-line-bg--02">
                <div className="c-line-bg--01">
                  <div className="l-inner">
                    <h2 className="c-heading p-trouble__heading">
                      <span className="u-white">
                        こんなトレードの
                        <span className="large u-dark">悩み</span>
                        、
                        <br className="u-hidden-tab" />
                        ありませんか？
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={troubleManPop}
                />
                <img
                  src={troubleManPopSp}
                  alt="本や動画で得た知識をいろいろ試したが、利益が安定しない…ここだ！と思っても、自信が持てずにエントリー・エグジットできない…疑問が頭をよぎっても誰にも聞けず、なんだかモヤモヤ…"
                  loading="lazy"
                  decoding="async"
                  className="p-trouble__img"
                />
              </picture>
              <div className="l-inner">
                <p className="p-trouble__text01">その原因には、</p>
                <div className="p-trouble__wrap">
                  <div className="p-trouble__brackets">
                    <img
                      src={troubleArrow}
                      alt="arrow"
                      loading="lazy"
                      decoding="async"
                      className="p-trouble__arrow"
                    />
                    <ul className="p-trouble__list">
                      <li>
                        明確な
                        <span className="u-marker--dark">
                          売買理由や損切りルールがない
                        </span>
                      </li>
                      <li>
                        <span className="u-marker--dark">
                          建玉操作（ヘッジ）の基準
                        </span>
                        がわからない
                      </li>
                      <li>
                        日々の値動きで
                        <span className="u-marker--dark">メンタルを保てない</span>
                      </li>
                      <li>
                        <span className="u-marker--dark">再現性のない手法</span>
                        を実践している
                      </li>
                      <li>
                        成功しているトレーダーの
                        <span className="u-marker--dark">
                          具体的な事例を知らない
                        </span>
                      </li>
                      <li>
                        相談できる
                        <span className="u-marker--dark">投資仲間がいない</span>
                      </li>
                    </ul>
                    <p className="p-trouble__text02">などが挙げられます。</p>
                  </div>
                </div>
                <p className="p-trouble__text03">
                  そんな悩みを、
                  <br className="u-hidden-tab" />
                  <span className="u-marker--red">
                    現役億トレーダー＜
                    {personName}
                    ＞
                  </span>
                  が主催する
                  <br />
                  セミナー・懇親会で解消しましょう！
                </p>
                <div className="c-cta">
                  <p className="c-title-linePop">
                    安定した利益を出せるようになるチャンス！
                  </p>
                  <div className="c-cta__area">
                    <a href="javascript:{gofun()}" className="c-btn">
                      ラインで急騰する株情報を受け取る
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="c-letter p-reason c-bg--gray">
              <div className="l-inner">
                <h2 className="c-heading p-reason__heading">
                  <span className="u-white">
                    現役億トレーダー直伝ノウハウが
                    <br />
                    あなたの安定した利益につながる
                    <br className="u-hidden-tab" />
                    理由！
                  </span>
                </h2>
                <div className="p-reason__row">
                  <div className="p-reason__contents">
                    <p>
                      {personName}
                      が100万を1か月で800万にした事例を元に、
                    </p>
                    <ul className="p-reason__list">
                      <li>なぜこの銘柄を選んだのか</li>
                      <li>なぜエントリー・エグジット・損切りしたのか</li>
                      <li>なぜヘッジを入れたのか</li>
                      <li>日々の値動きに一喜一憂しないメンタルセット</li>
                    </ul>
                    <p>など徹底解説！</p>
                  </div>
                  <div className="p-reason__pic">
                    <picture>
                      <source
                        media="(min-width: 768px)"
                        srcSet={reasonUpPic}
                      />
                      <img
                        src={reasonUpPicSp}
                        alt="100万が800万に!"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </div>
              <ul className="p-reason__thumbnails">
                <li>
                  <img
                    src={reasonThumb01}
                    alt="thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src={reasonThumb02}
                    alt="thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src={reasonThumb03}
                    alt="thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src={reasonThumb04}
                    alt="thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src={reasonThumb05}
                    alt="thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
                <li>
                  <img
                    src={reasonThumb06}
                    alt="thumb"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              </ul>
              <div className="l-inner">
                <div className="p-reason__text">
                  <p>
                    経済ニュースや企業業績に振り回されない、再現性のあるトレード手法で、
                    <br />
                    あなたも含み損を最小限に抑え、
                    <span className="u-bold u-font--l02 u-underline">
                      利益を最大化
                    </span>
                    できるようになります！
                  </p>
                  <p>
                    さらに、
                    <span className="u-red u-bold u-font--l02">
                      先着150名様限定の懇親会も開催！
                    </span>
                    <br />
                    リアルな投資経験やトレードの悩みを相談できる投資仲間と出会えます！
                    <br />
                    <span className="u-bold">
                      （
                      {firstName}
                      先生と直接お話しできる機会も！）
                    </span>
                    <br />
                    これを機会に一人で悩み続ける個人投資家から脱却しましょう！
                  </p>
                </div>
              </div>
              <div className="p-reason__cta c-line-bg--03">
                <div className="l-inner">
                  <div className="c-cta">
                    <p className="c-title-linePop u-white">
                      安定して利益を出すための真髄に迫る
                    </p>
                    <div className="c-cta__area">
                      <a href="javascript:{gofun()}" className="c-btn">
                        ラインで急騰する株情報を受け取る
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="c-letter p-profile">
              <div className="l-inner">
                <h2 className="c-heading p-profile__heading">
                  <img
                    src={iconQPop}
                    alt="icon"
                    loading="lazy"
                    decoding="async"
                    className="p-profile__icon"
                  />
                  <span className="small">
                    講師・
                    {personName}
                    <br className="u-hidden-tab" />
                    どんな人？
                  </span>
                </h2>
                <div className="p-profile__wrap">
                  <div className="p-profile__row">
                    <div className="p-profile__contents">
                      <h3 className="p-profile__title">トレード歴43年の株職人</h3>
                      <p>
                        20歳でトレードを始め、最初の20年間は「日本郵船」1銘柄に絞った売買で大きな利益を重ねる。以降は宮本武蔵が洞窟に籠もるかの如く、チャートと建玉操作の研究に没頭し、日本株・米国株・各種指数・コモディティ・FXなど、あらゆる市場で成果を出し続けている。現在はアジア最大級の投資塾「株塾」を主宰し、国内外で講演活動も展開中。
                      </p>
                      <h3 className="p-profile__subTitle">
                        講師実績・著書（一部）
                      </h3>
                      <ul className="c-list">
                        <li>
                          ラジオNIKKEI『
                          {personName}
                          の株は技術だ！』キャスター
                        </li>
                        <li>
                          東京証券取引所・北浜投資塾講師、日本経済新聞社「お金の学校」講師
                        </li>
                        <li>
                          これから騰がる株完全マスター
                          {firstName}
                          の赤本 増補改訂版
                        </li>
                        <li>『株は技術だ！ 倍々で勝ち続ける究極のチャート授業』</li>
                        <li>
                          『37年連戦連勝 伝説の株職人が教える 株の技術大全』など
                        </li>
                      </ul>
                    </div>
                    <div className="p-profile__pic">
                      <div className="p-profile__aiba">
                        <img
                          src={profileAiba}
                          alt="100万が800万に!"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <picture>
                <source
                  srcSet={profileBgArrowLWebp}
                  type="image/webp"
                />
                <img
                  src={profileBgArrowLWebp}
                  className="p-profile__bg-l"
                  alt="bg"
                  decoding="async"
                />
              </picture>
              <picture>
                <source
                  srcSet={profileBgArrowRWebp}
                  type="image/webp"
                />
                <img
                  src={profileBgArrowRWebp}
                  className="p-profile__bg-r"
                  alt="bg"
                  decoding="async"
                />
              </picture>
            </section>
            <section className="c-letter p-user">
              <div className="l-inner">
                <h2 className="c-heading c-title-linePopImg u-gray">株塾生の声</h2>
                <div className="p-user__wrap">
                  <div className="p-user__block">
                    <div className="p-user__thumb">
                      <img
                        src={userIcon01}
                        alt="Aさん"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-user__body">
                      <p>
                        <span className="u-red">ローソク足と移動平均線だけ</span>
                        活用したテクニカル分析が、
                        <span className="u-red">シンプルでわかりやすい！</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-user__block">
                    <div className="p-user__thumb">
                      <img
                        src={userIcon02}
                        alt="Bさん"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-user__body">
                      <p>
                        2025年4月の関税ショックによる暴落時も利益を出せました！
                        <span className="u-red">
                          株塾で空売りを学んでおいて本当に良かった
                        </span>
                        です。
                      </p>
                    </div>
                  </div>
                  <div className="p-user__block">
                    <div className="p-user__thumb">
                      <img
                        src={userIcon03}
                        alt="Cさん"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-user__body">
                      <p>
                        {firstName}
                        先生と出会ってから、テクニカル分析の奥深さを知り、
                        <span className="u-red">
                          チャートから
                          {firstName}
                          状況を読めるように
                        </span>
                        なりました！
                      </p>
                    </div>
                  </div>
                  <div className="p-user__block">
                    <div className="p-user__thumb">
                      <img
                        src={userIcon04}
                        alt="Dさん"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-user__body">
                      <p>
                        <span className="u-red">入塾してから資産1億円達成！</span>
                        資産2億円を目指して日々鍛錬しています！
                      </p>
                    </div>
                  </div>
                </div>
                <div className="c-cta">
                  <p className="c-title-linePop">
                    成功者の具体的なノウハウを自身に蓄積！
                  </p>
                  <div className="c-cta__area">
                    <a href="javascript:{gofun()}" className="c-btn">
                      ラインで急騰する株情報を受け取る
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="c-letter p-qa" id="qa" style={{ display: 'none' }}>
              <div className="l-inner">
                <div className="p-qa__en">Q&amp;A</div>
                <h2 className="c-heading">よくあるご質問</h2>
                <div className="c-accordion__container">
                  <dl className="c-accordion__item">
                    <dt className="c-accordion-q" tabIndex={0}>
                      トレード経験がなくても参加できますか？
                      {' '}
                    </dt>
                    <dd className="c-accordion-a">
                      <p>
                        はい、まったく問題ありません！これからトレードを始める方にとって、本セミナーはトレードの本質を学び、具体的な練習方法を知る絶好の機会です。勉強中の方も安心してご参加ください。
                      </p>
                    </dd>
                  </dl>
                  <dl className="c-accordion__item">
                    <dt className="c-accordion-q" tabIndex={0}>
                      女性の参加は可能ですか？
                      {' '}
                    </dt>
                    <dd className="c-accordion-a">
                      <p>
                        もちろん可能です。お困りごとは気軽に株塾スタッフにご相談ください！
                      </p>
                    </dd>
                  </dl>
                  <dl className="c-accordion__item">
                    <dt className="c-accordion-q" tabIndex={0}>
                      本当に決算やニュースを見なくてもいいのですか？
                      {' '}
                    </dt>
                    <dd className="c-accordion-a">
                      <p>
                        はい！
                        {firstName}
                        流の手法は、「チャートの動き」に特化してトレード判断を行います。そのため、決算やニュースといった膨大な情報を追いかける必要がなく、情報収集にかかる時間や労力を大幅にカットできます。「チャートの中にすべての情報が織り込まれている」という考え方に基づき、シンプルかつ再現性のある判断軸でトレードを実践できます。
                      </p>
                    </dd>
                  </dl>
                  <dl className="c-accordion__item">
                    <dt className="c-accordion-q" tabIndex={0}>
                      {firstName}
                      先生の手法を実践するのに資金はいくら必要ですか？
                      {' '}
                    </dt>
                    <dd className="c-accordion-a">
                      <p>
                        {firstName}
                        先生の手法は、「買い」と「売り」の両方に対応しており、信用取引口座の開設が前提となります。そのため、最低でも証券会社が定める信用取引口座開設の基準である30万円以上の資金が必要です。ただし、実際のトレードは生活に支障のない余剰資金で行うことを強く推奨しています。
                      </p>
                    </dd>
                  </dl>
                  <dl className="c-accordion__item">
                    <dt className="c-accordion-q" tabIndex={0}>
                      今回のセミナーの録画版を後日もらえますか？
                      {' '}
                    </dt>
                    <dd className="c-accordion-a">
                      <p>
                        本セミナー参加後、ご入塾された方のみにお届けいたします。
                      </p>
                    </dd>
                  </dl>
                  <dl className="c-accordion__item">
                    <dt className="c-accordion-q" tabIndex={0}>
                      お支払いは銀行振込に対応していますか？
                      {' '}
                    </dt>
                    <dd className="c-accordion-a">
                      <p>
                        銀行振込にも対応しています。info@aibashiro.comにお問い合わせをお願いいたします。以下の件名・文面でお送りください。
                        <br />
                        件名：7/12セミナーの銀行振込について
                        <br />
                        本文：セミナーのみ・セミナー＋懇親会に参加します。
                      </p>
                    </dd>
                  </dl>
                </div>
              </div>
            </section>
            <section className="p-ending" id="ending">
              <div className="l-inner">
                <h2 className="c-heading u-white">次回開催は未定です！</h2>
                <div className="p-ending__text">
                  <p className="u-white">
                    {personName}
                    から
                    <span className="u-pink">
                      <span className="no">100</span>
                      万円
                    </span>
                    を1か月で
                    <span className="u-pink">
                      <span className="no">800</span>
                      万円
                    </span>
                    にするための
                    <br className="u-hidden-sp" />
                    具体的なノウハウ・マインドを学べるチャンスです！
                    <br />
                    安定して利益を出すトレーダーになる第一歩として、
                    <br className="u-hidden-sp" />
                    本セミナー・懇親会にぜひご参加ください！
                  </p>
                </div>
                <div className="c-cta c-cta02">
                  <p className="c-title-linePop u-white u-shadow">
                    超最新の
                    {firstName}
                    流トレード手法で
                    <br className="u-hidden-tab" />
                    利益を安定させる
                  </p>
                  <div className="c-cta__area">
                    <a href="javascript:{gofun()}" className="c-btn">
                      ラインで急騰する株情報を受け取る
                    </a>
                  </div>
                </div>
              </div>
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet={endingBgWebp}
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={endingBgWebp}
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={endingBgSpWebp}
                  type="image/webp"
                />
                <img
                  src={endingBgSpJpg}
                  className="p-ending__bg"
                  alt="bg"
                  decoding="async"
                />
              </picture>
            </section>
          </main>
        </div>
        <div className="floating-button">
          <a href="javascript:{gofun()}" className="btn-line">
            ▶急騰株情報をLINEで受け取る
          </a>
        </div>
      </div>
    </>

  )
}
export default Page
