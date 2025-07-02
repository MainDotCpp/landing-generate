import { configResponsive, useResponsive } from 'ahooks'
import React from 'react'
import { redirect } from '@/utils/redicrect'
import a1Png from './static/A1.png'
import a2Png from './static/A2.png'
import a3Png from './static/A3.png'
import a4Png from './static/A4.png'
import aidd4Png from './static/AIDD4.png'
import arrow01Png from './static/arrow01.png'
import btn1Png from './static/BTN1.png'
import contactImg01Png from './static/contact_img01.png'
import contactImg02Png from './static/contact_img02.png'
import contactImg03Png from './static/contact_img03.png'
import footerLogoPng from './static/footer-logo.png'
import headerImgPng from './static/header-img.png'
import headerLogoPng from './static/header-logo.jpg'
import icStep1Png from './static/ic_step1.png'
import icStep2Png from './static/ic_step2.png'
import icStep3Png from './static/ic_step3.png'
import m0Png from './static/M0.png'
import m2Png from './static/M2.png'
import m4Png from './static/M4.png'
import m6Png from './static/M6.png'
import m7Png from './static/M7.png'
import m8Png from './static/M8.png'
import m9Png from './static/M9.png'
import mvBottomImg01Png from './static/mv_bottom_img01.png'
import r1Png from './static/R1.png'
import r2Png from './static/R2.png'
import r3Png from './static/R3.png'
import r4Png from './static/R4.png'
import r5Png from './static/R5.png'
import r6Png from './static/R6.png'
// 导入图片资源
import stocksPng from './static/stocks.png'
// 导入静态资源
import './static/css2.css'
import './static/style.min.css'
import './static/common.css'
import './static/main.css'

interface PageProps {
  personName?: string
  a5Png?: string
  mvBgPcPng?: string
  about02Img01Png?: string
  // 人物介绍相关
  personTitle?: string
  personDescription?: string
  analystInfo?: string
  companyIntro?: string
  howToUseAnswer?: string
}

configResponsive({
  mobile: 0,
  pc: 800,
})

