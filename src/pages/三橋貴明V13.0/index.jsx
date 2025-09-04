import { redirect } from '@/utils/redicrect'
import headImage from './static/picture/head.jpg'
import lineTalk01 from './static/picture/line_talk01.png'

import lineTalk02 from './static/picture/line_talk02.png'
import lineTalk03 from './static/picture/line_talk03.png'
import lineTalk04 from './static/picture/line_talk04.png'
import lineTalk05 from './static/picture/line_talk05.png'
import lineTalk06 from './static/picture/line_talk06.png'
import lineTalk07 from './static/picture/line_talk07.png'
import lineTalk08 from './static/picture/line_talk08.png'
import lineTalk09 from './static/picture/line_talk09.png'
import lineTalkBg from './static/picture/line_talk_bg01.jpg'
// Import all images
import yugutitImage from './static/picture/yugutit_2301_pc.png'
import './static/css/app.css'
import './static/css/normalize.min.css'
import './static/css/style.css'

export const config = {
  title: 'LINEで友達追加すると無料でもらえる',
}

export default () => {
  return (
    <main>
      <article>
        <div>
          {/*   图片响应 */}
          <picture>
            <img
              src={yugutitImage}
              alt=""
              className="img-rounded img-responsive"
            />
          </picture>
        </div>
        <section className="l-cv">
          <div className="c-wrapper">
            <h2 id="inqfs">
              現在参加者の数:
              {' '}
              <span id="joinedCount">21979</span>
            </h2>
            <h2>
              <span>LINE友だち追加で</span>
              <br />
              <span>大本命の急騰銘柄を今すぐ入手可能</span>
            </h2>
            <div className="p-scroll">
              <span className="p-scroll__down" />
            </div>
            <div className="p-btn p-motion">
              <a onClick={redirect}>
                {' '}
                完全無料
                <br className="u-display--sp" />
                LINE友だち追加する
                {' '}
              </a>
            </div>
            <ul>
              <li>※ボタンをクリックするとLINE友だち追加画面に進みます。</li>
              <li>
                ※完全無料0円のLINEサービスのためご料金の発生は一切ありません。
              </li>
            </ul>
          </div>
        </section>
        <section className="l-line">
          <div className="p-title">
            <p>01</p>
            <h2>
              今すぐあなたのLINEに
              <br />
              急騰銘柄情報が
              <br className="u-display--sp" />
              <span>完全無料</span>
              で届きます！
            </h2>
          </div>
          <div className="c-wrapper">
            <ul className="l-line__shot">
              <li className="l-line__shot__left">
                <img src={lineTalkBg} alt="" />
                <ul>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk01} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk02} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk03} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk04} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk05} alt="" />
                  </li>
                </ul>
              </li>
              <li className="l-line__shot__right">
                <img src={lineTalkBg} alt="" />
                <ul>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk06} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk07} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk08} alt="" />
                  </li>
                  <li className="c-fade_trigger c-fade">
                    <img src={lineTalk09} alt="" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section className="l-result">
          <div className="p-title">
            <p>02</p>
            <h2 id="i4b4m">
              LINE配信される
              <br className="u-display--sp" />
              株式投資情報をご活用頂くことで
              <br />
              <em id="iyrfn">1600万円</em>
              を
              <em>超える利益</em>
              を
              <br />
              手にされる方も続出しています！
            </h2>
          </div>
          <div className="LpgSecInner">
            <div className="LpgComp3CardCont">
              <div id="" className="LpgComp3CardCard">
                <div
                  className="LpgComp3CardBody LpgComp3Card3CardContBody"
                  id="itmef"
                >
                  <div className="LpgComp3CardTxt">
                    <h3 className="ql-align-center">
                      <span className="stylish-title2">
                        <b>アナリスト評価が高い銘柄！</b>
                      </span>
                    </h3>
                    <p className="ql-align-center">&nbsp;</p>
                    <p className="ql-align-center">
                      <span id="idqi1">
                        アナリストレーティングが高い、直近のPV数が多い、目標株価との乖離幅が大きい銘柄をランキング
                      </span>
                      <br />
                      <span id="idke4j">
                        <strong>買い予想・ PVランキング</strong>
                      </span>
                      <strong>はこちら▼</strong>
                    </p>
                  </div>
                  <a
                    data-ga-event="button2"
                    onClick={redirect}
                    className="LpgComp3CardBtn LpgExSmallBtn"
                    id="i5zkfj"
                  >
                    <b>買い予想・PVﾗﾝｷﾝｸﾞ</b>
                  </a>
                </div>
              </div>
              <div id="" className="LpgComp3CardCard">
                <div
                  className="LpgComp3CardBody LpgComp3Card3CardContBody"
                  id="iezadm"
                >
                  <div className="LpgComp3CardTxt">
                    <h3 className="ql-align-center">
                      <span className="stylish-title2">
                        <b>将来性あり！</b>
                      </span>
                    </h3>
                    <p className="ql-align-center">&nbsp;</p>
                    <p className="ql-align-center">
                      <span id="izf9cj">
                        直近の業績が好調で、将来性があり、株価上昇にも期待ができる銘柄を抽出
                      </span>
                      <br />
                      <span id="id0xkk">
                        <strong>成長期待株はこちら▼</strong>
                      </span>
                    </p>
                  </div>
                  <a
                    data-ga-event="button3"
                    onClick={redirect}
                    className="LpgComp3CardBtn LpgExSmallBtn"
                    id="ipusq8"
                  >
                    <b>成長期待株 &gt;</b>
                  </a>
                </div>
              </div>
              <div id="" className="LpgComp3CardCard">
                <div
                  className="LpgComp3CardBody LpgComp3Card3CardContBody"
                  id="ifsotc"
                >
                  <div className="LpgComp3CardTxt">
                    <h3 className="ql-align-center">
                      <span id="io6ab5">
                        <span className="stylish-title2">
                          <b>出来高の多い上位100銘柄！</b>
                        </span>
                      </span>
                    </h3>
                    <p className="ql-align-center">
                      <br />
                      <span id="iobpfq">
                        LINE証券で取扱う銘柄のうち、出来高の多い上位100銘柄を表示
                      </span>
                    </p>
                    <p className="ql-align-center">
                      <span id="ik5et7">
                        <strong>出来高ランキング</strong>
                      </span>
                      <strong>はこちら▼</strong>
                    </p>
                  </div>
                  <a
                    data-ga-event="button4"
                    onClick={redirect}
                    className="LpgComp3CardBtn LpgExSmallBtn"
                    id="ifgeeo"
                  >
                    <b>出来高ランキング &gt;</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="main">
          <center>
            <img
              src={headImage}
              alt="head"
              style={{ maxWidth: 475, margin: '0 auto' }}
            />
            <h1 style={{ fontSize: 24, margin: '24px 0' }}>三橋貴明</h1>
          </center>
          <article
            style={{
              textAlign: 'center',
              maxWidth: 475,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <p>
              知識と理論で武装した経済評論家として、多くの日本人投資家・ビジネスパーソンに影響を与えているのが三橋貴明さんです。
            </p>
            <p>
              政治・経済・財政・社会保障まで幅広い分野を独自の視点で分析し、**「日本の未来を守るための経済思考」**を多くの人々に発信し続けています。
            </p>
            <p>
              💡 実務と知識を融合させた経済スタイル
              中小企業診断士としての現場経験を活かしながら、書籍・YouTube・テレビ・講演などを通じて、マクロ経済・財政政策・国民経済の在り方を解説。
              政府やマスコミが語らない「本当の数字」「国民目線の経済論」を追求し、“目覚めるきっかけ”を与える存在として注目されています。
            </p>
            <p>
              📚 難解な経済を「わかりやすく、実践的に」
              三橋さんの特徴は、誰にでも理解できる平易な言葉で、専門的な経済理論を伝えるスタイル。
              特に自身が主宰する「三橋経済塾」では、現代日本に必要な経済知識を初心者にも分かりやすく体系的に教え、**“経済で騙されない人を育てる”**という信念のもと活動しています。
            </p>
            <p>
              📈 未来志向の警鐘と希望の提言
              現在の日本が抱える「緊縮財政・少子化・経済の空洞化」などの課題に対し、三橋さんは警鐘を鳴らす一方で、財政出動・国産回帰・地方再生など希望あるビジョンを提言。
            </p>
            <p>
              そのリアルな提案とデータに基づく分析は、多くの中小企業経営者や一般投資家にとって、時代の羅針盤となっています。
            </p>
            <p>
              🌟 三橋貴明さんの魅力とは ・現場経験に基づいた実務型の経済知識
              ・難解な経済理論を誰にでも伝える「教育者としての熱量」
            </p>
            <p>・陰謀論ではなく「データと事実」に基づく冷静な分析</p>
            <p>・「経済を学ぶことが、日本の未来を守ること」という強い使命感</p>
          </article>
        </section>
        <section className="l-cv">
          <div className="c-wrapper">
            <h2>
              <span>LINE友だち追加で</span>
              <br />
              <span>大本命の急騰銘柄を今すぐ入手可能</span>
            </h2>
            <div className="p-scroll">
              <span className="p-scroll__down" />
            </div>
            <div className="p-btn p-motion">
              <a onClick={redirect}>
                {' '}
                完全無料
                <br className="u-display--sp" />
                LINE友だち追加する
                {' '}
              </a>
            </div>
            <ul>
              <li>※ボタンをクリックするとLINE友だち追加画面に進みます。</li>
              <li>
                ※完全無料0円のLINEサービスのためご料金の発生は一切ありません。
              </li>
            </ul>
          </div>
          <ul></ul>
        </section>
        <div>
          {/*   图片响应 */}
          <picture>
            <img
              src={yugutitImage}
              alt=""
              className="img-rounded img-responsive"
            />
          </picture>
        </div>
      </article>
    </main>

  )
}
