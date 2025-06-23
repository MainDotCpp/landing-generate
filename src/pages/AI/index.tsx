import { useEffect, useState } from 'react'
import { redirectProps } from '@/utils/redicrect'
import image1 from './static/1.png'
import image2 from './static/2.png'
import analysedGif from './static/analysed.gif'
import button2Jpg from './static/button2.jpg'
import button2Png from './static/button2.png'
import file2Png from './static/file2.png'
import './index.css'
import './static/style.css'

export const config = {
  title: '株価分析-予測',
}
export default () => {
  const [inputValue, setInputValue] = useState('')
  const [isPopupVisible, setPopupVisible] = useState(false)
  const [isGifVisible, setGifVisible] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        setPopupVisible(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isPopupVisible])

  useEffect(() => {
    if (isGifVisible) {
      const timer = setTimeout(() => {
        setGifVisible(false)
        setModalVisible(true)
      }, 2000) // assuming gif plays for 2 seconds
      return () => clearTimeout(timer)
    }
  }, [isGifVisible])

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setPopupVisible(true)
    }
    else {
      setGifVisible(true)
    }
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  return (
    <>
      <div className="content">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <input
          type="text"
          id="input-box"
          placeholder="会社名または銘柄記号を入カしてくだ"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          className={inputValue.trim() !== '' ? 'filled' : ''}
        />
        <div id="disclaimer">
          *お客様の取引情報は一切記録・使用されません。
          {' '}
          <br />
          安全性を確保するため、情報はシステムに保存されず、第三者に提供されることもありません。
        </div>
        <br />
        <button id="submit-button" onClick={handleSubmit}>
          <img src={button2Jpg} alt="Button1" />
        </button>
      </div>
      <div
        id="popup"
        className="popup"
        style={{ display: isPopupVisible ? 'block' : 'none' }}
      >
        <p>銘柄コードまたは名前を正しく入力してください</p>
      </div>
      <div
        id="gif-container"
        style={{ display: isGifVisible ? 'block' : 'none' }}
      >
        {isGifVisible && <img src={analysedGif} alt="Analysing..." />}
      </div>
      <div
        id="modal"
        className="modal"
        style={{ display: isModalVisible ? 'block' : 'none' }}
      >
        <span id="close-modal" onClick={handleCloseModal}>
          ×
        </span>
        <div id="modal-title">株式AI分析が完了しました！</div>
        <img
          src={file2Png}
          alt="Report Image"
          style={{ display: 'block', margin: '15px auto', maxWidth: '100%' }}
        />
        <div id="modal-content">
          LINEの友達を追加し、
          <span style={{ color: 'red' }}>「レポート」</span>
          と送信して、すべての株式関連AI分析レポートを受け取りましょう。
          <br />
          <strong>本日AIが推奨する最良の銘柄もお届けします！</strong>
        </div>
        <button id="button2" {...redirectProps}>
          <img src={button2Png} alt="Button2" />
        </button>
      </div>
      <div
        id="overlay"
        style={{ display: isModalVisible ? 'block' : 'none' }}
      />
    </>
  )
}