function Page({
  personName = '高橋洋一',
  a5Png,
  mvBgPcPng,
  about02Img01Png,
  // 人物介绍相关
  personTitle = '株マイスターについて',
  personDescription = '株マイスターは銘柄相談件数１０万件以上を誇る老舗投資顧問',
  analystInfo = 'より具体的なご質問については、LINE上でお送りいただければ、弊社アナリストがご回答させていただきます。',
  companyIntro = '【銘柄相談スパッと回答くん】では銘柄の概要や市場動向だけでなく、これまでの知見を元に株価分析を含めた売買のアドバイスまでさせていただきます。',
  howToUseAnswer = 'LINEで友だち追加していただき、「2024年急騰株」とメッセージを送っていただければ、無料でご利用いただけます！',
}: PageProps) {
  const responsive = useResponsive()
  return (
    <>
      <div id="popup1" className="popup">
        <div className="popup-content">
          <span className="close-popup">×</span>
          <p>
            <br />
          </p>
          <p
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 'larger' }}
          >
            LINEの友達を追加で即無料入手
          </p>
          <img
            src={stocksPng}
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
            <a onClick={redirect} id="confirm-button">友だち追加</a>
            <button id="cancel-button" style={{ float: 'right' }}>
              放棄
            </button>
          </div>
        </div>
      </div>
      <header className="l-header">
        <div className="l-header--pc">
          <div className="l-header__inner--pc">
            <div className="l-header__logo-wrapper">
              <img
                src={headerLogoPng}
                alt="初心者から上級者まで株マイスター"
              />
            </div>
            <div className="l-header__company-info">
              <p>運営元：株式会社SQIジャパン (金融商品取引業者)</p>
              <p>登録番号：関東財務局長（金商）第850号</p>
              <p>
                加入協会：一般社団法人 日本投資顧問業協会 会員番号：第012-02468号
              </p>
            </div>
          </div>
        </div>
        <img
          className="l-header__img"
          src={headerImgPng}
          alt="初心者から上級者まで株マイスター"
        />
      </header>
      <div>
        <main>
          <section
            id="mv"
          >
            <div className="h1_con">
              <h1>
                <picture>
                  <source srcSet={m0Png} media="(min-width: 811px)" />
                  <img
                    decoding="async"
                    src={m0Png}
                    alt="老舗投資顧問「株マイスター」の新サービス 銘柄相談スパッと回答くんで株のお悩みを解決！ 累計会員数20万件以上 | サイト運営期間14年 | 銘柄相談件数10万件以上"
                    width={1274}
                    height={1223}
                  />
                </picture>
                <img src={a5Png} alt="" />
              </h1>
            </div>
          </section>
          <section id="step" style={{ padding: '0' }}>
            <h2>
              {personName}
              <br />
              保有株一発診断までの
              <br />
              簡単
              <span>3</span>
              ステップ
            </h2>

            <a href="javascript:{gofun()}" rel="noopener">
              <img
                decoding="async"
                src={btn1Png}
                alt="無料診断はコチラ"
                width={870}
                height={217}
              />
            </a>
            <div className="step_flex01">
              <div className="step_box01">
                <h3>
                  <img decoding="async" src={icStep1Png} alt="" />
                </h3>
                <p>
                  スパッと回答くんの
                  <br />
                  <span className="txt_g">LINE友だち追加</span>
                </p>
              </div>
              <picture>
                <img decoding="async" src={arrow01Png} alt="" />
              </picture>
              <div className="step_box01">
                <h3>
                  <img decoding="async" src={icStep2Png} alt="" />
                </h3>
                <p>
                  気になる銘柄の
                  <br />
                  <span className="txt_g">LINEに銘柄配信</span>
                </p>
              </div>
              <picture>
                <img decoding="async" src={arrow01Png} alt="" />
              </picture>
              <div className="step_box01">
                <h3>
                  <img decoding="async" src={icStep3Png} alt="" />
                </h3>
                <p>
                  銘柄の詳細や売買に
                  <br className="pcOnly" />
                  関するアドバイスが
                  <br />
                  <span className="txt_g">銘柄の売買</span>
                </p>
              </div>
            </div>
          </section>
          <section id="mv_bottom">
            <h2>
              銘柄の選び方で
              <br className="pcOnly" />
              こんな
              <br className="spOnly" />
              お悩みありませんか？
            </h2>
            <picture>
              <img
                decoding="async"
                src={mvBottomImg01Png}
                alt=""
                width={691}
                height={582}
              />
            </picture>
            <picture>
              <img
                loading="lazy"
                decoding="async"
                src={a2Png}
                alt=""
                width={1385}
                height={770}
              />
            </picture>
          </section>
          <section id="merit">
            <h2>
              最新AI抽出銘柄が、
              <br className="spOnly" />
              次々に短期上昇！
            </h2>
            <picture>
              <img
                loading="lazy"
                decoding="async"
                src={m2Png}
                alt=""
                width={690}
                height={999}
              />
            </picture>
            <picture>
              <img
                loading="lazy"
                decoding="async"
                src={m4Png}
                alt=""
                width={690}
                height={999}
              />
            </picture>
            <picture>
              <img
                loading="lazy"
                decoding="async"
                src={m6Png}
                alt=""
                width={690}
                height={999}
              />
            </picture>
            <a href="javascript:{gofun()}" rel="noopener">
              <img
                decoding="async"
                src={btn1Png}
                alt="無料診断はコチラ"
                width={870}
                height={217}
              />
            </a>
          </section>
          <section id="contact">
            <div className="contact_flex">
              <img
                loading="lazy"
                decoding="async"
                src={contactImg01Png}
                alt=""
                className="pcOnly"
                width={105}
                height={330}
              />
              <img
                loading="lazy"
                decoding="async"
                src={a3Png}
                alt=""
                className="pcOnly"
                width={99}
                height={316}
              />
              <img
                loading="lazy"
                decoding="async"
                src={a4Png}
                alt=""
                className="pcOnly"
                width={99}
                height={316}
              />
            </div>
            <img
              loading="lazy"
              decoding="async"
              src={aidd4Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
            <img
              loading="lazy"
              decoding="async"
              src={a3Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
            <img
              loading="lazy"
              decoding="async"
              src={a4Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
          </section>
          <section id="about">
            <img
              loading="lazy"
              decoding="async"
              src={m7Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
            <img
              loading="lazy"
              decoding="async"
              src={m8Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
            <img
              loading="lazy"
              decoding="async"
              src={m9Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
          </section>
          <section id="customer">
            <div>
              <h2>お客様からの声</h2>
              <picture>
                <img
                  loading="lazy"
                  decoding="async"
                  src={r1Png}
                  alt=""
                  width={690}
                  height={999}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={r2Png}
                  alt=""
                  width={690}
                  height={482}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={r3Png}
                  alt=""
                  width={690}
                  height={482}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={r4Png}
                  alt=""
                  width={690}
                  height={482}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={r5Png}
                  alt=""
                  width={690}
                  height={482}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src={r6Png}
                  alt=""
                  width={690}
                  height={482}
                />
              </picture>
            </div>
          </section>
          <section id="contact02">
            <div className="contact02_flex">
              <img
                loading="lazy"
                decoding="async"
                src={contactImg01Png}
                alt=""
                className="pcOnly"
                width={105}
                height={330}
              />
              <div>
                <p>
                  <span>
                    <span>10</span>
                    秒で無料診断可能！
                  </span>
                  <br />
                  銘柄相談してみる
                </p>
                <a href="javascript:{gofun()}" rel="noopener">
                  <picture>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={btn1Png}
                      alt="無料診断はコチラ"
                      width={560}
                      height={108}
                    />
                  </picture>
                </a>
                <ul>
                  <li>
                    ※LINEを追加して
                    「おすすめ」と送信すると、知りたいまたは保有している株の分析情報を無料で取得できます。
                  </li>
                  <li>
                    ※本サービスは 完全無料 で行っておりますので
                    安心してご利用ください。
                  </li>
                </ul>
              </div>
              <img
                loading="lazy"
                decoding="async"
                src={contactImg02Png}
                alt=""
                className="pcOnly"
                width={99}
                height={316}
              />
            </div>
            <img
              loading="lazy"
              decoding="async"
              src={contactImg03Png}
              alt=""
              className="spOnly"
              width={277}
              height={330}
            />
          </section>
          <section id="about02">
            <h2>{personTitle}</h2>
            <div className="about02_flex">
              <p>
                <span>
                  {personDescription}
                </span>
                ですので、
                <br className="spOnly" />
                {companyIntro}
                <br />
                <br className="pcOnly" />
                また、
                {analystInfo}
              </p>
              <picture>
                <img
                  loading="lazy"
                  decoding="async"
                  src={about02Img01Png}
                  alt=""
                  width={653}
                  height={571}
                />
              </picture>
            </div>
          </section>
          <section id="question">
            <h2>
              これで解決！
              <br />
              当ページをご覧になった方からの
              <br />
              <span className="or">よくあるご質問</span>
            </h2>
            <div className="ac">
              <div className="option">
                <input type="checkbox" id="toggle1" className="toggle" />
                <label className="ac_title" htmlFor="toggle1">
                  <span className="q_ttl_flex">
                    <span>
                      <span className="txt_q">Q.&nbsp;</span>
                      サービス利用の手続きはどのようにすればいいですか？
                    </span>
                  </span>
                </label>
                <div className="ac_content">
                  <ul>
                    <li>
                      <span className="txt_a">A.&nbsp;</span>
                      {' '}
                      {howToUseAnswer}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ac">
              <div className="option">
                <input type="checkbox" id="toggle2" className="toggle" />
                <label className="ac_title" htmlFor="toggle2">
                  <span className="q_ttl_flex">
                    <span>
                      <span className="txt_q">Q.&nbsp;</span>
                      なぜ無料で体験できるのですか？
                    </span>
                  </span>
                </label>
                <div className="ac_content">
                  <ul>
                    <li>
                      <span className="txt_a">A.&nbsp;</span>
                      当社は、少しでもお客様に利益を出していただき、AIを活用した資産運用を正しく行っていただく為に、無料版を提供しております。
                      まずはAIの実力をご理解いただくために、お気軽に株投資を行っていただければと思っております。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ac">
              <div className="option">
                <input type="checkbox" id="toggle3" className="toggle" />
                <label className="ac_title" htmlFor="toggle3">
                  <span className="q_ttl_flex">
                    <span>
                      <span className="txt_q">Q.&nbsp;</span>
                      未経験でも大丈夫でしょうか？
                    </span>
                  </span>
                </label>
                <div className="ac_content">
                  <ul>
                    <li>
                      <span className="txt_a">A.&nbsp;</span>
                      ご安心ください！
                      当社では専任スタッフが丁寧に分かりやすく取引所のご利用方法もお教えしております。
                      <br />
                      メールまたはお電話にて、いつでもお気軽にお問い合わせが可能なサポートセンターも完備しており、アフターフォローも万全の体制となっておりますので､ご安心ください。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ac">
              <div className="option">
                <input type="checkbox" id="toggle4" className="toggle" />
                <label className="ac_title" htmlFor="toggle4">
                  <span className="q_ttl_flex">
                    <span>
                      <span className="txt_q">Q.&nbsp;</span>
                      株の売買の代行はしていますか？
                    </span>
                  </span>
                </label>
                <div className="ac_content">
                  <ul>
                    <li>
                      <span className="txt_a">A.&nbsp;</span>
                      実際の売買については、お客様がお持ちの証券口座にて、お客様自身で取引を行っていただきます。証券口座をお持ちでない方は、大変お手数ですが証券口座を開設していただくように、ご準備をお願いしております。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ac">
              <div className="option">
                <input type="checkbox" id="toggle5" className="toggle" />
                <label className="ac_title" htmlFor="toggle5">
                  <span className="q_ttl_flex">
                    <span>
                      <span className="txt_q">Q.&nbsp;</span>
                      資金はどのくらい必要でしょうか？
                    </span>
                  </span>
                </label>
                <div className="ac_content">
                  <ul>
                    <li>
                      <span className="txt_a">A.&nbsp;</span>
                      お客様のご状況によって異なります。
                      数万円からの少額でも十分に利益を得られますが、銘柄の株価によっては購入できない場合もございます。自己資金と相談しながら無理のない範囲で推奨した銘柄の売買をお試しください。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="ac">
              <div className="option">
                <input type="checkbox" id="toggle6" className="toggle" />
                <label className="ac_title" htmlFor="toggle6">
                  <span className="q_ttl_flex">
                    <span>
                      <span className="txt_q">Q.&nbsp;</span>
                      推奨銘柄で利益が発生した場合、成功報酬,その他に支払うべき費用はありますか？
                    </span>
                  </span>
                </label>
                <div className="ac_content">
                  <ul>
                    <li>
                      <span className="txt_a">A.&nbsp;</span>
                      当社のサービスでは、原則としてお客様から成功報酬等をいただくことは一切ございません。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section id="contact03">
            <div className="contact02_flex">
              <img
                loading="lazy"
                decoding="async"
                src={contactImg01Png}
                alt=""
                className="pcOnly"
                width={105}
                height={330}
              />
              <div>
                <p>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={a1Png}
                    alt=""
                    className="spOnly"
                    width={277}
                    height={330}
                  />
                </p>
                <a href="javascript:{gofun()}" rel="noopener">
                  <picture>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={btn1Png}
                      alt="無料診断はコチラ"
                      width={560}
                      height={108}
                    />
                  </picture>
                </a>
                <p className="k_sp" style={{ fontWeight: 'bold', fontSize: 18 }}>
                  ボタンをクリックするとLINE友だち追加画面に進みます。
                  {' '}
                  <br />
                  本サービスは
                  <span style={{ color: '#fff300' }}> 完全無料 </span>
                  で行っておりますのでご安心してご利用ください。
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      {/* 固定在底部的按钮 */}
      <div className="floating-button">
        <a href="javascript:{gofun()}" className="btn-line">
          ▶急騰株情報をLINEで受け取る
        </a>
      </div>
      <div id="comment_area"></div>
      <footer className="l-footer">
        <div className="l-footer__content">
          <nav className="l-footer__nav">
            <img
              className="l-footer__logo"
              src={footerLogoPng}
              alt="SQI japan Superior Quality Investment"
            />
            <ul className="l-footer__ul">
              <li className="l-footer__li">
                {' '}
                <a href="https://kabumai.com/visitor/0sp00sb000/">ホーム</a>
              </li>
              <li className="l-footer__li">
                <a href="https://kabumai.com/visitor/0sp00sb000/service">
                  提供サービス一覧
                </a>
              </li>
              <li className="l-footer__li">
                <a href="https://kabumai.com/visitor/0sp00sb000/article/terms">
                  利用規約
                </a>
              </li>
              <li className="l-footer__li">
                <a href="https://kabumai.com/visitor/0sp00sb000/article/privacy">
                  個人情報保護方針
                </a>
              </li>
              <li className="l-footer__li">
                <a href="https://kabumai.com/visitor/0sp00sb000/article/fiduciary">
                  お客様本位の業務運営に関する基本方針
                </a>
              </li>
              <li className="l-footer__li">
                <a href="https://kabumai.com/visitor/0sp00sb000/contract/">
                  契約締結前交付書面
                </a>
              </li>
              <li className="l-footer__li">
                <a href="https://kabumai.com/visitor/0sp00sb000/article/outline">
                  特定商取引法に関する表記
                </a>
              </li>
            </ul>
          </nav>
          <div className="l-footer__company-info">
            <p className="l-footer__company-info-text">
              [金融商品取引法第３７条に基づく表示]
            </p>
            <p className="l-footer__company-info-text">
              商号：株式会社SQIジャパン（金融商品取引業者）
              {' '}
              <br className="u-br--sp-only" />
              業務内容：投資助言・代理業
            </p>
            <p className="l-footer__company-info-text">
              登録番号：関東財務局長(金商)第850号
              {' '}
              <br className="u-br--sp-only" />
              加入協会：一般社団法人 日本投資顧問業協会
              {' '}
              <br className="u-br--sp-only" />
              会員番号:第012-02468号
            </p>
            <p className="l-footer__company-info-text">
              住所：東京都千代田区丸の内2-7-2
              {' '}
              <br className="u-br--sp-only" />
              サポートデスク 電話番号：0120-850-730 ※受付時間(平日9:00～17:00)
            </p>
          </div>
          <div className="l-footer__external-links">
            <a
              className="l-footer__external-link"
              href="https://www.fsa.go.jp/index.html"

            >
              金融庁ウェブサイト
            </a>
            <a
              className="l-footer__external-link"
              href="https://www.jiaa.or.jp/"

            >
              一般社団法人 日本投資顧問業協会
              {' '}
            </a>
          </div>
          <small className="l-footer__copyright--pc">
            Copyright © 2024 株マイスター All Rights Reserved.
          </small>
          <small className="l-footer__copyright--sp">
            Copyright (c)&nbsp;SQI Japan Co.,Ltd.
            {' '}
            <br />
            All Rights Reserved.
          </small>
        </div>
      </footer>
    </>
  )
}
export default Page
