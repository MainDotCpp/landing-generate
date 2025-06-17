import './style.css'

export const config = {
  title: '寿司紹介',
}

export default () => {
  return (
    <div className="sushi-page">
      {/* ヒーローセクション */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            🍣 寿司の極み
          </h1>
          <p className="hero-subtitle">
            伝統的な江戸前寿司の技と心を大切に、最高の食材で皆様をおもてなし致します
          </p>
          <button className="hero-button">
            寿司の世界を知る
          </button>
        </div>
      </section>

      {/* 寿司について */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">江戸前寿司のこだわり</h2>
            <p className="section-subtitle">
              江戸時代から受け継がれた伝統の技法と、厳選された最高級の食材。
              一貫一貫に込められた職人の心と技を、どうぞご堪能ください。
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon">🐟</div>
              <h3 className="card-title">厳選素材</h3>
              <p className="card-text">
                築地直送の最高級食材を使用。鮮度と品質にこだわり抜いた極上のネタをご提供
              </p>
            </div>

            <div className="card">
              <div className="card-icon">👨‍🍳</div>
              <h3 className="card-title">職人の技</h3>
              <p className="card-text">
                長年の修行を積んだ寿司職人が、伝統の技法で一貫一貫丁寧に握ります
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🍚</div>
              <h3 className="card-title">秘伝のシャリ</h3>
              <p className="card-text">
                厳選された国産米と秘伝の合わせ酢で作る、絶妙な温度と味わいのシャリ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ寿司 */}
      <section className="section-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">寿司の逸品たち</h2>
            <p className="section-subtitle">日本が誇る美しい寿司の世界をご紹介いたします</p>
          </div>

          <div className="grid-4">
            <div className="sushi-card">
              <div className="sushi-image sushi-image-1">
                <span>🍣</span>
              </div>
              <div className="sushi-content">
                <h3 className="sushi-title">大トロ</h3>
                <p className="sushi-description">口の中でとろける極上の大トロ。まさに寿司の王様と呼ばれる至高の一貫</p>
              </div>
            </div>

            <div className="sushi-card">
              <div className="sushi-image sushi-image-2">
                <span>🍣</span>
              </div>
              <div className="sushi-content">
                <h3 className="sushi-title">中トロ</h3>
                <p className="sushi-description">絶妙な脂の乗った中トロ。旨味と食感の絶妙なバランスを楽しめる逸品</p>
              </div>
            </div>

            <div className="sushi-card">
              <div className="sushi-image sushi-image-3">
                <span>🍣</span>
              </div>
              <div className="sushi-content">
                <h3 className="sushi-title">穴子</h3>
                <p className="sushi-description">江戸前の伝統的な煮穴子。甘いタレが絶品の日本古来の味わい</p>
              </div>
            </div>

            <div className="sushi-card">
              <div className="sushi-image sushi-image-4">
                <span>🍣</span>
              </div>
              <div className="sushi-content">
                <h3 className="sushi-title">ウニ</h3>
                <p className="sushi-description">北海道産の濃厚なウニ。海の恵みを存分に感じられる贅沢な味わい</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 寿司の歴史と文化 */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="section-title">寿司の歴史</h2>
              <p className="history-text">
                寿司の起源は江戸時代にさかのぼります。当時の江戸っ子たちに愛された「早寿司」から始まり、
                現在の握り寿司へと発展してきました。
              </p>
              <p className="history-text">
                一つ一つの寿司には、職人の長年の経験と技術、そして日本人の美意識が込められています。
                それは単なる食べ物ではなく、日本文化の象徴とも言える芸術作品なのです。
              </p>
              <div className="highlight-box">
                <h3 className="highlight-title">🎌 日本の心</h3>
                <p className="card-text">
                  寿司は「おもてなし」の心を体現した日本料理の最高峰。
                  季節感を大切にし、食材への敬意を込めて作られます。
                </p>
              </div>
            </div>
            <div className="tradition-card">
              <div className="tradition-icon">🍣</div>
              <h3 className="tradition-title">伝統の継承</h3>
              <p className="tradition-text">
                400年以上の歴史を持つ寿司文化。職人から弟子へと受け継がれる技と心が、
                今もなお日本の食文化を支えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-container">
          <h3 className="footer-title">🍣 寿司の極み</h3>
          <p className="footer-subtitle">日本の伝統文化としての寿司の素晴らしさを世界に伝えます</p>
          <div className="footer-icons">
            <span>🐟</span>
            <span>🍚</span>
            <span>👨‍🍳</span>
            <span>🎌</span>
          </div>
          <p className="footer-copyright">&copy; 2024 寿司の極み All rights reserved. 心を込めてお作りいたします。</p>
        </div>
      </footer>
    </div>
  )
}
