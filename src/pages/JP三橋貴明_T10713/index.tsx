import { redirect } from '@/utils/redicrect'
import img111 from './static/111.png'
import img1111 from './static/1111.jpg'
import imgLine from './static/line.jpg'
import img222 from './static/sq_222.jpg'
import img333 from './static/sq_333.jpg'
import img888 from './static/sq_888.jpg'
import img999 from './static/sq_999.jpg'
import './index.css'

export const config = {
  title: 'LINEで友達追加',
}
export default () => {
  return (
    <>
      <div id="root">
        <div className="PageFrameWrapper">
          <div className="pageFrame">
            <div className="Profile">
              <div className="Profile-box">
                <div className="line" />
                <div className="line" />
                <div className="content">
                  <div className="imgrow">
                    <div className="line" />
                    <img src={img333} className="w-full" alt="三橋貴明" />
                  </div>
                  <div className="css-m flex">
                    <span>
                      <img src={img1111} className="wh-full" alt="プロフィール" />
                    </span>
                  </div>
                  <div className="txtbox">
                    <h4>
                      皆様、こんにちは。私は
                      三橋貴明
                      と申します。
                    </h4>
                    <h4>節約＆投資のお役立ち情報を発信！</h4>
                    <p>
                      収入の10倍を無料で手に入れましょう現在の参加者数は96,682名！
                      空席は 500
                      名未満です、アシスタントLINEを追加して無料で入手できます！
                    </p>
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="rowlink btn2">
                    <a className="link-btn" onClick={redirect}>
                      <div className="avatar">
                        <img
                          src={img1111}
                          className="wh-full"
                          alt="プロフィール"
                        />
                      </div>
                      <div className="btn_txt">
                        <p>ここをクリック</p>
                        <p>
                          三橋貴明
                          の LINEを追加今す
                        </p>
                        <p>
                          関連情報を無料で受け取るために、率先してメッセージを送信してください
                        </p>
                      </div>
                      <div className="line">
                        <img src={imgLine} className="w-full" alt="LINE" />
                      </div>
                    </a>
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="msgbox">
                    2025年に無料で実施した公共福祉講演では、私の株式取引哲学や2025年の株式市場予測、そして10倍成長が見込まれる銘柄情報を提供しました。日本はかつて世界第3位の経済大国でした。現在、日本は深刻な不況と高齢化に直面しており、定年まで迎えられない高齢者も少なくありません。皆様のご支援に報いるために、富のパスワードをすべて公開することにしました。
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="line" />
                  <div className="imgrow">
                    <div className="line" />
                    <img src={img111} className="w-full" alt="投資画像" />
                  </div>
                  <div className="line" />
                  <div className="rowlink">
                    <a className="link-btn" onClick={redirect}>
                      <div className="avatar">
                        <img
                          src={img1111}
                          className="wh-full"
                          alt="プロフィール"
                        />
                      </div>
                      <div className="btn_txt">
                        <p>ここをクリック</p>
                        <p>
                          三橋貴明
                          の LINEを追加今す
                        </p>
                        <p>
                          関連情報を無料で受け取るために、率先してメッセージを送信してください
                        </p>
                      </div>
                      <div className="line">
                        <img src={imgLine} className="w-full" alt="LINE" />
                      </div>
                    </a>
                  </div>
                  <div className="imgbox">
                    <img src={img222} className="w-full" alt="投資情報" />
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="imgbox">
                    <img src={img888} className="w-full" alt="投資成果" />
                  </div>
                  <div className="line" />
                  <div className="rowlink">
                    <a className="link-btn" onClick={redirect}>
                      <div className="avatar">
                        <img
                          src={img1111}
                          className="wh-full"
                          alt="プロフィール"
                        />
                      </div>
                      <div className="btn_txt">
                        <p>ここをクリック</p>
                        <p>
                          三橋貴明
                          の LINEを追加今す
                        </p>
                        <p>
                          関連情報を無料で受け取るために、率先してメッセージを送信してください
                        </p>
                      </div>
                      <div className="line">
                        <img src={imgLine} className="w-full" alt="LINE" />
                      </div>
                    </a>
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="msgbox">
                    最近は株教育に力を入れており、株の知識や自分の投資哲学を人々に共有することに努めています。
                    「三橋投資教室」を開設し、多くのプロ投資家をお招きして無料公開講座を開催してきました。
                    私自身の投資経験と強力なChatgptを使って、投資とお金の稼ぎ方を教えます。
                    私たちは、お客様の投資の力を最大限に活用し、ご自身の資産を増やすお手伝いをいたします。
                    最も重要なことは、これらがすべて無料であるということです。
                  </div>
                  <div className="line" />
                  <div className="line" />
                  <div className="imgbox">
                    <img src={img999} className="w-full" alt="投資結果" />
                  </div>
                  <div className="txtbox">
                    <h3>下のボタンをクリックしてください。</h3>
                    <h4>500万ドル相当のデータを受信</h4>
                  </div>
                  <div className="line" />
                  <div className="rowlink">
                    <a className="link-btn" onClick={redirect}>
                      <div className="avatar">
                        <img
                          src={img1111}
                          className="wh-full"
                          alt="プロフィール"
                        />
                      </div>
                      <div className="btn_txt">
                        <p>ここをクリック</p>
                        <p>
                          三橋貴明
                          の LINEを追加今す
                        </p>
                        <p>
                          関連情報を無料で受け取るために、率先してメッセージを送信してください
                        </p>
                      </div>
                      <div className="line">
                        <img src={imgLine} className="w-full" alt="LINE" />
                      </div>
                    </a>
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
