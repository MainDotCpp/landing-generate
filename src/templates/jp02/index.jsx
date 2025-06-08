import defaultSchoolImage from './static/2c9f2e41/static/picture/6336dae9-ba07-43fe-afc1-9ba86fc60eab.jpg'
import ctaButtonImage from './static/2c9f2e41/static/picture/7839a379-d188-483d-b151-5e575490b0a9.png'
import floatingButtonImage from './static/2c9f2e41/static/picture/button.png'
import tuImage from './static/2c9f2e41/static/picture/TU.png'
import resultImage2 from './uploads/article_photo/photo/2989673/b4685e32-170f-45cf-b9cc-587892e31a82.png'
import resultImage1 from './uploads/article_photo/photo/2989677/d9433f74-5c6a-47c0-ba22-d8132ec25380.png'
import balloonIcon3 from './uploads/article_photo/photo/2989970/b1fb56ff-a909-4564-b604-55826f21bd1e.png'
import balloonIcon2 from './uploads/article_photo/photo/2989987/12054e94-5ca6-4ad9-9134-f9cd3f27ded3.png'
import balloonIcon1 from './uploads/article_photo/photo/2989990/57fce3cd-0f79-46ef-873a-ecb3c650d343.png'
import successStoryImage from './uploads/article_photo/photo/2990032/7ee2d706-1612-4d2a-be9d-6caaa8b871c9.png'
import commentAvatar1 from './uploads/article_photo/photo/2991573/7eae0542-a6c2-4a44-937f-e886182cef94.png'
import commentAvatar2 from './uploads/article_photo/photo/2991574/61ef8b4c-8e53-4b31-99a3-3909a75365df.png'
import commentAvatar3 from './uploads/article_photo/photo/2991575/040f91a4-d467-457a-b539-dee7e56cf982.png'
import commentAvatar4 from './uploads/article_photo/photo/2991576/a651f3a1-32a0-4c18-8f3e-1c94e15dd311.png'
import commentAvatar5 from './uploads/article_photo/photo/2991577/1cc7d341-90bd-44ae-99a0-51d9e8c83075.png'
import stockVoiceImage from './uploads/article_photo/photo/2991701/c7da021f-a868-48f2-b637-7484a06c6f3d.png'
import slideImage1 from './uploads/article_photo/photo/2992321/0f27cf94-50ec-4a22-8d53-8374d5537a0e.png'
import slideImage2 from './uploads/article_photo/photo/2992323/3e11ea15-9a62-462e-b050-e963fdab885d.png'
import slideImage3 from './uploads/article_photo/photo/2992324/85c8cdb4-d380-4ac4-87dc-56f9ea1799f3.png'
import introVideo from './uploads/article_photo/photo/3062766/797277f0-965c-415f-a8b4-9429997e0148.mp4'
// 导入所有图片和视频资源
import headerImage from './uploads/article_photo/photo/5062630/ce0952ce-3623-4948-a228-b2dbf38a6da5.png'
import './index.css'

