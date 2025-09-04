import { redirect } from "@/utils/redicrect"
import htdyImg from "./static/htdy.jpg"
import tuImg from "./static/TU.png"
import liImg from "./static/LI.png"

export const config = {
  title: '両学長 リベラルアーツ大学'
}
function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>投資ちゃんねる</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
        '\n        /* 全局样式 */\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #B3B1B1;\n            /* 背景颜色 */\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n            min-height: 100vh;\n            /* 全屏高度 */\n            box-sizing: border-box;\n        }\n\n        /* 第一张图片容器 */\n        .image-container {\n            width: 96px;\n            height: 96px;\n            overflow: hidden;\n            border-radius: 50%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin-bottom: 20px;\n            /* 图片与下一内容的间距 */\n        }\n\n        .image-container img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n\n        /* 第一段文本 */\n        .text-container {\n            text-align: center;\n            /* 容器居中 */\n            margin-bottom: 20px;\n            /* 文本与下一内容的间距 */\n            padding: 0 15px;\n            max-width: 600px;\n            /* 限制最大宽度 */\n            width: 90%;\n            /* 自适应宽度 */\n            word-wrap: break-word;\n            /* 自动换行 */\n            word-break: break-all;\n            /* 避免单词超出容器 */\n            overflow-wrap: break-word;\n            /* 确保换行 */\n        }\n\n        .text-container h1 {\n            font-size: 24px;\n            margin-bottom: 10px;\n            color: #2c2c2c;\n            font-weight: bold;\n        }\n\n        .text-container p {\n            font-size: 16px;\n            color: #2c2c2c;\n            line-height: 1.8;\n            font-weight: bold;\n            text-align: justify;\n            /* 设置文本两端对齐 */\n        }\n\n        /* 按钮样式 */\n        .button,\n        .second-button {\n            width: 90%;\n            /* 按钮宽度自适应屏幕 */\n            max-width: 600px;\n            margin-top: 20px;\n            padding: 16px;\n            font-size: 18px;\n            font-weight: bold;\n            background-color: white;\n            color: #333;\n            border: 2px solid #B3B1B1;\n            border-radius: 30px;\n            cursor: pointer;\n            text-align: center;\n            transition: background-color 0.3s, color 0.3s, border-color 0.3s;\n            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n        }\n\n        .button:hover,\n        .second-button:hover {\n            background-color: #B3B1B1;\n            color: white;\n            border-color: white;\n        }\n\n        .button:active,\n        .second-button:active {\n            background-color: #B3B1B1;\n            color: white;\n            border-color: white;\n        }\n\n        /* 第二张图片容器 */\n        .second-image-container {\n            margin-top: 30px;\n            position: relative;\n            width: 90%;\n            /* 自适应宽度 */\n            max-width: 600px;\n        }\n\n        .second-image-container img {\n            width: 100%;\n            height: auto;\n            cursor: pointer;\n            border-radius: 10px;\n        }\n\n        .second-text-overlay {\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            background-color: rgba(0, 0, 0, 0.5);\n            color: white;\n            font-size: 16px;\n            font-weight: bold;\n            text-align: left;\n            padding: 10px;\n            box-sizing: border-box;\n            border-bottom-left-radius: 10px;\n            border-bottom-right-radius: 10px;\n        }\n\n        /* 第二个按钮样式（含图标，文字居中对齐） */\n        .second-button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            /* 居中对齐图标和文字 */\n            gap: 10px;\n            /* 图标和文字之间的间距 */\n            animation: pulse 2s infinite;\n        }\n\n        .second-button img {\n            width: 50px;\n            /* 图片更大，适合小屏幕观看 */\n            height: 50px;\n            border-radius: 50%;\n            /* 圆形图片 */\n            object-fit: cover;\n        }\n\n        /* 呼吸跳动动画 */\n        @keyframes pulse {\n            0% {\n                transform: scale(1);\n            }\n\n            50% {\n                transform: scale(1.05);\n            }\n\n            100% {\n                transform: scale(1);\n            }\n        }\n\n        /* 确认弹窗样式 */\n        .modal-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.7);\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            z-index: 1000;\n        }\n\n        .modal-container {\n            background-color: white;\n            padding: 20px;\n            border-radius: 10px;\n            max-width: 90%;\n            width: 400px;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        .modal-image {\n            width: 100%;\n            max-width: 350px;\n            margin-bottom: 20px;\n            border-radius: 5px;\n        }\n\n        .modal-buttons {\n            display: flex;\n            justify-content: space-between;\n            width: 100%;\n            margin-top: 20px;\n        }\n\n        .modal-confirm-button,\
        .modal-cancel-button {\n            padding: 12px 25px;\n            border-radius: 25px;\n            font-weight: bold;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            font-size: 16px;\n            width: 48%;\n        }\n\n        .modal-confirm-button {\n            background-color: #4caf50;\n            color: white;\n            border: none;\n        }\n\n        .modal-cancel-button {\n            background-color: #f44336;\n            color: white;\n            border: none;\n        }\n\n        .modal-confirm-button:hover {\n            background-color: #45a049;\n            transform: translateY(-2px);\n        }\n\n        .modal-cancel-button:hover {\n            background-color: #d32f2f;\n            transform: translateY(-2px);\n        }\n\n        /* 自适应布局优化 */\n        @media (max-width: 768px) {\n            .text-container h1 {\n                font-size: 20px;\n            }\n\n            .text-container p {\n                font-size: 14px;\n            }\n\n            .button,\n            .second-button {\n                font-size: 16px;\n                padding: 14px;\n            }\n\n            .second-button img {\n                width: 40px;\n                height: 40px;\n            }\n\n            .modal-container {\n                width: 85%;\n                padding: 15px;\n            }\n\n            .modal-buttons {\n                flex-direction: column;\n                gap: 10px;\n            }\n\n            .modal-confirm-button,\
        .modal-cancel-button {\n                width: 100%;\n            }\n        }\n    ',
        }}
      />
      {/* 第一张图片 */}
      <div className="image-container">
        <img src={htdyImg} alt="图片" />
      </div>
      {/* 第一段文本 */}
      <div className="text-container">
        <h1>両学長 リベラルアーツ大学</h1>
        <p>
          両学長
          リベラルアーツ大学のLINEを無料で追加して、明日の急騰株を入手しましょう！LINEを追加するだけで、無料で受け取れます。さらに、グループにも参加可能！無料の投資関連書籍や、毎週10％の利益が期待される銘柄も入手できます。
        </p>
        {/* 第一个按钮 */}
        <button className="button" onClick={redirect}>
          特別な投資情報をお届けします！
        </button>
      </div>
      {/* 第二张图片 */}
      <div className="second-image-container">
        <a onClick={redirect}>
          {/* 点击打开弹窗 */}
          <img src={tuImg} alt="图片" />
        </a>
        {/* 第二段文本覆盖在图片底部 */}
        <div className="second-text-overlay">両学長 リベラルアーツ大学</div>
      </div>
      {/* 第二个按钮 */}
      <button className="second-button" onClick={redirect}>
        <img src={liImg} alt="图标" />
        LINE登録はこちらから
      </button>
    </div>
  )
}
export default Page
