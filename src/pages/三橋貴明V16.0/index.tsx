import { redirect } from '@/utils/redicrect'
import avatar from './static/htdy.jpg'
import mainImg from './static/TU.png'

export const config = {
  title: '三橋貴明の投資情報 - LINE友達追加で無料配信',
}

export default () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f7f7',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}
    >
      {/* ヘッダー画像 */}
      <div style={{ width: '100%' }}>
        <img
          src={mainImg}
          alt="投資情報"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* 参加者数 */}
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#333', margin: 0 }}>
          参加者:
          {' '}
          <span style={{ color: '#e74c3c', fontSize: '24px', fontWeight: 700 }}>21,979</span>
        </h2>
      </div>

      {/* メインCTA */}
      <div style={{ textAlign: 'center', padding: '30px 20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#2c3e50', margin: '0 0 25px 0', lineHeight: 1.3 }}>
          LINE友だち追加で
          <br />
          <span style={{ color: '#e74c3c' }}>爆益銘柄を即座にゲット！</span>
        </h1>

        <button
          onClick={redirect}
          style={{
            background: '#e74c3c',
            color: 'white',
            fontSize: '18px',
            fontWeight: 700,
            padding: '16px 32px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
          }}
        >
          今すぐ爆益情報を奪取！
        </button>
      </div>

      {/* 三橋貴明 - 名前のみ */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <img
          src={avatar}
          alt="三橋貴明"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '3px solid #bdc3c7',
            objectFit: 'cover',
            margin: '0 auto 10px',
            display: 'block',
          }}
        />
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#2c3e50', margin: 0 }}>三橋貴明</h2>
      </div>

      {/* 最終CTA */}
      <div style={{
        background: '#3498db',
        borderRadius: '20px',
        padding: '25px 20px',
        margin: '0 20px 30px',
        textAlign: 'center',
        color: 'white',
      }}
      >
        <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>
          最後のチャンス！今すぐ追加！
        </h2>

        <button
          onClick={redirect}
          style={{
            background: 'white',
            color: '#3498db',
            fontSize: '16px',
            fontWeight: 700,
            padding: '14px 28px',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
          }}
        >
          爆益情報を即座に入手！
        </button>
      </div>
    </div>
  )
}
