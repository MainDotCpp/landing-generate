import header1Img from 'static/picture/header1.png'
import header2Img from 'static/picture/header2.png'
import header3Img from 'static/picture/header3.png'
import header3sImg from 'static/picture/header3_s.png'
import ctaTitleImg from 'static/picture/cta_title.png'
import ctaBtnImg from 'static/picture/cta_btn.png'
import ch1Img from 'static/picture/ch1_img.png.jpeg'
import ch1ImgS from 'static/picture/ch1_img_s.png.jpeg'
import ch4OjiImg from 'static/picture/ch4_oji.png'
import ch4TitleImg from 'static/picture/ch4_title.png'
import tb1Img from 'static/picture/tb1.png'
import tb2Img from 'static/picture/tb2.png'
import tb3Img from 'static/picture/tb3.png'
import ch6TitleImg from 'static/picture/ch6_title.png'
import ch3Title1Img from 'static/picture/ch3_title1.png'
import ch3Title2Img from 'static/picture/ch3_title2.png'
import ch3Title3Img from 'static/picture/ch3_title3.png'
import ch3MarkImg from 'static/picture/ch3_mark.png'
import btnCta2Img from 'static/picture/btn_cta2.png'
import pagetopImg from 'static/picture/pagetop.png'
import imgXy0816_1 from 'static/picture/img_xy0816_1.png'