function Page({
  name,
  motivationImage,
  teacherImage,
  schoolImage = defaultSchoolImage,
}) {
  return (
    <>
      <div className="article-body">
        <div draggable="false" className="">
          <div className="sb-custom">
            <span contentEditable="false">
              <div
                id="sb-part-11909"
                className="sb-custom-part-m79ti7nwnp4ffqwbdlg"
              >
                <div className="main">
                  <picture>
                    <source
                      type="image/webp"
                      data-srcset="uploads/article_photo/photo/5062630/ce0952ce-3623-4948-a228-b2dbf38a6da5.webp"
                    />
                    <source
                      type="image/avif"
                      data-srcset="uploads/article_photo/photo/5062630/ce0952ce-3623-4948-a228-b2dbf38a6da5.avif"
                    />
                    <img
                      width={700}
                      draggable="false"
                      src={headerImage}
                    />
                  </picture>
                </div>
              </div>

            </span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <br />
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: 10 }}>PR：株式会社オービー</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <video
            className="ql-video lazyload"
            width={515}
            autoPlay
            oncanplay="this.muted=true"
            muted="true"
            loop
            allowFullScreen="true"
            controlslist="nodownload"
            name="media"
            playsInline
          >
            <source
              type="video/mp4"
              src={introVideo}
            />
          </video>
        </div>
        <div>
          <br />
        </div>
        <div>
          投資初心者でも、
          <strong
            style={{ backgroundColor: 'rgb(255, 255, 0)', color: 'rgb(255, 0, 0)' }}
          >
            たった1ヶ月で100万、200万は当たり前に稼げてしまう、
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>
          <strong>1日たった5分で出来る投資法</strong>
          が
        </div>
        <div>
          <strong style={{ color: 'rgb(255, 0, 0)' }}>無料公開</strong>
          され絶賛の声が続出！！
        </div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div
                id="sb-part-10988"
                className="sb-custom-part-lma37l392mf8jwjszc6"
              >
                {/* ############################################ */}
                {/*
  表示枚数                       6
  画像同士の切替スピード           2秒
  画像の消えるアニメーションスピード 1秒
  ※スピード設定はCSSにあります。
*/}
                {/* ############################################ */}
                <section className="c-img01">
                  {/* 追加は↓↓をコピー/削除は不必要な↓↓を削除 */}
                  <div className="c-img01__item">
                    <picture>
                      <img
                        width={570}
                        draggable="false"
                        src={slideImage1}
                      />
                    </picture>
                  </div>
                  {/* 追加は↑↑をコピー/削除は不必要な↑↑を削除 */}
                  <div className="c-img01__item">
                    <img
                      width={570}
                      draggable="false"
                      src={slideImage2}
                    />
                  </div>
                  <div className="c-img01__item">
                    <img
                      width={570}
                      draggable="false"
                      src={slideImage3}
                    />
                  </div>
                </section>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>
          この投資法は
          <strong style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <span
              className="sb-bg-under-marker"
              style={{
                background:
                  'rgba(0, 0, 0, 0) linear-gradient(transparent 80%,#ffff00 0%) repeat scroll 0 0',
              }}
              data-color="#ffff00"
              data-border-size="80%"
            >
              投資の知識、経験、スキルがゼロでも全く問題ナシ！
            </span>
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>
          <strong style={{ color: 'rgb(255, 0, 0)' }}>「1日5分」</strong>
          さえあれば出来てしまう投資法として話題になっているんです。
        </div>
        <div>
          <br />
        </div>
        <div>しかも「一発で〇〇円！」といった</div>
        <div>ギャンブル性の高いものでもなくて、</div>
        <div>
          <br />
        </div>
        <div>
          株式投資の情報番組
          <strong style={{ color: 'rgb(240, 102, 102)' }}>『STOCK VOICE』</strong>
          でも特集された
          <strong style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <span
              className="sb-bg-under-marker"
              style={{
                background:
                  'rgba(0, 0, 0, 0) linear-gradient(transparent 80%,#ffff00 0%) repeat scroll 0 0',
              }}
              data-color="#ffff00"
              data-border-size="80%"
            >
              安全でリターンも狙える、まっとうな投資法。
            </span>
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div style={{ textAlign: 'center' }}>
          <strong style={{ fontSize: 15 }}>
            (YouTubeチャンネルは投資系の中で最大規模)
          </strong>
        </div>
        <div style={{ textAlign: 'center' }}>
          <picture>
            <source
              type="image/webp"
              data-srcset="uploads/article_photo/photo/2991701/c7da021f-a868-48f2-b637-7484a06c6f3d.webp"
            />
            <source
              type="image/avif"
              data-srcset="uploads/article_photo/photo/2991701/c7da021f-a868-48f2-b637-7484a06c6f3d.avif"
            />
            <img
              width={570}
              src={stockVoiceImage}
            />
          </picture>
        </div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div
                id="sb-part-10694"
                className="sb-custom-part-lm7k0ckyne7zf66d89q"
              >
                <div className="balloon">
                  <div className="faceicon">
                    {/* 画像の入れ替えは下記URL変更もしくは左に表示されている画像を選択した後に上部の画像ボタンからも入れ替え可能 */}
                    <picture>
                      <img
                        width={90}
                        draggable="false"
                        src={balloonIcon1}
                      />
                    </picture>
                    {/* アイコン名が不要な場合は下記１行を削除してください */}
                  </div>
                  <div className="balloon-008">
                    <b>具体的にはどんな方法なの？</b>
                  </div>
                </div>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>初心者に愛される理由は、</div>
        <div>
          <strong
            style={{ color: 'rgb(255, 0, 0)', backgroundColor: 'rgba(0, 0, 0, 0)' }}
          >
            まるで副業のように単純作業で稼げるところ。
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>講師がアナタに</div>
        <div>
          <br />
        </div>
        <div>
          <strong>・</strong>
          <strong style={{ backgroundColor: 'initial' }}>
            <span
              className="sb-bg-gum-marker"
              style={{
                background:
                  '-webkit-linear-gradient(left,#ffff00 50%, transparent 50%) 100% 0% / 200% 70% no-repeat',
              }}
              data-color="#ffff00"
            >
              これから伸びる銘柄(お宝銘柄)
            </span>
          </strong>
        </div>
        <div>
          <strong>・</strong>
          <strong style={{ backgroundColor: 'initial' }}>
            <span
              className="sb-bg-gum-marker"
              style={{
                background:
                  '-webkit-linear-gradient(left,#ffff00 50%, transparent 50%) 100% 0% / 200% 70% no-repeat',
              }}
              data-color="#ffff00"
            >
              売り買いのタイミング
            </span>
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>を直接レクチャーしてくれるので、</div>
        <div>
          <strong style={{ color: 'rgb(255, 0, 0)' }}>
            投資の予備知識やスキルは一切不要！
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>1ヶ月目から給料の倍以上を稼ぎ出すことが出来るんです。</div>
        <div>
          <br />
        </div>
        <div>実際にこの手法を試した人たちは...</div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div
                id="sb-part-10988"
                className="sb-custom-part-lma3hye6nsqctg782ym"
              >
                {/* ############################################ */}
                {/*
  表示枚数                       6
  画像同士の切替スピード           2秒
  画像の消えるアニメーションスピード 1秒
  ※スピード設定はCSSにあります。
*/}
                {/* ############################################ */}
                <section className="c-img01">
                  {/* 追加は↓↓をコピー/削除は不必要な↓↓を削除 */}
                  <div className="c-img01__item">
                    <picture>
                      <img
                        width={570}
                        draggable="false"
                        src={resultImage1}
                      />
                    </picture>
                  </div>
                  {/* 追加は↑↑をコピー/削除は不必要な↑↑を削除 */}
                  <div className="c-img01__item">
                    <img
                      width={570}
                      draggable="false"
                      src={resultImage2}
                    />
                  </div>
                </section>
              </div>

            </span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'rgb(187, 187, 187)', fontSize: 10 }}>
            ※ご本人の許可を得て掲載しています。
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'rgb(187, 187, 187)', fontSize: 10 }}>
            ※個人の実績であり効果を実証するものではありません。
          </span>
        </div>
        <div>
          <br />
        </div>
        <div>と、初心者が講師の言う通り取引しただけでこの結果！</div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div id="sb-part-10694" className="sb-custom-part-lm7jz6oxsj94pqbltr">
                <div className="balloon">
                  <div className="faceicon">
                    {/* 画像の入れ替えは下記URL変更もしくは左に表示されている画像を選択した後に上部の画像ボタンからも入れ替え可能 */}
                    <picture>
                      <img
                        width={90}
                        draggable="false"
                        src={balloonIcon2}
                      />
                    </picture>
                    {/* アイコン名が不要な場合は下記１行を削除してください */}
                  </div>
                  <div className="balloon-008">
                    <b>講師って、ホントに信用できる人なの？</b>
                  </div>
                </div>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>アナタに5分投資を教えてくれるのは、</div>
        <div>
          <br />
        </div>
        <div>経済評論家として多数のメディアに出演している</div>
        <div>
          <strong style={{ fontSize: 19 }}>{name}</strong>
          <span style={{ fontSize: 13 }} />
          <span style={{ fontSize: 15 }} />
          <span style={{ fontSize: 17 }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <picture>
            <img
              src={teacherImage}
              width={570}
            />
          </picture>
        </div>
        <div>経済評論家・作家として20年以上の経験を持ち、数多くの経済書を執筆。独自の投資理論で多くの投資家を成功へと導いています</div>
        <div>
          <br />
        </div>
        <div style={{ fontSize: 13 }}>テレビ・ラジオ・雑誌などのメディア出演多数で、わかりやすい経済解説に定評があります</div>
        <div>
          <br />
        </div>
        <div style={{ fontSize: 13 }}>講演会や投資セミナーは毎回満席で、大盛況です</div>
        <div>
          <br />
        </div>
        <div>
          {name}
          さんの経済分析力と投資スキルはメディアでも高く評価されています
          <strong
            style={{ color: 'rgb(255, 0, 0)', backgroundColor: 'rgb(255, 255, 0)' }}
          >
            全国放送のニュース番組で特集が組まれる
          </strong>
          ほど！
        </div>
        <div>
          <br />
        </div>
        <div>
          <picture>
            <img
              width={570}
              src={tuImage}
            />
          </picture>
        </div>
        <div>
          <br />
        </div>
        <div>
          実際に、
          {name}
          さんの「5分投資」を学んで成果を上げた人もいます
        </div>
        <div>
          <br />
        </div>
        <div>
          <strong
            style={{ backgroundColor: 'rgb(255, 255, 0)', color: 'rgb(255, 0, 0)' }}
          >
            年収200万⇒1億円を達成
          </strong>
          した人もいるんです！
          <span style={{ fontSize: 13 }}>(もちろん投資初心者の方)</span>
        </div>
        <div>
          <br />
        </div>
        <div>
          <picture>
            <img
              width={570}
              src={successStoryImage}
            />
          </picture>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'rgb(187, 187, 187)', fontSize: 10 }}>
            ※ご本人の許可を得て掲載しています。
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ color: 'rgb(187, 187, 187)', fontSize: 10 }}>
            ※個人の成果であり効果を実証するものではありません。
          </span>
        </div>
        <div>
          <br />
        </div>
        <div>
          この方も、
          {name}
          さんが
          <span style={{ color: 'rgb(255, 0, 0)' }}>無料公開</span>
          している
          <strong style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <span
              className="sb-bg-under-marker"
              style={{
                background:
                  'rgba(0, 0, 0, 0) linear-gradient(transparent 80%,#ffff00 0%) repeat scroll 0 0',
              }}
              data-color="#ffff00"
              data-border-size="80%"
            >
              「お宝銘柄」
            </span>
          </strong>
          、
          <strong style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
            <span
              className="sb-bg-under-marker"
              style={{
                background:
                  'rgba(0, 0, 0, 0) linear-gradient(transparent 80%,#ffff00 0%) repeat scroll 0 0',
              }}
              data-color="#ffff00"
              data-border-size="80%"
            >
              「売買のタイミング」
            </span>
          </strong>
          をもとに投資しただけ！
        </div>
        <div>
          <br />
        </div>
        <div>
          1日5分で終わるから、
          <strong>普段の生活リズムを維持しながら取引出来てしまう</strong>
          点も魅力的ですよね。
        </div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div id="sb-part-10694" className="sb-custom-part-lm7jy8u8ktfkmrod2p">
                <div className="balloon">
                  <div className="faceicon">
                    {/* 画像の入れ替えは下記URL変更もしくは左に表示されている画像を選択した後に上部の画像ボタンからも入れ替え可能 */}
                    <picture>
                      <img
                        width={90}
                        draggable="false"
                        src={balloonIcon3}
                      />
                    </picture>
                    {/* アイコン名が不要な場合は下記１行を削除してください */}
                  </div>
                  <div className="balloon-008">
                    <b>そもそも、なんで無料公開なんかしてるの？</b>
                  </div>
                </div>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>
          もともとはオフラインのスクールで教えていた手法なのですが、メディア出演を皮切りに
          <span style={{ color: 'rgb(255, 0, 0)' }}>問い合わせが殺到！</span>
        </div>
        <div>
          <br />
        </div>
        <div>
          <picture>
            <img
              src={schoolImage}
              width={570}
            />
          </picture>
        </div>
        <div>
          <br />
        </div>
        <div>
          <span
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              fontSize: 18,
              color: 'rgb(17, 17, 17)',
            }}
          >
            ☝普段のスクールは、お金を払っても
          </span>
        </div>
        <div>
          <span
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              fontSize: 18,
              color: 'rgb(17, 17, 17)',
            }}
          >
            なかなか受講できないほどの倍率。
          </span>
        </div>
        <div>
          <br />
        </div>
        <div>
          その時、
          {name}
          さんの
          <strong>「経済の専門家」</strong>
          としての想いから、
          <strong style={{ color: 'rgb(255, 0, 0)' }}>今回の無料公開を決意</strong>
          <span style={{ color: 'rgb(0, 0, 0)' }}>した</span>
          んだそう！
        </div>
        <div style={{ textAlign: 'center' }}>
          <picture>
            <img
              src={motivationImage}
              width={570}
            />
          </picture>
        </div>
        <div>
          <br />
        </div>
        <div>
          それに、この
          <strong style={{ color: 'rgb(255, 0, 0)' }}>
            1日5分投資を知る方法もとっても簡単！
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
        <div>最初に断っておきますが、</div>
        <div>
          <br />
        </div>
        <div>・個人情報(名前/住所/電話番号)の入力</div>
        <div>・悪質な勧誘や営業行為</div>
        <div>・お金の請求</div>
        <div>
          <br />
        </div>
        <div>
          <strong style={{ color: 'rgb(255, 0, 0)' }}>
            これらは一切ありませんので安心して下さい。
          </strong>
        </div>
        <div>
          <br />
        </div>
        <div>
          興味があれば、下のボタンをクリックして
          <strong style={{ color: 'rgb(102, 185, 102)' }}>LINE</strong>
          を追加し、無料で投資方法を受け取ろう！
        </div>
        <div>
          <br />
        </div>
        <div style={{ textAlign: 'center' }}>
          \ 無料動画の受け取りはこのボタンから！ /
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div id="sb-part-20" className="sb-custom-part-lma4jwq1qmgrqz74de9">
                <span className="buruburu">
                  {/* 画像変更は下記のsrc内を変更してください。動きの速さはCSSで変えられます */}
                  <picture>
                    <source
                      type="image/avif"
                      data-srcset="uploads/article_photo/photo/2998327/7839a379-d188-483d-b151-5e575490b0a9.avif"
                    />
                    <a href="javascript:{onLinkBtnClick()}">
                      <img
                        src={ctaButtonImage}
                        width={570}
                        draggable="false"
                      />
                    </a>
                  </picture>
                </span>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div id="sb-part-2517" className="sb-custom-part-lm8jwxtg799rsrhlia9">
                <div className="fb">
                  <h2>コメント</h2>
                  <div className="fb_box">
                    <div className="fb_icon">
                      <picture>
                        <img
                          width={40}
                          draggable="false"
                          src={commentAvatar1}
                        />
                      </picture>
                      <noscript>
                        &lt;img
                        class="lazyload"
                        src="https://cklmurl.top/7ku/wp/wp-content/uploads/%E5%86%99%E7%9C%9F-3.jpg"&gt;
                      </noscript>
                    </div>
                    <div className="fb_right">
                      <span className="fb_name">ドットコム</span>
                      <span className="fb_com" style={{ color: '#000000' }}>
                        動画みたけど、すごいクオリティ高いね。
                        <br />
                        講師の方の解説も上手いし、これなら安心できそう。
                      </span>
                      <span className="fb_time" />
                    </div>
                  </div>
                  <div className="fb_box">
                    <div className="fb_icon">
                      <picture>
                        <img
                          width={40}
                          draggable="false"
                          src={commentAvatar2}
                        />
                      </picture>
                      <noscript>
                        &lt;img
                        class="lazyload"
                        src="https://cklmurl.top/7ku/wp/wp-content/uploads/%E5%86%99%E7%9C%9F-3.jpg"&gt;
                      </noscript>
                    </div>
                    <div className="fb_right">
                      <span className="fb_name">same</span>
                      <span className="fb_com">
                        <span style={{ color: '#000000' }}>
                          2万円の小額から始めて、現在41万をタッチ。
                          <br />
                          大きく稼げるのもそうだけど、安定して投資できるのが本当に嬉しい。
                        </span>
                      </span>
                      <span className="fb_time" />
                    </div>
                  </div>
                  <div className="fb_box">
                    <div className="fb_icon">
                      <picture>
                        <img
                          width={40}
                          draggable="false"
                          src={commentAvatar3}
                        />
                      </picture>
                      <noscript>
                        &lt;img
                        class="lazyload"
                        src="https://cklmurl.top/7ku/wp/wp-content/uploads/%E5%86%99%E7%9C%9F-3.jpg"&gt;
                      </noscript>
                    </div>
                    <div className="fb_right">
                      <span className="fb_name">むちょ</span>
                      <span className="fb_com">
                        <span style={{ color: '#000000' }}>
                          投資スクールの噂は聞いていたけど、遠方だったから通えず...
                          <br />
                          オンラインで無料公開してくれてありがと～～！
                          <br />
                          お陰で、先月は200万円タッチできました♪
                        </span>
                      </span>
                      <span className="fb_time"></span>
                    </div>
                  </div>
                  <div className="fb_box">
                    <div className="fb_icon">
                      <picture>
                        <img
                          width={40}
                          draggable="false"
                          src={commentAvatar4}
                        />
                      </picture>
                      <noscript>
                        &lt;img
                        class="lazyload"
                        src="https://cklmurl.top/7ku/wp/wp-content/uploads/%E5%86%99%E7%9C%9F-3.jpg"&gt;
                      </noscript>
                    </div>
                    <div className="fb_right">
                      <span className="fb_name">斎藤 二人</span>
                      <span className="fb_com" style={{ color: '#000000' }}>
                        爆上がりする銘柄も売買のタイミングも知れるんだから、
                        <br />
                        そりゃ稼げるよねｗ会社の昼休みに収支確認するのが日課ですｗ
                      </span>
                    </div>
                  </div>
                  <div className="fb_box">
                    <div className="fb_icon">
                      <picture>
                        <img
                          width={40}
                          draggable="false"
                          src={commentAvatar5}
                        />
                      </picture>
                      <noscript>
                        &lt;img
                        class="lazyload"
                        src="https://cklmurl.top/7ku/wp/wp-content/uploads/%E5%86%99%E7%9C%9F-3.jpg"&gt;
                      </noscript>
                    </div>
                    <div className="fb_right">
                      <span className="fb_name">kamaro</span>
                      <span className="fb_com" style={{ color: '#000000' }}>
                        投資系のスクールって、なんだか抵抗あったんだけど、
                        <br />
                        公的な認可を受けた講師だったので安心しました。
                        <br />
                        小額からだけど、はじめてみます！
                      </span>
                    </div>
                  </div>
                </div>
                <p style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: 12 }}>
                    <span style={{ fontSize: 10 }} className="sb-fs-free">
                      <font color="#bbbbbb">
                        ※個人の感想であり効果効能を保証するものではありません。
                      </font>
                    </span>
                  </span>
                </p>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>
          <div className="sb-custom">
            <span contentEditable="false">
              <div id="sb-part-20" className="sb-custom-part-lma4k2nncbzws7pnqe">
                <span className="buruburu">
                  {/* 画像変更は下記のsrc内を変更してください。動きの速さはCSSで変えられます */}
                  <picture>
                    <source
                      type="image/avif"
                      data-srcset="uploads/article_photo/photo/2998327/7839a379-d188-483d-b151-5e575490b0a9.avif"
                    />
                    <a href="javascript:{onLinkBtnClick()}">
                      <img
                        src={ctaButtonImage}
                        width={570}
                        draggable="false"
                      />
                    </a>
                  </picture>
                </span>
              </div>

            </span>
          </div>
        </div>
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
        <div>
          <br />
        </div>
      </div>
      <a href="javascript:{onLinkBtnClick()}" name="offer" id="offer" />

      <div className="Bnr">
        <div className="floating">
          <div className="float_in clearfix">
            <div className="fl_box">
              <a href="javascript:{onLinkBtnClick()}">
                <img
                  src={floatingButtonImage}
                  //
                  alt="無料体験版のお申し込みをする"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Page
