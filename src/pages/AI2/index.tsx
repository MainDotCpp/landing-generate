import { useEffect, useState } from 'react'
import { redirectProps } from '@/utils/redicrect'

import analysedGif from './static/images/analysis.gif'
import bgGif from './static/images/bg.gif'
import kuangPng from './static/images/kuang.png'
import './index.css'
import './static/css/style.css'

export const config = {
  title: 'AIによる株価予測',
}
export default () => {
  const [stockCode, setStockCode] = useState('')
  const [showError, setShowError] = useState(false)
  const [analysisState, setAnalysisState] = useState<'pre' | 'loading' | 'after'>('pre')

  const [peopleNum, setPeopleNum] = useState(() => {
    if (typeof window === 'undefined') {
      return 18416
    }
    const savedCount = localStorage.getItem('count')
    return savedCount ? Number.parseInt(savedCount, 10) : 18416
  })

  const [currentTime, setCurrentTime] = useState(() => {
    return new Date().toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  })

  const startFX = () => {
    if (!stockCode.trim()) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 1500)
    }
    else {
      setAnalysisState('loading')
      setTimeout(() => {
        setAnalysisState('after')
      }, 2000)
    }
  }

  useEffect(() => {
    const updateData = () => {
      const now = new Date()
      const formattedTime = now.toLocaleTimeString('ja-JP', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setCurrentTime(formattedTime)

      setPeopleNum((prevCount) => {
        const randomIncrement = Math.floor(Math.random() * 8)
        const newCount = prevCount + randomIncrement
        localStorage.setItem('count', String(newCount))
        return newCount
      })
    }

    let intervalId: NodeJS.Timeout
    const scheduleNextUpdate = () => {
      const now = new Date()
      const milliseconds = now.getMilliseconds()
      const seconds = now.getSeconds()
      const delay = 5000 - ((seconds % 5) * 1000 + milliseconds)

      const timeoutId = setTimeout(() => {
        updateData()
        intervalId = setInterval(updateData, 5000)
      }, delay)

      return () => {
        clearTimeout(timeoutId)
        clearInterval(intervalId)
      }
    }

    const cleanup = scheduleNextUpdate()
    return cleanup
  }, [])

  return (
    <>
      <div className="error" style={{ display: showError ? 'flex' : 'none' }}>
        <div className="error-content">正確な銘柄やコード?キーワードを入力</div>
      </div>
      <div className="fxbox" style={{ display: analysisState === 'loading' ? 'flex' : 'none' }}>
        <div className="fx-content" style={{ height: 100 }}>
          <img className="analysis" src={analysedGif} />
          <div className="tcwz" style={{}}>
            <span>AIが計算してるんだよ..</span>
          </div>
        </div>
      </div>
      <div
        className="box"
        style={{
          width: '100%',
          height: '100vh',
          position: 'relative',
          backgroundImage: `url(${bgGif})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            position: 'absolute',
            marginTop: '82%',
            zIndex: 10,
            width: '96%',
            height: 'auto',
            left: '3%',
            textAlign: 'center',
            display: analysisState === 'pre' ? 'block' : 'none',
          }}
        >
          <div
            className="con-box"
            style={{
              backgroundImage: `url(${kuangPng})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="word-box">
              <div className="title">無料AIで株価予测!未来を先取り</div>
              <div className="con">
                下記にお持ちの株式コードまたは興味のある株式コードを入力すると、AIシステムが1.5秒以内で分析を完了します。
                <span
                  style={{ fontWeight: 'bold', color: 'red' }}
                >
                  {currentTime}
                </span>
                時点で、すでに
                <span style={{ fontWeight: 'bold', color: 'red' }}>
                  {peopleNum.toLocaleString()}
                </span>
                人が無料で完全レポートを閲覧しています！
              </div>
            </div>
          </div>
          <input
            className="inputcode"
            type="text"
            value={stockCode}
            onChange={e => setStockCode(e.target.value)}
            placeholder="会社名またはティッカーを入力してください"
          />
          <div className="aniu" onClick={startFX}>
            分析を開始する
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            marginTop: '82%',
            zIndex: 10,
            width: '96%',
            height: 'auto',
            left: '3%',
            display: analysisState === 'after' ? 'block' : 'none',
            textAlign: 'center',
          }}
        >
          <div
            className="con-box"
            style={{
              backgroundImage: `url(${kuangPng})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 100%',
            }}
          >
            <div className="word-box">
              <div className="title">あなたの株式AI分析レポ-トが完了しました</div>
              <div className="con">
                詳細な株式レポ-トを取得するために、AIアシスタントを追加してください。また、今日のおすすめ優良株3銘柄も追加で受け取ることができます。
              </div>
            </div>
          </div>
          <div
            className="aniu an_private"
            style={{ fontSize: 14 }}
            {...redirectProps}
          >
            LINEを追加してAI分析レポートを受け取る
          </div>
        </div>
      </div>
    </>
  )
}