export const config = {
  title: 'LINE友達になるだけで無料でもらえる！'
}
function Page() {
  return (
    <>
      {/* hot */}
      <div id="wrapper">
        {/* header=PC */}
        <header id="header_pc">
          <div className="head_top clearfix">
            <div className="head_l">
              <img
                src={header1Img}
                alt="パソコン?タブレットにインストールするだけ！"
              />
            </div>
            <div className="head_r wow animate__animated animate__shakeX">
              <img src={header2Img} alt="儲かりすぎてヤバイ！？" />
            </div>
          </div>
          <h1>
            <img
              src={header3Img}
              alt="まだ銘柄探しに苦労していますか？最新AIソフトを“1分インストール”するだけで
    大化け銘柄を抽出！"
            />
          </h1>
        </header>
        {/* /header=PC */}
        {/* header=SP */}
        <header id="header_sp">
          <div className="head_top clearfix">
            <div className="head_l">
              <img
                src={header1Img}
                alt="パソコン?タブレットにインストールするだけ！"
              />
            </div>
            <div className="head_r wow animate__animated animate__shakeX">
              <img src={header2Img} alt="儲かりすぎてヤバイ！？" />
            </div>
          </div>
          <h1 className="banner_pc">
            <img
              src={header3Img}
              alt="まだ銘柄探しに苦労していますか？最新AIソフトを“1分インストール”するだけで
    大化け銘柄を抽出！"
            />
          </h1>
          <h1 className="banner_sp">
            <img
              src={header3sImg}
              alt="まだ銘柄探しに苦労していますか？最新AIソフトを“1分インストール”するだけで
    大化け銘柄を抽出！"
            />
          </h1>
        </header>
        {/* /header=SP */}
        {/* CTA */}
        <section className="cta" id="floating">
          <div className="inner">
            <h2>
              <img
                src={ctaTitleImg}
                alt="今なら無料体験版を公開中"
              />
            </h2>
            <form name="mail_form" acceptCharset="utf-8">
              <div className="submit center banner animate__animated animate__pulse animate__infinite">
                <a
                  href="javascript:{onLinkBtnClick()}"
                  style={{ color: 'black', display: 'inline-block' }}
                >
                  <img
                    src={ctaBtnImg}
                    alt="無料体験版のお申し込みをする"
                  />
                </a>
              </div>
            </form>
          </div>
        </section>
        {/* /CTA */}
        {/* 1 */}
        <section className="ch1">
          <div className="inner2">
            <div className="ch1_in">
              <h2 className="banner_pc">
                <img
                  src={ch1Img}
                  alt="もしや、まだこんな株の買い方してますか？"
                />
              </h2>
              <h2 className="banner_sp">
                <img
                  src={ch1ImgS}
                  alt="もしや、まだこんな株の買い方してますか？"
                />
              </h2>
            </div>
          </div>
        </section>
        {/* /1 */}
        {/* 4 */}
        <section className="ch4">
          <div className="ab_title_ch4">
            <div className="ch4_oji_wp">
              <div className="ch4_oji wow animate__animated animate__shakeX">
                <img src={ch4OjiImg} alt="" />
              </div>
              <img
                src={ch4TitleImg}
                alt="直近で最新AIソフトが導き出した代表的な大化け銘柄"
              />
            </div>
          </div>
          <div className="ch4_wp clearfix">
            {/* BOX */}
            <div className="ch4_box_l">
              <h3>サイバーステップ(3810)</h3>
              <table className="tb1">
                <tbody>
                  <tr>
                    <th>
                      <img src={tb1Img} alt="安値" />
                    </th>
                    <td>293円</td>
                  </tr>
                  <tr>
                    <th>
                      <img src={tb2Img} alt="最高値" />
                    </th>
                    <td>7980円</td>
                  </tr>
                </tbody>
              </table>
              <div className="avr clearfix">
                <div className="avr_l">
                  <img src={tb3Img} alt="平均" />
                </div>
                <div className="avr_r">27.2倍</div>
              </div>
            </div>
            {/* /BOX */}
            {/* BOX */}
            <div className="ch4_box_r">
              <h3>グローバルウェイ(3936)</h3>
              <table className="tb1">
                <tbody>
                  <tr>
                    <th>
                      <img src={tb1Img} alt="安値" />
                    </th>
                    <td>60円</td>
                  </tr>
                  <tr>
                    <th>
                      <img src={tb2Img} alt="最高値" />
                    </th>
                    <td>2192円</td>
                  </tr>
                </tbody>
              </table>
              <div className="avr clearfix">
                <div className="avr_l">
                  <img src={tb3Img} alt="平均" />
                </div>
                <div className="avr_r">36.5倍</div>
              </div>
            </div>
            {/* /BOX */}
            {/* BOX */}
            <div className="ch4_box_l">
              <h3>プロルート丸光(8256)</h3>
              <table className="tb1">
                <tbody>
                  <tr>
                    <th>
                      <img src={tb1Img} alt="安値" />
                    </th>
                    <td>47円</td>
                  </tr>
                  <tr>
                    <th>
                      <img src={tb2Img} alt="最高値" />
                    </th>
                    <td>538円</td>
                  </tr>
                </tbody>
              </table>
              <div className="avr clearfix">
                <div className="avr_l">
                  <img src={tb3Img} alt="平均" />
                </div>
                <div className="avr_r">11.4倍</div>
              </div>
            </div>
            {/* /BOX */}
            {/* BOX */}
            <div className="ch4_box_r">
              <h3>CAICA(2315)</h3>
              <table className="tb1">
                <tbody>
                  <tr>
                    <th>
                      <img src={tb1Img} alt="安値" />
                    </th>
                    <td>160円</td>
                  </tr>
                  <tr>
                    <th>
                      <img src={tb2Img} alt="最高値" />
                    </th>
                    <td>850円</td>
                  </tr>
                </tbody>
              </table>
              <div className="avr clearfix">
                <div className="avr_l">
                  <img src={tb3Img} alt="平均" />
                </div>
                <div className="avr_r">5.3倍</div>
              </div>
            </div>
            {/* /BOX */}
          </div>
        </section>
        {/* /4 */}
        {/* 2 */}
        {/* <section class="ch2">
  <h2><img src="//Uploads/b2efb542/static/4D517E9907111739C/picture/ch2_img.jpg" alt="人の力では到底ムリな作業を最新AIソフト「Stock Sieve（ストックシーブ）」が行います！"></h2>
  </section> */}
        <section className="ch6">
          <div className="ab_title_ch6">
            <div className="ch6_oji_wp">
              <div className="ch6_oji wow animate__animated animate__shakeX">
                <img src={ch4OjiImg} alt="" />
              </div>
              <img src={ch6TitleImg} alt="" />
            </div>
          </div>
        </section>
        {/* /2 */}
        {/* 3 */}
        <section className="ch3">
          <div className="ch3_in">
            {/* BOX */}
            <div className="ch3_box">
              <div className="ab_title wow animate__animated animate__bounceInRight">
                <img
                  src={ch3Title1Img}
                  alt="銘柄探しの苦労不要！"
                />
              </div>
              <div className="greeting_wp">
                <div className="ab_mark">
                  <img src={ch3MarkImg} alt="" />
                </div>
                <p>30代 男性：</p>
                <p>
                  コンサルティングにより、
                  <br className="spbr" />
                  株式投資の時間を節約でき、
                  <br />
                  適切なタイミングに株を購入または
                  <br />
                  売却して高い利益を得ました！
                </p>
                <br />
                <p>
                  これで資産がもっと増やすことができて、
                  <br />
                  本当にありがたく思っています。
                </p>
              </div>
            </div>
            {/* /BOX */}
            {/* BOX */}
            <div className="ch3_box">
              <div className="ab_title wow animate__animated animate__bounceInRight">
                <img
                  src={ch3Title2Img}
                  alt="値動きが遅く、手数料も高い投資信託不要！"
                />
              </div>
              <div className="greeting_wp">
                <div className="ab_mark">
                  <img src={ch3MarkImg} alt="" />
                </div>
                <p>40代 女性：</p>
                <p>
                  私は専業主婦として、
                  <br className="spbr" />
                  株式投資において貴社に
                  <br />
                  出会えたことをとても幸運に思っています。
                  <br />
                  貴社こそ、私が信頼できる唯一の会社です！
                  <br />
                  貴社が推薦してくださった株式によって、
                  <br />
                  私は目標の100万のナイショ
                  <br className="spbr" />
                  の貯金を実現できました。
                </p>
              </div>
            </div>
            {/* /BOX */}
            {/* BOX */}
            <div className="ch3_box">
              <div className="ab_title wow animate__animated animate__bounceInRight">
                <img
                  src={ch3Title3Img}
                  alt="高い顧問料を払う投資顧問も不要！"
                />
              </div>
              <div className="greeting_wp">
                <div className="ab_mark">
                  <img src={ch3MarkImg} alt="" />
                </div>
                <p>60代 男性：</p>
                <p>
                  費用は一切かかりません。
                  <br className="spbr" />
                  コンサルティング料や入会費など、
                  <br />
                  あらゆる隠れた費用がないので、完全に無料です。
                  <br />
                  {' '}
                  試しに相談に行ってみたところ、
                  <br />
                  貴社から提供していただいた株式の収益
                  <br className="spbr" />
                  が私を驚かせてくれました！
                </p>
              </div>
            </div>
            {/* /BOX */}
          </div>
        </section>
        {/* /3 */}
        {/* footer start */}
        <a href="javascript:{onLinkBtnClick()}" name="offer" id="offer" />
        {/* footer end */}
      </div>
      {/* フロートボタン */}
      <div className="Bnr">
        <div className="floating">
          <div className="float_in clearfix">
            <div className="fl_box">
              <a href="javascript:{onLinkBtnClick()}">
                <img
                  src={btnCta2Img}
                  alt="無料体験版のお申し込みをする"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ページトップ */}
      <div className="button">
        <a href="javascript:{onLinkBtnClick()}" className="golink1">
          <img
            src={pagetopImg}
            alt=""
            className="animate__animated animate__fadeIn"
          />
        </a>
      </div>
      {/* ページトップ */}
      <div
        className="img_f"
        style={{ position: 'fixed', left: 50, bottom: 160, zIndex: 99999999 }}
      >
        <a href="javascript:{onLinkBtnClick()}">
          <img
            src={imgXy0816_1}
            alt=""
            style={{ maxWidth: '100%', width: 'auto' }}
          />
        </a>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
        '\n        @media screen and (max-width: 767px) {\n            .img_f {\n                left: 10px !important;\n                bottom: 70px !important;\n            }\n\n            .img_f a {\n                width: 60px !important;\n                display: inline-block\n            }\n        }\n    ',
        }}
      />
    </>
  )
}
export default Page
