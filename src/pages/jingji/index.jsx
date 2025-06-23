import { useState } from 'react'

export default () => {
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const [selectedValue, setSelectedValue] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (selectedValue) {
      setSubmissionStatus('ご協力いただきありがとうございました！')
    }
    else {
      setSubmissionStatus('いずれかの選択肢を選んでから投票してください。')
    }
  }

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value)
    setSubmissionStatus(null)
  }

  const styles = {
    container: {
      fontFamily: '"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif',
      lineHeight: 1.7,
      color: '#333',
      backgroundColor: '#f0f2f5',
      margin: '0',
      width: '100%',
    },
    header: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
    },
    h1: {
      margin: 0,
      fontSize: '1.8em',
      fontWeight: 'bold',
    },
    mainContent: {
      padding: '15px',
    },
    section: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    h2: {
      color: '#007bff',
      borderBottom: '2px solid #f0f2f5',
      paddingBottom: '10px',
      marginBottom: '20px',
      fontSize: '1.4em',
      fontWeight: 'bold',
    },
    p: {
      margin: '0 0 1em 0',
      textIndent: '1em',
    },
    form: {
      marginTop: '20px',
    },
    fieldset: {
      border: 'none',
      padding: '0',
    },
    legend: {
      padding: '0',
      color: '#333',
      fontWeight: 'bold',
      fontSize: '1.2em',
      marginBottom: '15px',
      width: '100%',
    },
    radioLabel: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '5px',
      padding: '15px',
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',
    },
    selectedRadioLabel: {
      borderColor: '#007bff',
      backgroundColor: '#e7f3ff',
      color: '#007bff',
      fontWeight: 'bold',
    },
    radioInput: {
      marginRight: '12px',
    },
    submitButton: {
      backgroundColor: '#28a745',
      color: '#fff',
      border: 'none',
      padding: '15px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1.1em',
      fontWeight: 'bold',
      width: '100%',
      marginTop: '10px',
      transition: 'background-color 0.3s ease',
    },
    submissionMessage: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#e6f7ff',
      border: '1px solid #91d5ff',
      borderRadius: '5px',
      color: '#0056b3',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    footer: {
      textAlign: 'center',
      padding: '20px',
      fontSize: '0.8em',
      color: '#6c757d',
      backgroundColor: '#e9ecef',
    },
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.h1}>経済学の基本</h1>
      </header>

      <main style={styles.mainContent}>
        <section style={styles.section}>
          <h2 style={styles.h2}>経済学とは？</h2>
          <p style={styles.p}>
            経済学と聞くと、少し難しく感じるかもしれません。しかし、実は私たちの日常生活に密接に関わっている学問です。経済学は、限られた資源（お金、時間、物など）を、人々がどのように使って、さまざまな欲求を満たすための選択をするかを研究する学問です。商品やサービスがどのように作られ、分配され、消費されるのか、その仕組みを解き明かします。
          </p>
          <p style={styles.p}>
            例えば、あなたがコンビニでお弁当を選ぶとき、無意識のうちに価格や内容を比較し、最も満足度の高い選択をしようとします。これも立派な経済活動の一つなのです。
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>需要と供給</h2>
          <p style={styles.p}>
            「需要」と「供給」は経済学の基本的な考え方で、市場価格が決まる仕組みを説明します。需要とは、人々が「買いたい」と思う量のことです。一般的に、商品の価格が安くなればなるほど、需要は増えます。一方、供給とは、企業などが「売りたい」と思う量のことです。価格が高くなればなるほど、企業はもっと多く売りたいと考えるため、供給は増えます。
          </p>
          <p style={styles.p}>
            この需要と供給のバランスが取れる点で価格が決まります。これを市場の「見えざる手」と呼ぶこともあります。例えば、人気アイドルのコンサートチケットは、欲しい人が多い（需要が高い）のに対して、席数が限られている（供給が少ない）ため、価格が高騰することがあります。
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>インフレーションとデフレーション</h2>
          <p style={styles.p}>
            インフレーション（インフレ）とは、物価が全体的に継続して上昇することです。つまり、昨日100円で買えたものが、今日は110円出さないと買えなくなるような状況です。これは、相対的にお金の価値が下がっていることを意味します。適度なインフレは経済成長の証とも言われますが、急激なインフレは生活を苦しくさせます。
          </p>
          <p style={styles.p}>
            デフレーション（デフレ）はその逆で、物価が全体的に継続して下落することです。物が安く買えるので一見良さそうに思えますが、企業の利益が減り、従業員の給料が下がり、消費がさらに冷え込むという悪循環（デフレスパイラル）に陥る危険性があります。
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>GDP（国内総生産）</h2>
          <p style={styles.p}>
            GDP（Gross Domestic Product）は、一定期間内に国内で生産されたすべての商品やサービスの付加価値の合計額です。国の経済規模や経済成長率を示す重要な指標として使われます。GDPが増えれば、それは国全体の経済活動が活発になっていることを意味し、景気が良いと判断されることが多いです。
          </p>
          <p style={styles.p}>
            GDPは、私たちの生活水準とも関連があります。GDPが成長すれば、企業の収益が増え、それが家計の所得向上につながり、より豊かな生活を送れるようになる、と期待されています。
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>経済への意識調査</h2>
          <form onSubmit={handleFormSubmit} style={styles.form}>
            <fieldset style={styles.fieldset}>
              <legend style={styles.legend}>今後の経済をどう見ますか？</legend>
              <label style={{ ...styles.radioLabel, ...(selectedValue === 'optimistic' ? styles.selectedRadioLabel : {}) }}>
                <input
                  type="radio"
                  name="economy_outlook"
                  value="optimistic"
                  checked={selectedValue === 'optimistic'}
                  onChange={handleRadioChange}
                  style={styles.radioInput}
                />
                良くなる
              </label>
              <label style={{ ...styles.radioLabel, ...(selectedValue === 'pessimistic' ? styles.selectedRadioLabel : {}) }}>
                <input
                  type="radio"
                  name="economy_outlook"
                  value="pessimistic"
                  checked={selectedValue === 'pessimistic'}
                  onChange={handleRadioChange}
                  style={styles.radioInput}
                />
                悪くなる
              </label>
              <label style={{ ...styles.radioLabel, ...(selectedValue === 'neutral' ? styles.selectedRadioLabel : {}) }}>
                <input
                  type="radio"
                  name="economy_outlook"
                  value="neutral"
                  checked={selectedValue === 'neutral'}
                  onChange={handleRadioChange}
                  style={styles.radioInput}
                />
                変わらない
              </label>
            </fieldset>
            <button
              type="submit"
              style={styles.submitButton}
            >
              意見を送る
            </button>
            {submissionStatus && <p style={styles.submissionMessage}>{submissionStatus}</p>}
          </form>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>このページは、経済学の基本的な概念を分かりやすく紹介するためのものです。専門的な正確性よりも、理解しやすさを優先しています。</p>
      </footer>
    </div>
  )
}
