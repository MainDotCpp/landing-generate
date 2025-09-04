import './extra.css'
import aiLogo from 'static/picture/ai_logo.svg'
import kvPcVideo from 'static/video/kv_pc.mp4'
import kvVideo from 'static/video/kv.mp4'
import pointImg from 'static/picture/point.jpg'
import awasetmochiImg from 'static/picture/awasemochi.jpg'
import continuousNo1Img from 'static/picture/continuous_no1.jpg'
import anniversary2ndImg from 'static/picture/anniversary_2nd.jpg'
import youtubeAiImg from 'static/picture/youtube_ai.png'
import messageSvg from 'static/picture/message.svg'
import whyIllust01Svg from 'static/picture/why_illust01.svg'
import whyIllust02Svg from 'static/picture/why_illust02.svg'
import whyIllust03Svg from 'static/picture/why_illust03.svg'
import whyHumanSvg from 'static/picture/why_human.svg'
import whyArrowSvg from 'static/picture/why_arrow.svg'
import whyAi01Svg from 'static/picture/why_ai01.svg'
import whyAi02Svg from 'static/picture/why_ai02.svg'
import whyAi03Svg from 'static/picture/why_ai03.svg'
import whyCheckSvg from 'static/picture/why_check.svg'
import whyCirclelineSvg from 'static/picture/why_circleline.svg'
import whyCirclelinePcSvg from 'static/picture/why_circleline_pc.svg'
import backtestImg from 'static/picture/backtest.png'
import backtestPcImg from 'static/picture/backtest_pc.png'
import lineImg from 'static/image/line.png'

