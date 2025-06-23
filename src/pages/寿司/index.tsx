import React from 'react'

export const config = {
  title: '寿司紹介',
}

export default () => {
  const sushiPageStyle: React.CSSProperties = {
    fontFamily: '\'Helvetica Neue\', Arial, \'Hiragino Kaku Gothic ProN\', \'Hiragino Sans\', Meiryo, sans-serif',
    color: '#333',
    backgroundColor: '#fdfdfd',
    lineHeight: 1.8,
  }

  const heroSectionStyle: React.CSSProperties = {
    backgroundColor: '#212529',
    color: 'white',
    textAlign: 'center',
    padding: '120px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
  }

  const heroContainerStyle: React.CSSProperties = {
    maxWidth: '800px',
  }

  const heroTitleStyle: React.CSSProperties = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  }

  const heroSubtitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '40px',
    fontWeight: 300,
  }

  const heroButtonStyle: React.CSSProperties = {
    backgroundColor: '#e63946',
    color: 'white',
    border: 'none',
    padding: '15px 35px',
    fontSize: '1.2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  }

  const sectionStyle: React.CSSProperties = {
    padding: '80px 0',
  }

  const sectionGrayStyle: React.CSSProperties = {
    backgroundColor: '#f8f9fa',
    padding: '80px 0',
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  }

  const sectionHeaderStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '60px',
  }

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: '2.8rem',
    marginBottom: '15px',
    fontWeight: 'bold',
    position: 'relative',
    display: 'inline-block',
  }

  const sectionSubtitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#6c757d',
    maxWidth: '700px',
    margin: '0 auto',
  }

  const gridStyle = (columns: number): React.CSSProperties => ({
    display: 'grid',
    gap: '30px',
    gridTemplateColumns: `repeat(auto-fit, minmax(${columns === 4 ? 250 : 300}px, 1fr))`,
  })

  const grid2Style: React.CSSProperties = {
    ...gridStyle(2),
    alignItems: 'center',
  }

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  }

  const cardIconStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '20px',
  }

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  }

  const cardTextStyle: React.CSSProperties = {
    color: '#6c757d',
  }

  const sushiCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  }

  const sushiImageStyle = (): React.CSSProperties => ({
    height: '200px',
    backgroundColor: '#343a40',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

  const sushiImageSpanStyle: React.CSSProperties = {
    zIndex: 2,
    fontSize: '4rem',
    color: 'white',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)',
  }

  const sushiContentStyle: React.CSSProperties = {
    padding: '25px',
  }

  const sushiTitleStyle: React.CSSProperties = {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  }

  const sushiDescriptionStyle: React.CSSProperties = {
    color: '#6c757d',
  }

  const historyTextStyle: React.CSSProperties = {
    marginBottom: '20px',
  }

  const highlightBoxStyle: React.CSSProperties = {
    backgroundColor: '#fff4f4',
    borderLeft: '5px solid #e63946',
    padding: '25px',
    marginTop: '30px',
    borderRadius: '5px',
  }

  const highlightTitleStyle: React.CSSProperties = {
    fontSize: '1.4rem',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#e63946',
  }

  const traditionCardStyle: React.CSSProperties = {
    backgroundColor: '#343a40',
    color: 'white',
    padding: '50px',
    borderRadius: '10px',
    textAlign: 'center',
  }

  const traditionIconStyle: React.CSSProperties = {
    fontSize: '4rem',
    marginBottom: '20px',
  }

  const traditionTitleStyle: React.CSSProperties = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  }

  const traditionTextStyle: React.CSSProperties = {
    color: '#f8f9fa',
    opacity: 0.8,
  }

  const footerStyle: React.CSSProperties = {
    backgroundColor: '#212529',
    color: 'white',
    padding: '60px 0',
    textAlign: 'center',
  }

  const footerContainerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
  }

  const footerTitleStyle: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '10px',
  }

  const footerSubtitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#adb5bd',
    marginBottom: '30px',
  }

  const footerIconsSpanStyle: React.CSSProperties = {
    fontSize: '2rem',
    margin: '0 15px',
  }

  const footerCopyrightStyle: React.CSSProperties = {
    marginTop: '30px',
    color: '#6c757d',
  }

  return (
    <div style={sushiPageStyle}>
      {/* ヒーローセクション */}
      <section style={heroSectionStyle}>
        <div style={heroContainerStyle}>
          <h1 style={heroTitleStyle} data-aos="fade-down" data-aos-duration="1200">
            🍣 寿司の極み
          </h1>
          <p style={heroSubtitleStyle} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            伝統的な江戸前寿司の技と心を大切に、最高の食材で皆様をおもてなし致します
          </p>
          <button style={heroButtonStyle} data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800">
            寿司の世界を知る
          </button>
        </div>
      </section>

      {/* 寿司について */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={sectionHeaderStyle} data-aos="fade-up" data-aos-duration="1000">
            <h2 style={sectionTitleStyle}>江戸前寿司のこだわり</h2>
            <p style={sectionSubtitleStyle}>
              江戸時代から受け継がれた伝統の技法と、厳選された最高級の食材。
              一貫一貫に込められた職人の心と技を、どうぞご堪能ください。
            </p>
          </div>

          <div style={gridStyle(3)}>
            <div style={cardStyle} data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              <div style={cardIconStyle}>🐟</div>
              <h3 style={cardTitleStyle}>厳選素材</h3>
              <p style={cardTextStyle}>
                築地直送の最高級食材を使用。鮮度と品質にこだわり抜いた極上のネタをご提供
              </p>
            </div>

            <div style={cardStyle} data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
              <div style={cardIconStyle}>👨‍🍳</div>
              <h3 style={cardTitleStyle}>職人の技</h3>
              <p style={cardTextStyle}>
                長年の修行を積んだ寿司職人が、伝統の技法で一貫一貫丁寧に握ります
              </p>
            </div>

            <div style={cardStyle} data-aos="fade-left" data-aos-delay="600" data-aos-duration="800">
              <div style={cardIconStyle}>🍚</div>
              <h3 style={cardTitleStyle}>秘伝のシャリ</h3>
              <p style={cardTextStyle}>
                厳選された国産米と秘伝の合わせ酢で作る、絶妙な温度と味わいのシャリ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* おすすめ寿司 */}
      <section style={sectionGrayStyle}>
        <div style={containerStyle}>
          <div style={sectionHeaderStyle} data-aos="fade-up" data-aos-duration="1000">
            <h2 style={sectionTitleStyle}>寿司の逸品たち</h2>
            <p style={sectionSubtitleStyle}>日本が誇る美しい寿司の世界をご紹介いたします</p>
          </div>

          <div style={gridStyle(4)}>
            <div style={sushiCardStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="800">
              <div style={sushiImageStyle()}>
                <span style={sushiImageSpanStyle}>🍣</span>
              </div>
              <div style={sushiContentStyle}>
                <h3 style={sushiTitleStyle}>大トロ</h3>
                <p style={sushiDescriptionStyle}>口の中でとろける極上の大トロ。まさに寿司の王様と呼ばれる至高の一貫</p>
              </div>
            </div>

            <div style={sushiCardStyle} data-aos="flip-left" data-aos-delay="200" data-aos-duration="800">
              <div style={sushiImageStyle()}>
                <span style={sushiImageSpanStyle}>🍣</span>
              </div>
              <div style={sushiContentStyle}>
                <h3 style={sushiTitleStyle}>中トロ</h3>
                <p style={sushiDescriptionStyle}>絶妙な脂の乗った中トロ。旨味と食感の絶妙なバランスを楽しめる逸品</p>
              </div>
            </div>

            <div style={sushiCardStyle} data-aos="flip-left" data-aos-delay="300" data-aos-duration="800">
              <div style={sushiImageStyle()}>
                <span style={sushiImageSpanStyle}>🍣</span>
              </div>
              <div style={sushiContentStyle}>
                <h3 style={sushiTitleStyle}>穴子</h3>
                <p style={sushiDescriptionStyle}>江戸前の伝統的な煮穴子。甘いタレが絶品の日本古来の味わい</p>
              </div>
            </div>

            <div style={sushiCardStyle} data-aos="flip-left" data-aos-delay="400" data-aos-duration="800">
              <div style={sushiImageStyle()}>
                <span style={sushiImageSpanStyle}>🍣</span>
              </div>
              <div style={sushiContentStyle}>
                <h3 style={sushiTitleStyle}>ウニ</h3>
                <p style={sushiDescriptionStyle}>北海道産の濃厚なウニ。海の恵みを存分に感じられる贅沢な味わい</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 寿司の歴史と文化 */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={grid2Style}>
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2 style={sectionTitleStyle}>寿司の歴史</h2>
              <p style={historyTextStyle}>
                寿司の起源は江戸時代にさかのぼります。当時の江戸っ子たちに愛された「早寿司」から始まり、
                現在の握り寿司へと発展してきました。
              </p>
              <p style={historyTextStyle}>
                一つ一つの寿司には、職人の長年の経験と技術、そして日本人の美意識が込められています。
                それは単なる食べ物ではなく、日本文化の象徴とも言える芸術作品なのです。
              </p>
              <div style={highlightBoxStyle} data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
                <h3 style={highlightTitleStyle}>🎌 日本の心</h3>
                <p style={cardTextStyle}>
                  寿司は「おもてなし」の心を体現した日本料理の最高峰。
                  季節感を大切にし、食材への敬意を込めて作られます。
                </p>
              </div>
            </div>
            <div style={traditionCardStyle} data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
              <div style={traditionIconStyle}>🍣</div>
              <h3 style={traditionTitleStyle}>伝統の継承</h3>
              <p style={traditionTextStyle}>
                400年以上の歴史を持つ寿司文化。職人から弟子へと受け継がれる技と心が、
                今もなお日本の食文化を支えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer style={footerStyle}>
        <div style={footerContainerStyle} data-aos="fade-up" data-aos-duration="1000">
          <h3 style={footerTitleStyle}>🍣 寿司の極み</h3>
          <p style={footerSubtitleStyle}>日本の伝統文化としての寿司の素晴らしさを世界に伝えます</p>
          <div data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800">
            <span style={footerIconsSpanStyle}>🐟</span>
            <span style={footerIconsSpanStyle}>🍚</span>
            <span style={footerIconsSpanStyle}>👨‍🍳</span>
            <span style={footerIconsSpanStyle}>🎌</span>
          </div>
          <p style={footerCopyrightStyle}>&copy; 2024 寿司の極み All rights reserved. 心を込めてお作りいたします。</p>
        </div>
      </footer>
    </div>
  )
}
