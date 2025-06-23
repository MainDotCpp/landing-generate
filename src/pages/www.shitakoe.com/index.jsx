import { redirect } from '@/utils/redicrect'
import footerLogo from './wp/wp-content/themes/opinion_tcd018-6-child/images/footer-logo01.png'
import shitakoeHeaderLogo from './wp/wp-content/themes/opinion_tcd018-6-child/images/shitakoe_header_logo.png'
import img1 from './wp/wp-content/uploads/2025/03/01-DSC_5697-2.jpg'
import img2 from './wp/wp-content/uploads/2025/03/02-DSC_5502-2.jpg'
import img3 from './wp/wp-content/uploads/2025/03/03-DSC_5702-2.jpg'
import img4 from './wp/wp-content/uploads/2025/03/04-DSC_5530-2.jpg'
import img5 from './wp/wp-content/uploads/2025/03/05-DSC_5572-2.jpg'
import img6 from './wp/wp-content/uploads/2025/03/06-DSC_5564-2.jpg'
import img7 from './wp/wp-content/uploads/2025/03/07-DSC_5583-2.jpg'
import img8 from './wp/wp-content/uploads/2025/03/08-DSC_5551-2.jpg'
import img9 from './wp/wp-content/uploads/2025/03/09-DSC_5669-2.jpg'

export const config = {
  title: 'HKCM',
  template: 'src/pages/www.shitakoe.com/index.html',
}

function RedirectButton() {
  const lineUrl = 'https://line.me/R/ti/p/@238cbjox?oat_content=url'

  const buttonStyle = {
    display: 'block',
    width: '90%',
    maxWidth: '600px',
    margin: '30px auto',
    padding: '20px',
    backgroundColor: '#06C755',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    lineHeight: '1.5',
  }

  return (
    <div style={buttonStyle} onClick={redirect}>
      ▶急騰株情報をLINEで受け取る
    </div>
  )
}

