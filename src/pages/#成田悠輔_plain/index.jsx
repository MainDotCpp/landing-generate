import './styles.css'

export default function Page() {
  return (
    <div className="landing-page">
      {/* Hero Section - 和風デザイン */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                  <img
                    src="https://via.placeholder.com/280x280/f8f9fa/4a5568?text=成田悠輔"
                    alt="成田悠輔教授"
                    className="profile-avatar"
                  />
                  <div className="image-border"></div>
                </div>
              </div>

              <div className="profile-info">
                <div className="name-section">
                  <div className="title-badge">
                    <span>Professor</span>
                  </div>
                  <h1 className="name-kanji">成田 悠輔</h1>
                  <p className="name-hiragana">なりた ゆうすけ</p>
                  <div className="name-underline"></div>
                </div>

                <div className="expertise-section">
                  <h2 className="main-title">データ駆動型投資判断</h2>
                  <p className="subtitle">アルゴリズムとデータが明かす、日本株市場の真実</p>
                </div>

                <div className="credentials-section">
                  <div className="credential-item">
                    <div className="credential-dot"></div>
                    <span>イェール大学アシスタント・プロフェッサー</span>
                  </div>
                  <div className="credential-item">
                    <div className="credential-dot"></div>
                    <span>半熟仮想株式会社・代表取締役</span>
                  </div>
                  <div className="credential-item">
                    <div className="credential-dot"></div>
                    <span>データ・アルゴリズム・数学専門</span>
                  </div>
                  <div className="credential-item">
                    <div className="credential-dot"></div>
                    <span>公共政策の創造とデザイン</span>
                  </div>
                </div>

                <div className="description-box">
                  <p>
                    イェール大学発、独自の数理モデルで暴落リスクを予測。
                    <br />
                    データサイエンスと投資戦略を融合した革新的アプローチで、
                    <br />
                    日本の投資市場に新たな視点をもたらします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 問題提起セクション */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <h3>現在の市場の危険な状況</h3>
            <div className="section-line"></div>
          </div>
          <div className="problem-content">
            <div className="problem-card">
              <p>
                現在の日本株市場は、感情的な投機とバブル的構造に支配されています。多くの投資家が『なんとなく上がりそう』という非合理的な判断で銘柄を選択し、結果として大きな損失を被っています。
              </p>
              <div className="emphasis-card">
                <p>
                  これは、データサイエンスの観点から見ると、極めて非効率的で危険な状況です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解決策提示セクション */}
      <section className="solution-section">
        <div className="container">
          <div className="section-header">
            <h3>データ・アルゴリズム・数学を使った合理的投資法</h3>
            <div className="section-line"></div>
          </div>
          <div className="solution-grid">
            <div className="solution-card">
              <div className="card-number">01</div>
              <h4>独自分析手法</h4>
              <p>半熟仮想的アプローチによる市場予測モデル</p>
            </div>
            <div className="solution-card">
              <div className="card-number">02</div>
              <h4>科学的根拠</h4>
              <p>イェール大学での研究成果を基にした投資判断フレームワーク</p>
            </div>
            <div className="solution-card">
              <div className="card-number">03</div>
              <h4>実用性</h4>
              <p>ポエム的直感と数学的論理の融合による銘柄選定</p>
            </div>
          </div>
        </div>
      </section>

      {/* 緊急性の演出 */}
      <section className="urgency-section">
        <div className="container">
          <div className="urgency-card">
            <div className="warning-icon">⚠️</div>
            <h3>危険信号が点滅中</h3>
            <p>
              バブル崩壊は数学的必然性です。外資依存構造とアルゴリズム取引の急増により、市場の脆弱性は臨界点に達しています。
            </p>
            <div className="warning-box">
              <p>
                データが示す危険信号を無視することは、合理的な投資家として許されません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 無料オファー */}
      <section className="offer-section">
        <div className="container">
          <div className="section-header">
            <h3>成田悠輔式 データ駆動投資講座</h3>
            <div className="section-line"></div>
          </div>
          <div className="offer-card">
            <div className="offer-list">
              <div className="offer-item">
                <div className="check-mark">✓</div>
                <span>暴落予備軍3銘柄の科学的分析レポート</span>
              </div>
              <div className="offer-item">
                <div className="check-mark">✓</div>
                <span>急騰期待銘柄3選の数理的根拠</span>
              </div>
              <div className="offer-item">
                <div className="check-mark">✓</div>
                <span>アルゴリズム思考による投資判断メソッド</span>
              </div>
              <div className="offer-item">
                <div className="check-mark">✓</div>
                <span>公共政策変化が株価に与える影響予測</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA（行動喚起） */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h3>今すぐ行動してください</h3>
            <p>
              合理的な投資家として、感情ではなくデータに基づいた判断を。
              <br />
              今すぐLINE登録で、科学的投資メソッドを無料で学んでください。
            </p>
            <button className="cta-button">
              <span className="button-icon">📱</span>
              無料でLINE登録する
            </button>
            <p className="cta-note">※登録は完全無料です</p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2024 成田悠輔式投資メソッド. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
