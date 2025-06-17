import React from 'react'
import './styles.css'

export default function Page() {
  return (
    <div className="landing-page">
      {/* ヘッダーセクション */}
      <header className="header-section">
        <div className="container">
          <h1 className="main-title">データ駆動型投資判断</h1>
          <p className="sub-title">成田悠輔の市場分析メソッド</p>
          <div className="catchcopy">
            <h2>アルゴリズムとデータが明かす、日本株市場の真実</h2>
            <p>イェール大学発、独自の数理モデルで暴落リスクを予測</p>
          </div>
        </div>
      </header>

      {/* 問題提起セクション */}
      <section className="problem-section">
        <div className="container">
          <h3>現在の市場の危険な状況</h3>
          <div className="problem-content">
            <p>
              現在の日本株市場は、感情的な投機とバブル的構造に支配されています。多くの投資家が『なんとなく上がりそう』という非合理的な判断で銘柄を選択し、結果として大きな損失を被っています。
            </p>
            <p className="emphasis">
              これは、データサイエンスの観点から見ると、極めて非効率的で危険な状況です。
            </p>
          </div>
        </div>
      </section>

      {/* 解決策提示セクション */}
      <section className="solution-section">
        <div className="container">
          <h3>データ・アルゴリズム・数学を使った合理的投資法</h3>
          <div className="solution-grid">
            <div className="solution-item">
              <h4>独自分析手法</h4>
              <p>半熟仮想的アプローチによる市場予測モデル</p>
            </div>
            <div className="solution-item">
              <h4>科学的根拠</h4>
              <p>イェール大学での研究成果を基にした投資判断フレームワーク</p>
            </div>
            <div className="solution-item">
              <h4>実用性</h4>
              <p>ポエム的直感と数学的論理の融合による銘柄選定</p>
            </div>
          </div>
        </div>
      </section>

      {/* 緊急性の演出 */}
      <section className="urgency-section">
        <div className="container">
          <div className="urgency-content">
            <h3>⚠️ 危険信号が点滅中</h3>
            <p>
              バブル崩壊は数学的必然性です。外資依存構造とアルゴリズム取引の急増により、市場の脆弱性は臨界点に達しています。
            </p>
            <p className="warning">
              データが示す危険信号を無視することは、合理的な投資家として許されません。
            </p>
          </div>
        </div>
      </section>

      {/* 無料オファー */}
      <section className="offer-section">
        <div className="container">
          <h3>成田悠輔式 データ駆動投資講座</h3>
          <div className="offer-list">
            <div className="offer-item">
              <span className="check">✓</span>
              <span>暴落予備軍3銘柄の科学的分析レポート</span>
            </div>
            <div className="offer-item">
              <span className="check">✓</span>
              <span>急騰期待銘柄3選の数理的根拠</span>
            </div>
            <div className="offer-item">
              <span className="check">✓</span>
              <span>アルゴリズム思考による投資判断メソッド</span>
            </div>
            <div className="offer-item">
              <span className="check">✓</span>
              <span>公共政策変化が株価に与える影響予測</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA（行動喚起） */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3>今すぐ行動してください</h3>
            <p>
              合理的な投資家として、感情ではなくデータに基づいた判断を。
              <br />
              今すぐLINE登録で、科学的投資メソッドを無料で学んでください。
            </p>
            <button className="cta-button">
              🔗 無料でLINE登録する
            </button>
            <p className="cta-note">※登録は完全無料です</p>
          </div>
        </div>
      </section>

      {/* 信頼性構築要素 */}
      <section className="credibility-section">
        <div className="container">
          <h3>成田 悠輔 プロフィール</h3>
          <div className="profile-content">
            <div className="profile-info">
              <h4>成田 悠輔（なりた ゆうすけ）</h4>
              <p>1985年10月18日生まれ</p>
              <ul className="credentials">
                <li>イェール大学アシスタント・プロフェッサー</li>
                <li>半熟仮想株式会社・代表取締役</li>
                <li>専門：データ・アルゴリズム・数学・ポエムを使ったビジネス</li>
                <li>公共政策の創造とデザイン</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 成田悠輔式投資メソッド. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
