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
  a5Png,
  mvBgPcPng,
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
      <div>
        <section
          id="mv"
          style={{
            backgroundImage: responsive.pc ? `url(${mvBgPcPng})` : `url(${a5Png})`,
          }}
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
            </h1>
            <a href="javascript:{gofun()}" rel="noopener">
              <img
                decoding="async"
                src={btn1Png}
                alt="無料診断はコチラ"
                width={870}
                height={217}
              />
            </a>
          </div>
        </section>
      </div>
      <div className="floating-button">
        <a href="javascript:{gofun()}" className="btn-line">
          ▶急騰株情報をLINEで受け取る
        </a>
      </div>
    </>
  )
}
export default Page
