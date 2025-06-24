import { useState } from 'react'
import { redirect } from '@/utils/redicrect'
import a01 from './static/images/A_01.png'
import a02 from './static/images/A_02.png'
import a03 from './static/images/A_03.png'
import a04 from './static/images/A_04.png'
import a05 from './static/images/A_05.png'
import a06 from './static/images/A_06.png'
import a07 from './static/images/A_07.png'
import a08 from './static/images/A_08.png'
import a09 from './static/images/A_09.png'
import a10 from './static/images/A_10.png'
import a11 from './static/images/A_11.png'
import a12 from './static/images/A_12.png'
import a13 from './static/images/A_13.png'
import a14 from './static/images/A_14.png'
import a15 from './static/images/A_15.png'
import a16 from './static/images/A_16.png'
import a17 from './static/images/A_17.png'
import a18 from './static/images/A_18.png'
import a19 from './static/images/A_19.png'
import stocksPng from './static/stocks.png'

export const config = {
  title: '銘柄相談スパッと回答くん',
  template: 'src/templates/銘柄相談スパッと回答くん/index.html',
}
export default () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const css = `
    .popup {
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .popup-content {
      background-color: #fff;
      padding: 25px;
      border-radius: 15px;
      width: 90%;
      max-width: 450px;
      position: relative;
      animation: slide-down 0.3s ease-out;
      text-align: left;
    }
    @keyframes slide-down {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .close-popup {
      color: #aaa;
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
    }
    .close-popup:hover,
    .close-popup:focus {
      color: #333;
    }
    .popup-buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    }
    #confirm-button, #cancel-button {
      padding: 12px 20px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      text-decoration: none;
      color: white;
      text-align: center;
      transition: background-color 0.2s;
    }
    #confirm-button {
      background-color: #00B900;
    }
    #confirm-button:hover {
      background-color: #009900;
    }
    #cancel-button {
      background-color: #f44336;
    }
    #cancel-button:hover {
      background-color: #d32f2f;
    }
    .floating-button-container {
      position: fixed;
      bottom: calc(30px + env(safe-area-inset-bottom));
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      z-index: 999;
      pointer-events: none;
    }
    .floating-button {
      pointer-events: auto;
      background: linear-gradient(45deg, #007BFF, #00D2FF);
      color: white;
      padding: 16px 24px;
      border-radius: 50px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      animation: pulse-light 2.5s infinite;
    }
    .floating-button:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
    }
    .btn-line {
      /* Styling is now inherited from parent */
    }
    @keyframes pulse-light {
        0% {
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
            transform: scale(1);
        }
        50% {
            box-shadow: 0 6px 20px rgba(0, 210, 255, 0.5);
            transform: scale(1.02);
        }
        100% {
            box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
            transform: scale(1);
        }
    }
  `

  return (
    <>
      <style>{css}</style>
      <div style={{ maxWidth: 768, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
        {isPopupOpen && (
          <div id="popup1" className="popup">
            <div className="popup-content">
              <span className="close-popup" onClick={() => setIsPopupOpen(false)}>
                ×
              </span>
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
              <div className="popup-buttons">
                <a onClick={redirect} id="confirm-button">
                  友だち追加
                </a>
                <button id="cancel-button" onClick={() => setIsPopupOpen(false)}>
                  放棄
                </button>
              </div>
            </div>
          </div>
        )}
        <img src={a01} alt="" onClick={() => setIsPopupOpen(true)} />
        <img src={a02} alt="" />
        <img src={a03} alt="" />
        <img src={a04} alt="" />
        <img src={a05} alt="" onClick={() => setIsPopupOpen(true)} />
        <img src={a06} alt="" />
        <img src={a07} alt="" />
        <img src={a08} alt="" />
        <img src={a09} alt="" />
        <img src={a10} alt="" />
        <img src={a11} alt="" />
        <img src={a12} alt="" />
        <img src={a13} alt="" />
        <img src={a14} alt="" />
        <img src={a15} alt="" />
        <img src={a16} alt="" onClick={() => setIsPopupOpen(true)} />
        <img src={a17} alt="" />
        <img src={a18} alt="" onClick={() => setIsPopupOpen(true)} />
        <img src={a19} alt="" />
        <div className="floating-button-container">
          <div className="floating-button" onClick={() => setIsPopupOpen(true)}>
            <div className="btn-line">▶急騰株情報をLINEで受け取る</div>
          </div>
        </div>
      </div>
    </>
  )

}