export default () => {
  return (
    <>
      <header data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
        <div
          className="header-inner"
          data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
        >
          <h1
            className="logo"
            data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
          >
            <a
              href="./"
              data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
            >
              <img
                src={shitakoeHeaderLogo}
                alt="shitakoe logo"
                data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
              />
            </a>
          </h1>
        </div>
      </header>
      <div
        id="contents"
        data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
      >
        <div
          style={{ textAlign: 'center' }}
          data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
        >
          <div
            style={{ display: 'inline-block', textAlign: 'left' }}
            data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
          >
            <div
              id="main_col"
              data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
            >
              <ul
                id="bread_crumb"
                className="clearfix"
                itemScope=""
                data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
              >
                <li
                  itemProp="itemListElement"
                  itemScope=""

                  className="home"
                  data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                >
                  <a
                    itemProp="item"
                    href="./"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <span
                      itemProp="name"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    >
                      Home
                    </span>
                  </a>
                  <meta itemProp="position" content={1} />
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope=""

                  data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                >
                  <a
                    itemProp="item"
                    href="./category/local/"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <span
                      itemProp="name"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    >
                      イベント
                    </span>
                  </a>
                  <meta itemProp="position" content={2} />
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope=""

                  className="last"
                  data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                >
                  <span
                    itemProp="name"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    ソフトバンク「桐谷先生の株青空教室」取材レポート投資初心者の本田望結に桐谷さんが株式投資スタートのコツを伝授
                  </span>
                  <meta itemProp="position" content={3} />
                </li>
              </ul>
              <div
                id="left_col"
                data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
              >
                <div
                  id="single_title"
                  data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                >
                  <h2
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    data-immersive-translate-paragraph={1}
                  >
                    ソフトバンク「桐谷先生の株青空教室」取材レポート投資初心者の本田望結に桐谷さんが株式投資スタートのコツを伝授
                  </h2>
                </div>
                <RedirectButton />
                <div
                  className="post clearfix"
                  data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                >
                  <div
                    className="post_image"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      width={1000}
                      height={667}
                      src={img1}
                      className="attachment-large size-large wp-post-image"
                      alt=""
                      decoding="async"
                      fetchpriority="high"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </div>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    個人株主の拡大に力を入れるソフトバンク株式会社が、３月17日に報道関係者向けイベント「桐谷先生の株青空教室～この春、投資迷子を卒業！～」を東京・渋谷区で開催。「優待投資家の桐谷さん」として有名な将棋棋士の桐谷広人と俳優の本田望結をゲストに招き、本田のような投資初心者でも勇気を持って株式投資の第一歩を踏み出せるコツが桐谷より伝授された。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    {' '}
                  </p>
                  <h3
                    className="wp-block-heading"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    高まる投資熱の裏側で"投資迷子"が増加中!?
                  </h3>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    一定額の投資における売却益が非課税になる新NISAの開始で広い世代に注目が集まっている株式投資。そんな中、同社が20代～30代を対象に行ったアンケートによると、若い世代の約8割が投資先に迷う"投資迷子"になっているという。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img2}
                      alt=""
                      className="wp-image-21623"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    それを受けて企画されたこの日のイベントでは、主催者を代表してソフトバンク株式会社総務本部副本部長の吉岡紋子氏が初めに登壇。「今回のイベントは株式投資にご興味をお持ちの皆様に向けて、特別な学びと交流の場を提供することを目的としています。特に若い世代の方々に投資の第一歩としていただく機会になればと思っております」と挨拶した同氏は、新設された株主優待や配当の面で投資家からの人気が高く、昨年9月に株主数100万人を突破した同社の個人株主への取り組みを紹介した。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8" />
                  <h3
                    className="wp-block-heading"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    "投資迷子"の本田望結に桐谷さんが株式投資のコツを説く
                  </h3>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    続いてゲストの二人がステージに。今年成人式を終えたばかりで、この日は"生徒役"を演じる本田望結は高校生の制服姿で登場。「やっぱり着慣れていますね」という司会者の声に、本田は「実は現役時代に撮影で着たのは一回あるかないかくらいで」と意外な答えを返しつつ、「でも20歳になってから着るのは4回目で、やっぱり着るたびに落ち着きますね」と笑顔を見せた。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img3}
                      alt=""
                      className="wp-image-21624"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    一方、将棋棋士でありながら「優待投資家の桐谷さん」として一躍ブレイクした桐谷広人は、ファンにはおなじみの荷物パンパンなリュック姿でステージに。「とにかく優待券を使い切らなければならないので、いつもリュックに入れてあちこち行っています」と持ち前のクセつよキャラを早速見せると、会場にささやかな笑いを運んだ。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img4}
                      alt=""
                      className="wp-image-21625"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    その後は「新NISAが始まって年上の先輩だけじゃなく同世代の間でも株式投資の話題が増え、自分でも気になっているけど誰に教えてもらったらいいかわからない」という"投資迷子"の本田のために、"桐谷先生"から株式投資を始めるための3つのコツが伝授された。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8" />
                  <h4
                    className="wp-block-heading"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    ①少額で買える株から始める
                  </h4>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    桐谷が最初にあげたポイントは「少額で買える株から始めること」。それに対して生徒役の本田から「どのくらいから始めるのがいいですか？」という質問が飛ぶと、続けて次のようなアドバイスが。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img5}
                      alt=""
                      className="wp-image-21626"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    「東証のお達しもあって、少し前までは5万円から50万円くらいの範囲に収まっていた株の購入価格ですが、最近は下の方はいくらでも安くしていいということになりました。なので、まずは2、3万円くらいの予算で投資をしてみてはどうでしょう。2万円くらいの投資なら仮に値下がりしても大きな損になりませんし、ネット系の証券会社であれば手数料なしで売買できるところもありますから、まずは小さく始めてみるのがいいと思います」
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img6}
                      alt=""
                      className="wp-image-21627"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    さらに「株は上がったり下がったりして評価益や評価損が出るので、そういうのを経験しながら少しずつ値段の高いものに移っていくのがいいのでは」と付け加えた桐谷の教えに、本田は「株式投資ってハードルが高いと思っていたけど、これを聞くとちょっとやってみようかなって気になりますね」と関心の表情を浮かべる。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8" />
                  <h4
                    className="wp-block-heading"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    ②配当利回り4％前後の高配当を狙おう
                  </h4>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    次に桐谷があげたポイントは「配当利回り4％前後の高配当を狙うこと」。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    ここで桐谷は、40年近く前に株を始めた頃、しばらくは値上がり株狙いの信用取引（証券会社から金や株式を借りて売買を行う取引）をしていたが、バブル崩壊やリーマンショックで大損を出したという自らの失敗例を持ち出しながら「値上がり株を狙うのは、狩りをするようなものなので危険」と指摘。その上で利益の一部を株主に分配する「配当金」のメリットを紹介し、「配当金の高い株であれば、値上がりしなくても配当金をもらうだけで少しずつ資産が増えていきます。4％前後の利回り（投資元本に対する収益の割合）があれば高配当の株だと言われています」と話す。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img7}
                      alt=""
                      className="wp-image-21628"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    さらに「バブルの頃は配当金を出す企業は少なかったのですが、今は3900社ある上場企業のうち700社くらいが4％前後の配当を出しています」と解説すると、黙々と授業を聴いていた本田からは「配当利回りのリターンについて、もう少し詳しく教えてください」という熱心な質問が。桐谷がさらに嚙み砕いた解説を加えると、「安心材料があるということが株を選ぶ時の一押しになると思うので、こういう話が聞けて良かったです」と、株式投資の知識が少し上がった様子を見せた。
                  </p>
                  <RedirectButton />
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8" />
                  <h4
                    className="wp-block-heading"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    ③株主優待銘柄を購入する
                  </h4>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    3つ目のポイントは、桐谷先生の十八番である株主優待のお話。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    ここでも桐谷は先ほどの信用取引で失敗した話を振り返りながら、「大損した時に株主優待がある株を分散投資で400社くらい持っていたので、お金は無くなったけど、優待で届く食事券や地方の名産品で何とか乗り切ることができました。それからは株主優待がある株をたくさん買って、優待を使って人生を楽しむという風に切り替えたら、株で悩むこともなくなりました」としみじみ回想。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img8}
                      alt=""
                      className="wp-image-21629"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    それに対して「桐谷先生から優待という言葉が出るとしっくりきますね」と本田が話すと、桐谷から「上場企業のうち約4割の1500社近くが株主優待をやっています」という追加の解説が。一方で司会者からは、年2回ある基準日より1年間株を保有するとPayPayマネーライト1000円分を受け取ることができるソフトバンクの株主優待制度の紹介もあった。
                  </p>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8" />
                  <h3
                    className="wp-block-heading"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    渋谷に投資スタートのコツが広まる一日に
                  </h3>
                  <p data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8">
                    3つのポイントの伝授を受けて本田は、「今知ったことを自分の中だけに留めておくのではなくて、これを家族や友達、それに同世代のみんなの中で話すことに意味があると感じました」と生徒として満点の感想。一方で桐谷は「まずは2万円くらいで買ってみて、配当と優待をいただきながら値上がりを待つというのが一番いい投資家だと思います」とこの日の教えを改めて確認した。
                  </p>
                  <figure
                    className="wp-block-image size-full"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <img
                      loading="lazy"
                      decoding="async"
                      width={1000}
                      height={667}
                      src={img9}
                      alt=""
                      className="wp-image-21630"

                      sizes="(max-width: 1000px) 100vw, 1000px"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    />
                  </figure>
                  <p
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    data-immersive-translate-paragraph={1}
                  >
                    ３つのポイント以外にも、「自己資金で投資する」「分散投資が大切」など、投資初心者が気になるさまざまな教えが詰まっていたこの日の授業。最後には"卒業証書"として桐谷から本田に「桐谷流投資術 虎の巻」が贈られて全体を締めくくった。
                  </p>
                  <p
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    data-immersive-translate-paragraph={1}
                  >
                    なお、この日の午後からは、本教室の第二部として桐谷先生お墨付きの"お金のスペシャリスト"たちが投資迷子たちのお悩みに答える一般向けイベントをSHIBUYA109渋谷店で開催。本イベントの参加者にも桐谷先生の虎の巻がプレゼントされるなど、渋谷の若者たちに投資スタートのコツが広まる一日となった。
                  </p>
                  <RedirectButton />
                  <div
                    id="single_banner2"
                    data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                  >
                    <div
                      id="ad2"
                      data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
                    >
                    </div>
                  </div>
                </div>
                {/* END .post */}

              </div>
              {/* END #left_col */}
            </div>
            {/* END #main_col */}
          </div>
        </div>
        <div
          id="side_col"
          data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
        >
        </div>
      </div>
      <div
        className=""
        style={{ clear: 'both' }}
        data-immersive-translate-walked="ae8feb5f-a966-4be6-be35-32b05b5736b8"
      />
      <footer className="f-orignal" default-translate="no">
        <div className="footer-org-box">
          <div className="footer-lower-inner">
            <div className="f-logo">
              <img
                src={footerLogo}
                alt=""
              />
            </div>
            <p>
              「舌肥」は、舌が肥えた皆様にも満足いただける優良な情報を発信いたします。
              <br />
              またグルメに限らず「目」や「耳」など五感にグッとくるようなカッコイイ、カワイイ場所やアイテム情報など積極的にお届けいたします。
            </p>
          </div>
          <div className="footer-org-copy">
            <p>Copyright © 舌肥 Shitakoe All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