export const config = {
  title: 'SBIラップ AI投資コース｜SBI証券',
  template: '/src/pages/SBIV1/index.html',
}
function Page() {
  return (
    <>
      <header className="header">
        <div className="header__container container narrow center container-1025">
          <div className="hstack w100 justify-space-between align-center">
            <a className="header__logo" href="javascript:{onLinkBtnClick()}">
              <svg viewBox="0 0 468 92">
                <g clipPath="url(#a)" fill="#092987">
                  <path d="M30.74 6.7c-17.54 0-29.52 7-29.52 22C1.22 44 13.11 48.72 28.74 55c10.18 4 18.15 7.15 18.15 16 0 7.86-5.66 12.2-15 12.2-7.26 0-14.72-2.83-15.84-13.8a7.36 7.36 0 0 0-7-7.67 7.255 7.255 0 0 0-1 0 7.32 7.32 0 0 0-8 6.54C0 73.54 7.36 90 32.24 90 38.59 90 63 89.08 63 67c0-15.42-10.8-20-28.83-27.52C19.86 33.52 16.33 32 16.33 24.65c0-6.25 3.73-11.19 13.4-11.19 7.16 0 13.71 2.42 15.22 12.3a7.4 7.4 0 0 0 7.86 6.15 7.15 7.15 0 0 0 7.87-6.33c0-3.12-6-18.84-29.94-18.84V6.7Zm87.18 81.77c18.64 0 25.92-9.78 25.92-22.18 0-17.24-14.82-19.66-19.25-20.36 5.24-1 16.92-3.33 16.92-18.45 0-16.83-14.82-19.25-23.59-19.25H91.21C83.65 8.21 80 11.84 80 18.79V78c0 6.84 3.54 10.48 11.19 10.48l26.73-.01ZM95.66 18.3a3.71 3.71 0 0 1 3.53-3.54h13.41c9.17 0 12.5 5.76 12.5 14 0 5.66-1.41 14.62-12.9 14.62H95.66V18.3Zm17.84 31.63c6.35 0 14 2.13 14 15.92 0 7.87-2.52 16.13-13.8 16.13H99.21a3.73 3.73 0 0 1-3.54-3.63V49.92l17.83.01Zm66.42-35.66a6.93 6.93 0 0 0-1.535-5.09 6.928 6.928 0 0 0-4.685-2.51 7.51 7.51 0 0 0-1.64 0 7.08 7.08 0 0 0-7.75 6.33 8.28 8.28 0 0 0 0 1.22v68.19a7.839 7.839 0 0 0 15.64 1 6.183 6.183 0 0 0 0-1l-.03-68.14ZM273.17 32.7a5.337 5.337 0 0 0-1 0h-62.4c-2.85 0-4.55 1.46-4.55 3.89s1.74 3.89 4.55 3.89h51.53a1.51 1.51 0 0 1 1.59 1.42v.31A42.489 42.489 0 0 1 259 56.46c-6.37 13-16.33 19.75-33.3 22.55-3 .43-5.81.85-5.81 4.37a3.998 3.998 0 0 0 3.95 3.86h.11c1 0 5.22-.48 6.77-.75a66.717 66.717 0 0 0 29.4-11.75 44.89 44.89 0 0 0 19.86-33.89 7.5 7.5 0 0 0-6.76-8.16M320.21 45.33c1.69 5.66 2.21 7.38 6.65 7.38h.05a6.08 6.08 0 0 0 5.72-5.71c0-2.83-3.25-7.26-6.78-11.63l-.4-.48c-3.32-3.89-5.41-6-6.9-6h-.08a3.58 3.58 0 0 0-3.55 3.33c0 .76.15 1.06 1 3a56.314 56.314 0 0 1 4.24 10.22M219.59 20.89h48.3c2.85 0 4.55-1.45 4.55-3.89 0-1.88-1.2-3.89-4.55-3.89h-48.3c-2.85 0-4.55 1.46-4.55 3.89s1.75 3.89 4.55 3.89Z"></path>
                  <path d="M348.76 27.33c-6.37 0-6.63 4.05-6.89 8.32-2.48 37.15-25.74 45.95-34.45 49.25a3.29 3.29 0 0 0-2.71 3.32 3.426 3.426 0 0 0 1.019 2.416 3.428 3.428 0 0 0 2.431.984h.09a61.75 61.75 0 0 0 34-20.65 79.067 79.067 0 0 0 13.54-37.59c0-5-5.06-6.05-7-6.05M306.46 59.65a6.28 6.28 0 0 0 6.22-6.14c0-3.57-6.31-11.58-8.26-14L304 39c-2.92-3.48-5.31-6.14-7.08-6.14a3.548 3.548 0 0 0-3.51 3.38v.17l.06.17a27.586 27.586 0 0 0 2.38 5.07 80.321 80.321 0 0 1 4.72 11.54c1.09 3.89 1.81 6.47 5.93 6.47l-.04-.01ZM448.42 0a18.628 18.628 0 0 0-18.23 15h-57.38c-2.85 0-4.55 1.49-4.55 4 0 1.83 1.2 3.79 4.55 3.79H420c.562 0 1.104.211 1.52.59a2.113 2.113 0 0 1 .66 1.49v.27A71.191 71.191 0 0 1 415 47.75a61.3 61.3 0 0 1-40.23 31.09c-1.38.36-4.25 1.08-4.25 4.21a3.78 3.78 0 0 0 3.59 3.95h.41a83.877 83.877 0 0 0 43.12-20.19 80.226 80.226 0 0 0 19.43-33.52 18.408 18.408 0 0 0 11.35 4 18.609 18.609 0 1 0 0-37.22V0Zm0 28.29a9.611 9.611 0 0 1-6.857-16.373 9.613 9.613 0 0 1 14.786 1.377A9.607 9.607 0 0 1 458 18.62a9.62 9.62 0 0 1-9.61 9.61"></path>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h467.03v91.62H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              className="header__button hstack gap-xxs align-center text weight-bold color-white"
              rel="noopener noreferrer"
              href="javascript:{onLinkBtnClick()}"
            >
              「LINEで投資アドバイザーを追加」
              <span className="header__logoIcon">
                <svg viewBox="0 0 24 24">
                  <g stroke="none" strokewidth={1} fill="none" fillrule="evenodd">
                    <path
                      d="M 15.7087 11.2925 C 15.7077 11.2915 15.7057 11.2915 15.7047 11.2905 L 9.7067 5.2925 C 9.3167 4.9015 8.6837 4.9015 8.2927 5.2925 C 7.9017 5.6835 7.9017 6.3165 8.2927 6.7075 L 13.5867 12.0005 L 8.2927 17.2945 C 7.9017 17.6855 7.9017 18.3175 8.2927 18.7085 C 8.6837 19.0995 9.3167 19.0995 9.7067 18.7085 L 15.7047 12.7115 C 15.7057 12.7095 15.7077 12.7095 15.7087 12.7085 C 15.9037 12.5135 16.0017 12.2565 16.0017 12.0005 C 16.0017 11.7445 15.9037 11.4875 15.7087 11.2925"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="underTabletOnly">
          <nav className="headerNav box color-background" data-hamburger-nav="">
            <a href="" className="headerNav__link">
              AI投資の魅力
            </a>
            <a href="javascript:{onLinkBtnClick()}" className="headerNav__link">
              期待できること
            </a>
            <a href="javascript:{onLinkBtnClick()}" className="headerNav__link">
              サービス概要
            </a>
            <a href="javascript:{onLinkBtnClick()}" className="headerNav__link">
              手数料・ポイントプログラム
            </a>
            <a href="javascript:{onLinkBtnClick()}" className="headerNav__link">
              はじめ方・操作ガイド
            </a>
            <a href="javascript:{onLinkBtnClick()}" className="headerNav__link">
              レポート・コラム
            </a>
            <a href="javascript:{onLinkBtnClick()}" className="headerNav__link">
              よくある質問
            </a>
            <a
              className="headerNav__link hstack gap-xxs align-center"
              rel="noopener noreferrer"
              href="javascript:{onLinkBtnClick()}"
            >
              SBI証券TOP
              <span className="icon size-14">
                <svg viewBox="0 0 24 24">
                  <g stroke="none" strokewidth={1} fill="none" fillrule="evenodd">
                    <path
                      d="M21.255 9.943a1.028 1.028 0 0 1-1.028-1.029V3.771h-5.143a1.028 1.028 0 1 1 0-2.057h7.2v7.2a1.029 1.029 0 0 1-1.029 1.029Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.223 13.886A1.106 1.106 0 0 1 10.442 12l9.956-9.957a1.107 1.107 0 0 1 1.566 1.566l-9.957 9.956a1.102 1.102 0 0 1-.784.32Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20.367 22.286H3.633a1.918 1.918 0 0 1-1.919-1.919V3.633a1.918 1.918 0 0 1 1.919-1.919h7.362a.47.47 0 0 1 .47.472V3.3a.47.47 0 0 1-.47.471H3.771v16.457H20.23v-7.223a.47.47 0 0 1 .47-.47h1.115a.47.47 0 0 1 .472.47v7.362a1.918 1.918 0 0 1-1.919 1.919Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </span>
            </a>
            <hr className="hairline color-border" />
          </nav>
        </div>
        <div className="overTabletOnly">
          <div className="box color-white">
            <div className="container center narrow container-1025"></div>
          </div>
        </div>
        <div className="underTabletOnly">
          <div className="headerNav__courses box color-white">
            <div className="headerNav__coursesInner hstack">
              <a
                className="headerNav__course hstack justify-center"
                href="javascript:{onLinkBtnClick()}"
              >
                <span className="headerNav__course__img hstack">
                  <img
                    className="img"
                    src={aiLogo}
                    alt="AI投資コース"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="pageContainer">
        <div className="kv">
          <video
            muted
            playsInline=""
            autoplay
            data-module="kv"
            autoPlay={true}
          >
            <source src={kvPcVideo} type="video/mp4" media="(min-width: 800px)" />
            <source src={kvVideo} type="video/mp4" media="(max-width: 799px)" />
          </video>
        </div>
        <div className="container center narrow text size-sub color-text-sub pt-xs pb-xs pr-s pl-s">
          <p>※上記のAI投資の目標は、87%の成功率を保証するものではありません。</p>
          <p>
            ※1
            2022年および2023年の2年連続で、日本投資顧問業協会（一般社団法人）の「契約資産状況：ラップ業務および一任勘定業務」に基づき、2022年3月末、2023年3月末、2024年3月末時点でのデータを比較。ラップ業務を行う全28社の協会会員を対象に、SBI証券が調査を実施。
          </p>
          <p>
            ※2
            「SBIラップ（AI投資コース・匠投資コース）」および「SBIラップx（SBI新生銀行・投資信託コンサルティングプラザ）」の合計。（2024年5月16日時点）
          </p>
        </div>
        {/* slider */}
        <div className="sliderWrapper pt-m pt-pc-l">
          <div className="slider" data-slider="">
            <div>
              <a className="sliderBannerLink" href="javascript:{onLinkBtnClick()}">
                <img
                  className="img"
                  alt="ポイントが貯まる！SBIラップマイレージのご紹介"
                  src={pointImg}
                />
              </a>
            </div>
            <div>
              <a className="sliderBannerLink" href="javascript:{onLinkBtnClick()}">
                <img
                  className="img"
                  alt="投資効率の改善に期待できる!?SBIラップ 特色あるコースの「併せ持ち」"
                  src={awasetmochiImg}
                />
              </a>
            </div>
            <div>
              <a className="sliderBannerLink" href="javascript:{onLinkBtnClick()}">
                <img
                  className="img"
                  alt="2期連続NO.1"
                  src={continuousNo1Img}
                />
              </a>
            </div>
            <div>
              <a className="sliderBannerLink" href="javascript:{onLinkBtnClick()}">
                <img
                  className="img"
                  alt="2ndanniversary お客様と歩んだ2年間の振り返り"
                  src={anniversary2ndImg}
                />
              </a>
            </div>
            <div>
              <button
                className="sliderBannerLink"
                data-module="youTubeModal"
                data-options='{"videoId":"RjlgIKlYmuk"}'
              >
                <img
                  className="img"
                  alt="3分でわかるAI投資コース"
                  src={youtubeAiImg}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="top__messageWrapper vstack gap-s gap-pc-l box color-pale pt-xl pb-xl pr-s pl-s pt-pc-64 pb-pc-64 text align-center color-main">
          <p className="top__message text latin weight-bold">MESSAGE</p>
          <div className="vstack gap-s gap-pc-m">
            <p className="top__messageText">
              我々は、資産運用の世界において
              <br />
              AIによるシンギュラリティ
              <br className="mobileOnly" />
              「人間の知能を凌駕するような変革」
              <br />
              を起こせると考えています。
            </p>
            <p className="top__messageText text weight-bold">
              先が読めないリスク時代こそ、
              <br className="mobileOnly" />
              市場動向を先読みするAI投資。
              <br />
              あらゆる相場局面に対応することを
              <br className="mobileOnly" />
              目指します。
            </p>
          </div>
          <div className="top__messageImg">
            <img className="img" src={messageSvg} alt="" />
          </div>
        </div>
        <div>
          <div className="box color-main vstack gap-xs gap-pc-s text align-center pt-l pb-l pt-pc-xl pb-pc-xl">
            <div className="top__subHeading vstack gap-xxs align-center text latin">
              <span>WHY</span>
              <span className="top__divider" />
            </div>
            <h2 className="text size-h2 color-white">なぜAIを活用するのか？</h2>
          </div>
          <div className="box color-white pt-xl pb-xl pl-s pr-s pt-pc-64 pb-pc-64 pr-pc-0 pl-pc-0 text align-center">
            <div className="vstack gap-m">
              <div className="text weight-bold">
                <div className="vstack gap-l gap-pc-xl">
                  <p className="text size-h1 color-sub">
                    それは、
                    <br className="mobileOnly" />
                    プロの投資家（人）よりも
                    <br />
                    高度な運用を実現するため
                  </p>
                  <div className="vstack gap-xxs">
                    <p className="text size-h1 color-sub">
                      AI投資が目指す3つのこと
                    </p>
                    <p className="top__whyThreeThings text latin">THREE THINGS</p>
                  </div>
                </div>
              </div>
              <div className="top__circleWrapper stack justify-center align-center gap-xs gap-pc-m">
                <button
                  className="top__circle vstack justify-center align-center text color-white"
                  data-module="smoothScroll"
                  data-options='{"targetId":"1"}'
                >
                  <div className="stack invert justify-space-between justify-pc-center align-center w100 pr-s pl-m pr-pc-0 pl-pc-0">
                    <p className="vstack align-start align-pc-center gap-pc-xxs">
                      <span className="top__circleLatinText text latin weight-bold">
                        01
                      </span>
                      <span className="top__circleText text size-h2 weight-bold">
                        正確な将来予測
                      </span>
                    </p>
                    <div className="top__circleImg">
                      <img
                        className="img"
                        src={whyIllust01Svg}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="top__circleLink text size-main">
                    詳しく見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={12}
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        fillOpacity=".5"
                        d="M10.294 1.495a.701.701 0 1 0-.992-.992l-4.299 4.3a.702.702 0 1 0 .992.992l4.3-4.3Z"
                      />
                      <path
                        fill="#fff"
                        fillOpacity=".5"
                        d="M5.997 4.802 1.697.503a.702.702 0 0 0-.992.992l4.3 4.3a.702.702 0 1 0 .992-.993Z"
                      />
                      <path
                        fill="#fff"
                        d="M10.294 7.198a.701.701 0 1 0-.992-.993l-4.299 4.3a.702.702 0 1 0 .992.992l4.3-4.3Z"
                      />
                      <path
                        fill="#fff"
                        d="m5.997 10.505-4.3-4.3a.702.702 0 0 0-.992.993l4.3 4.299a.701.701 0 1 0 .992-.992Z"
                      />
                    </svg>
                  </p>
                </button>
                <button
                  className="top__circle vstack justify-center align-center text color-white"
                  data-module="smoothScroll"
                  data-options='{"targetId":"2"}'
                >
                  <div className="stack invert justify-space-between justify-pc-center align-center w100 pr-s pl-m pr-pc-0 pl-pc-0">
                    <p className="vstack align-start align-pc-center gap-pc-xxs">
                      <span className="top__circleLatinText text latin weight-bold">
                        02
                      </span>
                      <span className="top__circleText text size-h2 weight-bold">
                        冷静な投資判断
                      </span>
                    </p>
                    <div className="top__circleImg">
                      <img
                        className="img"
                        src={whyIllust02Svg}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="top__circleLink text size-main">
                    詳しく見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={12}
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        fillOpacity=".5"
                        d="M10.294 1.495a.701.701 0 1 0-.992-.992l-4.299 4.3a.702.702 0 1 0 .992.992l4.3-4.3Z"
                      />
                      <path
                        fill="#fff"
                        fillOpacity=".5"
                        d="M5.997 4.802 1.697.503a.702.702 0 0 0-.992.992l4.3 4.3a.702.702 0 1 0 .992-.993Z"
                      />
                      <path
                        fill="#fff"
                        d="M10.294 7.198a.701.701 0 1 0-.992-.993l-4.299 4.3a.702.702 0 1 0 .992.992l4.3-4.3Z"
                      />
                      <path
                        fill="#fff"
                        d="m5.997 10.505-4.3-4.3a.702.702 0 0 0-.992.993l4.3 4.299a.701.701 0 1 0 .992-.992Z"
                      />
                    </svg>
                  </p>
                </button>
                <button
                  className="top__circle vstack justify-center align-center text color-white"
                  data-module="smoothScroll"
                  data-options='{"targetId":"3"}'
                >
                  <div className="stack invert justify-space-between justify-pc-center align-center w100 pr-s pl-m pr-pc-0 pl-pc-0">
                    <p className="vstack align-start align-pc-center gap-pc-xxs">
                      <span className="top__circleLatinText text latin weight-bold">
                        03
                      </span>
                      <span className="top__circleText text size-h2 weight-bold">
                        予測モデルの
                        <br />
                        継続的な改善
                      </span>
                    </p>
                    <div className="top__circleImg">
                      <img
                        className="img"
                        src={whyIllust03Svg}
                        alt=""
                      />
                    </div>
                  </div>
                  <p className="top__circleLink top__circleLinkBr text size-main">
                    詳しく見る
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={11}
                      height={12}
                      fill="none"
                    >
                      <path
                        fill="#fff"
                        fillOpacity=".5"
                        d="M10.294 1.495a.701.701 0 1 0-.992-.992l-4.299 4.3a.702.702 0 1 0 .992.992l4.3-4.3Z"
                      />
                      <path
                        fill="#fff"
                        fillOpacity=".5"
                        d="M5.997 4.802 1.697.503a.702.702 0 0 0-.992.992l4.3 4.3a.702.702 0 1 0 .992-.993Z"
                      />
                      <path
                        fill="#fff"
                        d="M10.294 7.198a.701.701 0 1 0-.992-.993l-4.299 4.3a.702.702 0 1 0 .992.992l4.3-4.3Z"
                      />
                      <path
                        fill="#fff"
                        d="m5.997 10.505-4.3-4.3a.702.702 0 0 0-.992.993l4.3 4.299a.701.701 0 1 0 .992-.992Z"
                      />
                    </svg>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="offsetElement" data-smooth-scroll-target-id={1} />
          <div className="box color-background">
            <div className="container narrow center pt-xl pb-xl pr-s pl-s pt-pc-64 pb-pc-64">
              <div className="vstack gap-xs">
                <h3 className="top__whyHeadding stack gap-xxs gap-pc-xs text color-sub weight-bold">
                  <span className="top__whyLatinHeadding text latin weight-bold">
                    01
                  </span>
                  正確な将来予測を目指す
                </h3>
                <p className="top__whyThreeThings text latin">THREE THINGS</p>
              </div>
              <div className="vstack gap-m pt-m pt-pc-l">
                <div className="stack card">
                  <div className="top__whyHuman vstack">
                    <p className="top__whyTopText box color-gray">人間の傾向</p>
                    <div className="top__whyitemBox vstack align-center justify-center gap-xs gap-pc-l">
                      <div>
                        <img
                          className="img"
                          src={whyHumanSvg}
                          alt=""
                        />
                      </div>
                      <p className="top__whyHumanText text color-text-sub weight-bold align-center">
                        データの分析・処理能力に
                        <br className="pcOnly" />
                        限界がある
                      </p>
                      <div className="top__whyHumanArrow">
                        <img
                          className="pcOnly"
                          src={whyArrowSvg}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="top__whyAi vstack">
                    <p className="top__whyTopText top__whyTopTextAi box color-sub">
                      AIを活用したアプローチ
                    </p>
                    <div className="top__whyitemBox vstack justify-center align-center gap-m">
                      <div className="vstack gap-s">
                        <div className="hstack justify-center">
                          <img
                            className="img max-content"
                            src={whyAi01Svg}
                            alt=""
                          />
                        </div>
                        <p className="top__whyAiText text color-sub weight-bold align-center">
                          <span className="top__underLine">約1,000種</span>
                          の特徴量を多角的に解析
                          <br className="pcOnly" />
                          高い予測精度が期待できる
                        </p>
                      </div>
                      <div className="stack gap-xs gap-pc-s">
                        <div className="top__whyAiCheckBox hstack">
                          <div className="top__whyAiCheckBoxImg hstack justify-center align-center">
                            <img src={whyCheckSvg} alt="" />
                          </div>
                          <div className="hstack justify-center align-center">
                            <p className="text size-main color-sub pr-s pl-s pt-s pb-s">
                              <span className="text weight-bold">
                                「先行性」の高いマーケットデータを厳選
                              </span>
                              して解析
                            </p>
                          </div>
                        </div>
                        <div className="top__whyAiCheckBox hstack">
                          <div className="top__whyAiCheckBoxImg hstack justify-center align-center">
                            <img src={whyCheckSvg} alt="" />
                          </div>
                          <div className="hstack justify-center align-center">
                            <p className="text size-main color-sub pr-s pl-s pt-s pb-s">
                              膨大なデータを日々精緻に解析することで、
                              <span className="text weight-bold">
                                マーケットの変化に機動的に対応
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top__whyCard stack">
                  <div className="top__whyCardTextBox vstack justify-center align-center">
                    <h4 className="text size-h4 weight-bold color-sub align-center">
                      相場変動の流れと
                      <br />
                      AIラップの予兆察知のイメージ
                    </h4>
                  </div>
                  <div className="top__whyCardBox">
                    <div className="top__pt top__pr hstack justify-center">
                      <div className="mobileOnly">
                        <img src={whyCirclelineSvg} alt="" />
                      </div>
                      <div className="pcOnly">
                        <img
                          className="img max-content"
                          src={whyCirclelinePcSvg}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="top__whyCardCirclTextBox">
                      <p className="text size-main color-text-sub">
                        景気のピークが近そう
                      </p>
                      <div className="vstack align-pc-center gap-xs gap-pc-s pt-m pt-pc-0">
                        <p className="text size-main color-sub">
                          マーケットデータに相場変調のシグナル
                        </p>
                        <div className="top__whyBalloon top__whyBalloonBlue">
                          <p className="text size-main color-white nowrap">
                            AIラップ
                          </p>
                          <p className="text size-sub color-white">
                            ビッグデータを解析し予兆察知機動的に投資配分を変更
                          </p>
                        </div>
                      </div>
                      <div className="vstack align-pc-center gap-xs gap-pc-s pt-56 pt-pc-0 top__pl">
                        <p className="text size-main color-text-sub">
                          景気悪化が実態化
                        </p>
                        <div className="top__whyBalloon">
                          <p className="text size-sub color-text-main">
                            景気関連指標等、遅行性のあるデータを分析しても予測効果は期待できない
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offsetElement" data-smooth-scroll-target-id={2} />
          <div className="box color-background border-top">
            <div className="container narrow center pt-xl pb-xl pr-s pl-s pt-pc-64 pb-pc-64">
              <div className="vstack gap-xs">
                <h3 className="top__whyHeadding stack gap-xxs gap-pc-xs text color-sub weight-bold">
                  <span className="top__whyLatinHeadding text latin weight-bold">
                    02
                  </span>
                  冷静な投資判断を目指す
                </h3>
                <p className="top__whyThreeThings text latin">THREE THINGS</p>
              </div>
              <div className="pt-m pt-pc-l">
                <div className="stack card">
                  <div className="top__whyHuman vstack">
                    <p className="top__whyTopText box color-gray">人間の傾向</p>
                    <div className="top__whyitemBox vstack align-center justify-center gap-xs gap-pc-l">
                      <div>
                        <img
                          className="img"
                          src={whyHumanSvg}
                          alt=""
                        />
                      </div>
                      <p className="top__whyHumanText text color-text-sub weight-bold align-center">
                        感情や思い込みの
                        <br className="pcOnly" />
                        影響を受けやすい
                      </p>
                      <div className="top__whyHumanArrow">
                        <img
                          className="pcOnly"
                          src={whyArrowSvg}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="top__whyAi vstack">
                    <p className="top__whyTopText top__whyTopTextAi box color-sub">
                      AIを活用したアプローチ
                    </p>
                    <div className="top__whyitemBox vstack justify-center align-center gap-m">
                      <div className="vstack gap-s">
                        <div className="hstack justify-center">
                          <img
                            className="img max-content"
                            src={whyAi02Svg}
                            alt=""
                          />
                        </div>
                        <p className="top__whyAiText text color-sub weight-bold align-center">
                          AI予測に基づき
                          <br className="mobileOnly" />
                          <span className="top__underLine">
                            自動で投資配分を変更
                          </span>
                          <br />
                          合理的な投資判断を
                          <br className="mobileOnly" />
                          行うことが可能
                        </p>
                      </div>
                      <div className="stack gap-xs gap-pc-s">
                        <div className="top__whyAiCheckBox hstack">
                          <div className="top__whyAiCheckBoxImg hstack justify-center align-center">
                            <img src={whyCheckSvg} alt="" />
                          </div>
                          <div className="hstack justify-center align-center">
                            <p className="text size-main color-sub pr-s pl-s pt-s pb-s">
                              <span className="text weight-bold">
                                AI技術と伝統的な金融工学理論
                              </span>
                              を融合した
                              <span className="text weight-bold">
                                「人」が介在しない
                              </span>
                              投資判断プロセス
                            </p>
                          </div>
                        </div>
                        <div className="top__whyAiCheckBox hstack">
                          <div className="top__whyAiCheckBoxImg hstack justify-center align-center">
                            <img src={whyCheckSvg} alt="" />
                          </div>
                          <div className="hstack justify-center align-center">
                            <p className="text size-main color-sub pr-s pl-s pt-s pb-s">
                              感情や思い込みに左右されないため、
                              <span className="text weight-bold">
                                冷静に売買タイミングを見極められる
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offsetElement" data-smooth-scroll-target-id={3} />
          <div className="box color-background border-top">
            <div className="container narrow center pt-xl pb-xl pr-s pl-s pt-pc-64 pb-pc-64">
              <div className="vstack gap-xs">
                <h3 className="top__whyHeadding stack gap-xxs gap-pc-xs text color-sub weight-bold">
                  <span className="top__whyLatinHeadding text latin weight-bold">
                    03
                  </span>
                  予測モデルの継続的な改善を目指す
                </h3>
                <p className="top__whyThreeThings text latin">THREE THINGS</p>
              </div>
              <div className="pt-m pt-pc-l pb-l pb-pc-64">
                <div className="stack card">
                  <div className="top__whyHuman vstack">
                    <p className="top__whyTopText box color-gray">人間の傾向</p>
                    <div className="top__whyitemBox vstack align-center justify-center gap-xs gap-pc-l">
                      <div>
                        <img
                          className="img"
                          src={whyHumanSvg}
                          alt=""
                        />
                      </div>
                      <p className="top__whyHumanText text color-text-sub weight-bold align-center">
                        時間と忍耐が必要であり
                        <br />
                        改善を継続することが難しい
                      </p>
                      <div className="top__whyHumanArrow">
                        <img
                          className="pcOnly"
                          src={whyArrowSvg}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="top__whyAi vstack">
                    <p className="top__whyTopText top__whyTopTextAi box color-sub">
                      AIを活用したアプローチ
                    </p>
                    <div className="top__whyitemBox vstack justify-center align-center gap-m">
                      <div className="vstack gap-s">
                        <div className="hstack justify-center">
                          <img
                            className="img max-content"
                            src={whyAi03Svg}
                            alt=""
                          />
                        </div>
                        <p className="top__whyAiText text color-sub weight-bold align-center">
                          <span className="top__underLine">機械学習</span>
                          で年月の経過に合わせて
                          <br className="pcOnly" />
                          予測精度の向上が期待できる
                        </p>
                      </div>
                      <div className="top__whyAiCheckBox top__whyAiCheckBox03 hstack">
                        <div className="top__whyAiCheckBoxImg hstack justify-center align-center">
                          <img src="static/picture/why_check.svg" alt="" />
                        </div>
                        <div className="vstack justify-center align-center">
                          <div className="pr-s pl-s pt-s pb-s">
                            <p className="text size-main color-sub">
                              AIが市場の変動要因やその傾向を分析して
                              <span className="text weight-bold">機械学習</span>
                              を行い、
                              <span className="text weight-bold">
                                予測モデルを自動で継続的に改善。
                              </span>
                            </p>
                            <p className="text size-sub color-text-sub">
                              一般例：「データX」の予測精度への寄与が小さくなってきた一方で、「データY」を用いると予測精度が向上するため、使用する特徴量を変更する等
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text size-sub align-center">
                ※上記のAI投資が目指すことは、将来の運用成果等を示唆または保証するものではありません。
              </p>
            </div>
          </div>
        </div>
        <div className="box color-white">
          <div className="box color-main vstack gap-xs gap-pc-s text align-center pt-l pb-l pt-pc-xl pb-pc-xl">
            <div className="top__subHeading vstack gap-xxs align-center text latin">
              <span>POTENTIAL</span>
              <span className="top__divider" />
            </div>
            <h2 className="text size-h2 color-white">
              バックテストが示す
              <br className="mobileOnly" />
              AI投資の可能性
            </h2>
          </div>
          <div>
            <div className="container center narrow pt-xl pb-xl pr-s pl-s pt-pc-64 pb-pc-64">
              <div className="vstack gap-m box color-background-table pt-m pb-m pr-s pl-s pt-pc-xl pb-pc-xl pr-pc-xl pl-pc-xl">
                <div className="stack gap-m">
                  <div className="top__backtestDescriptionWrapper vstack gap-m">
                    <div className="vstack gap-1rem">
                      <p className="text size-main color-text-main">
                        AIラップのサービスリリース時の運用戦略に基づき投資を行っていたと仮定したバックテストと、サービスリリース以降の運用実績を繋ぎ合わせた2024年11月末までの過去10年間のAIラップのパフォーマンスは+191%となり、一般的なロボアドバイザーを大きく上回りました。
                      </p>
                      <p className="text size-main color-text-main">
                        AIラップはAIを活用し、「正確な将来予測」「冷静な投資判断」「予測モデルの継続的な改善」を行うことで、人を凌駕するパフォーマンスを目指します。
                      </p>
                    </div>
                    <a
                      className="button border top__button main full gap-xxs"
                      href="javascript:{onLinkBtnClick()}"
                    >
                      「LINEで投資アドバイザーを追加」
                      <span className="icon size-16">
                        <svg viewBox="0 0 24 24">
                          <g
                            stroke="none"
                            strokewidth={1}
                            fill="none"
                            fillrule="evenodd"
                          >
                            <path
                              d="M 15.7087 11.2925 C 15.7077 11.2915 15.7057 11.2915 15.7047 11.2905 L 9.7067 5.2925 C 9.3167 4.9015 8.6837 4.9015 8.2927 5.2925 C 7.9017 5.6835 7.9017 6.3165 8.2927 6.7075 L 13.5867 12.0005 L 8.2927 17.2945 C 7.9017 17.6855 7.9017 18.3175 8.2927 18.7085 C 8.6837 19.0995 9.3167 19.0995 9.7067 18.7085 L 15.7047 12.7115 C 15.7057 12.7095 15.7077 12.7095 15.7087 12.7085 C 15.9037 12.5135 16.0017 12.2565 16.0017 12.0005 C 16.0017 11.7445 15.9037 11.4875 15.7087 11.2925"
                              fill="currentColor"
                            />
                          </g>
                        </svg>
                      </span>
                    </a>
                  </div>
                  <figure className="box color-white">
                    <div className="mobileOnly">
                      <img
                        className="img"
                        src={backtestImg}
                        alt="バックテストが示すAI投資の可能性"
                      />
                    </div>
                    <div className="pcOnly">
                      <img
                        className="img"
                        src={backtestPcImg}
                        alt="バックテストが示すAI投資の可能性"
                      />
                    </div>
                    <figcaption className="stack gap-xxs gap-pc-s pb-s pl-s text size-sub">
                      <span className="text color-text-sub">
                        バックテスト期間：2014/11/28〜2022/4/6
                      </span>
                      <a
                        className="top__backtestLink hstack align-center gap-xxs text color-main decoration-underline"
                        href="javascript:{onLinkBtnClick()}"
                      >
                        実績期間：2022/4/7～2024/11/29
                        <span className="icon size-16">
                          <svg viewBox="0 0 24 24">
                            <g
                              stroke="none"
                              strokewidth={1}
                              fill="none"
                              fillrule="evenodd"
                            >
                              <path
                                d="M 15.7087 11.2925 C 15.7077 11.2915 15.7057 11.2915 15.7047 11.2905 L 9.7067 5.2925 C 9.3167 4.9015 8.6837 4.9015 8.2927 5.2925 C 7.9017 5.6835 7.9017 6.3165 8.2927 6.7075 L 13.5867 12.0005 L 8.2927 17.2945 C 7.9017 17.6855 7.9017 18.3175 8.2927 18.7085 C 8.6837 19.0995 9.3167 19.0995 9.7067 18.7085 L 15.7047 12.7115 C 15.7057 12.7095 15.7077 12.7095 15.7087 12.7085 C 15.9037 12.5135 16.0017 12.2565 16.0017 12.0005 C 16.0017 11.7445 15.9037 11.4875 15.7087 11.2925"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </span>
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top__modal" data-youtube-modal="">
          <button className="top__modalOverlay" data-youtube-modal-close="" />
          <div className="top__modalInner">
            <button className="top__modalCloseBtn" data-youtube-modal-close="">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="none"
                >
                  <g fill="#fff">
                    <path d="M27.556 29.335c-.47 0-.923-.187-1.256-.52L3.188 5.702A1.778 1.778 0 0 1 5.702 3.19L28.814 26.3a1.777 1.777 0 0 1-1.258 3.035Z"></path>
                    <path d="M4.445 29.335A1.779 1.779 0 0 1 3.188 26.3L26.3 3.19a1.778 1.778 0 0 1 2.514 2.513L5.703 28.814c-.334.334-.786.521-1.258.521Z"></path>
                  </g>
                </svg>
              </span>
            </button>
            <div
              className="youtube__iframeContainer_modal"
              data-youtube-modal-iframe-container=""
            />
          </div>
        </div>
      </div>
      <footer>
        <div className="footer__conversion stack justify-center gap-l">
          <div className="footer__conversionItem vstack gap-s text align-center">
            <a
              className="button shadow footer__conversionRedBtn gap-xxs"
              rel="noopener noreferrer"
              href="javascript:{onLinkBtnClick()}"
            >
              AIラップを始める
              <span className="icon size-16">
                <svg
                  width={17}
                  height={16}
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8.5" cy={8} r={8} fill="white" />
                  <path
                    d="M7.56066 4.60348C7.3654 4.40822 7.04882 4.40822 6.85355 4.60348C6.65829 4.79874 6.65829 5.11532 6.85355 5.31058L9.91768 8.37471C10.1129 8.56998 10.4295 8.56998 10.6248 8.37471C10.8201 8.17945 10.8201 7.86287 10.6248 7.66761L7.56066 4.60348Z"
                    fill="#E5004C"
                  />
                  <path
                    d="M9.91768 7.66679L6.85355 10.7309C6.65829 10.9262 6.65829 11.2428 6.85355 11.438C7.04882 11.6333 7.3654 11.6333 7.56066 11.438L10.6248 8.3739C10.8201 8.17863 10.8201 7.86205 10.6248 7.66679C10.4295 7.47153 10.1129 7.47153 9.91768 7.66679Z"
                    fill="#E5004C"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </footer>
      <div id="karte-c" className="karte-c karte-r">
        <div className="karte-g _karte-g__4I82_">
          <div
            id="karte-6681376"
            className="karte-widget karte-widget--bottom karte-widget--right"
          >
            <div className="karte-widget__backdrop" />
            <div className="karte-widget__container">
              <div className="karte-widget__content">
                <div className="_karte-temp-whole__4I82_">
                  <div className="_karte-temp-state1__4I82_">
                    <i className="_karte-temp-close__4I82_ _krt-icon-close07__4I82_ karte-close _karte-temp-hover__4I82_" />
                    <div className="_karte-temp-card__4I82_">
                      <a
                        className="_karte-temp-hover__4I82_"
                        href="javascript:{onLinkBtnClick()}"
                      >
                        <img src={lineImg} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
