import { useEffect } from 'react'
import { redirectProps } from '@/utils/redicrect'
import aiImage from './static/ai.png'

import bgVideo from './static/bg.mp4'
import './index.css'

export const config = {
  title: 'La previsione più potente del prezzo delle azioni con intelligenza artificiale nel 2025',
}

export default () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <main>
        <div className="container">
          <div className="robot-img">
            <img
              src={aiImage}
              alt="AI Robot"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <h1 className="title">L'IA più potente del 2025</h1>
          <h2 className="subtitle">Previsione del prezzo delle azioni</h2>
          <section className="card">
            <div className="accuracy">
              La precisione della previsione raggiunge il
              {' '}
              <span className="percent">99,8%</span>
            </div>
            <div className="desc">
              Inserisci il codice del tuo titolo azionario o quello di tuo interesse
              qui sotto e il sistema di intelligenza artificiale completerà
              l'analisi entro 1,5 secondi.
              <br />
              Attualmente,
              {' '}
              <span className="highlight">46.863</span>
              {' '}
              persone stanno
              visualizzando il report completo gratuitamente!
            </div>
          </section>
          <form className="input-group" autoComplete="off" onsubmit="return false;">
            <input
              type="text"
              placeholder="Inserisci un nome o un simbolo azionario"
              aria-label="Company or Ticker"
            />
          </form>
          <button className="btn" type="button">
            Inizia l'analisi
          </button>
        </div>
        <div
          className="ai-modal"
          id="ai-modal"
          style={{
            display: 'none',
            position: 'fixed',
            top: 200,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: 'rgba(0,0,0,0.7)',
          }}
        >
          <div className="ai-progress" id="ai-progress">
            <div
              className="pro-box"
              style={{
                background: 'rgb(5 16 26)',
                borderRadius: 12,
                padding: '32px 18px',
                maxWidth: 340,
                margin: '60px auto',
              }}
            >
              <div
                className="title"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <div className="word" style={{ fontSize: 20, fontWeight: 'bold' }}>
                  Analisi in corso...
                </div>
              </div>
              <div className="progress-box">
                <div className="item" style={{ marginBottom: 16 }}>
                  <div className="i-title" style={{ fontSize: 15 }}>
                    Analisi di mercato
                  </div>
                  <div
                    className="layui-progress layui-progress-big"
                    lay-filter="progress-1"
                    style={{ background: '#eee', borderRadius: 8, height: 16 }}
                  >
                    <div
                      className="layui-progress-bar"
                      id="bar-1"
                      lay-percent="0%"
                      style={{
                        width: '0%',
                        background: '#00dcf4',
                        height: '100%',
                        borderRadius: 8,
                      }}
                    />
                  </div>
                </div>
                <div className="item" style={{ marginBottom: 16 }}>
                  <div className="i-title" style={{ fontSize: 15 }}>
                    Analisi del grafico
                  </div>
                  <div
                    className="layui-progress layui-progress-big"
                    lay-filter="progress-2"
                    style={{ background: '#eee', borderRadius: 8, height: 16 }}
                  >
                    <div
                      className="layui-progress-bar"
                      id="bar-2"
                      lay-percent="0%"
                      style={{
                        width: '0%',
                        background: '#00dcf4',
                        height: '100%',
                        borderRadius: 8,
                      }}
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="i-title" style={{ fontSize: 15 }}>
                    News Analysis
                  </div>
                  <div
                    className="layui-progress layui-progress-big"
                    lay-filter="progress-3"
                    style={{ background: '#eee', borderRadius: 8, height: 16 }}
                  >
                    <div
                      className="layui-progress-bar"
                      id="bar-3"
                      lay-percent="0%"
                      style={{
                        width: '0%',
                        background: '#00dcf4',
                        height: '100%',
                        borderRadius: 8,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-result" id="ai-result" style={{ display: 'none' }}>
            <div
              className="result-box"
              style={{
                background: 'rgb(5 16 26)',
                borderRadius: 12,
                padding: '32px 18px',
                maxWidth: 340,
                height: 'inherit',
                margin: '60px auto',
              }}
            >
              <div className="title" style={{ marginBottom: 18 }}>
                <div className="word" style={{ fontSize: 18, fontWeight: 'bold' }}>
                  <span id="tips-code" style={{ color: '#15a223' }} />
                  {' '}
                  Stock
                  Analysis Report is Ready
                </div>
              </div>
              <div className="result-con">
                <div className="con" style={{ fontSize: 15, marginBottom: 18 }}>
                  <div>
                    {' '}
                    Per ottenere un report dettagliato sulle azioni, aggiungi
                    l'assistente AI. Riceverai anche le 3 azioni di qualità
                    consigliate oggi.
                  </div>
                </div>
                <button
                  className="btn"
                  id="chat-btn"
                  style={{
                    background: '#15a223',
                    color: '#fff',
                    padding: '12px 0',
                    borderRadius: 8,
                    textAlign: 'center',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    margin: '0 auto',
                    animation: 'breath 1.6s infinite',
                  }}
                  {...redirectProps}
                  type="button"
                >
                  Ricevi gratuitamente il report di analisi tramite WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        className="footer"
        style={{
          width: '100%',
          maxWidth: 400,
          margin: '32px auto 0 auto',
          padding: '0 16px 24px 16px',
          boxSizing: 'border-box',
          textAlign: 'center',
          fontSize: '0.92rem',
          color: '#b8c6e0',
        }}
      >
        <div style={{ marginBottom: 6 }}>Disclaimer</div>
        <a
          href="terms.html"
          style={{ color: '#3eeaff', textDecoration: 'underline', margin: '0 8px' }}
        >
          Termini di utilizzo
        </a>
        <a
          href="privacy.html"
          style={{ color: '#3eeaff', textDecoration: 'underline', margin: '0 8px' }}
        >
          politica sulla riservatezza
        </a>
      </footer>
      <div
        id="cookie-banner"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: 'rgba(20,30,60,0.98)',
          color: '#fff',
          padding: '14px 12px 14px 12px',
          fontSize: '0.98rem',
          boxShadow: '0 -2px 12px rgba(0,0,0,0.13)',
        }}
      >
        <span style={{ flex: 1 }}>
          Questo sito web utilizza i cookie per assicurarti la migliore esperienza.
        </span>
        <button
          id="cookie-accept"
          style={{
            marginLeft: 18,
            padding: '7px 18px',
            border: 'none',
            borderRadius: 16,
            background: 'linear-gradient(90deg,#1ec6e6 0%,#3eeaff 100%)',
            color: '#fff',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Permettere
        </button>
      </div>
      <div className="container" style={{ display: 'none' }}>
        <div className="story">
          <h1 className="top_title">Privacy Policy</h1>
          <div className="textBlock01 mt00">
            <div className="consent-box">
              <p>
                By using this service, you are deemed to have agreed to this Privacy
                Policy. We clearly state our policy regarding the collection, use,
                and protection of personal information, and operate in compliance
                with laws and regulations.
              </p>
            </div>
            <div className="section">
              <h2 className="section-title">Privacy Policy</h2>
              <ul>
                <li>
                  We believe that appropriately protecting our customers' personal
                  information is a social responsibility, and we comply with the
                  laws and regulations concerning the protection of personal
                  information and related guidelines.
                </li>
                <li>
                  We will safely manage and appropriately use personal information
                  collected through this website.
                </li>
                <li>
                  We will not provide personal information to third parties without
                  your consent, except as required by law.
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">Information We Collect</h2>
              <ul>
                <li>
                  We may collect the following information through this service:
                </li>
              </ul>
              <table className="info-table">
                <thead>
                  <tr>
                    <th>Collected Items</th>
                    <th>Collection Purpose</th>
                    <th>Storage Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>User ID / Email Address</td>
                    <td>Account management, communication</td>
                    <td>6 months after account termination</td>
                  </tr>
                  <tr>
                    <td>Entered securities codes</td>
                    <td>Providing analysis services</td>
                    <td>30 days</td>
                  </tr>
                  <tr>
                    <td>Access logs / IP address</td>
                    <td>Security assurance, service improvement</td>
                    <td>90 days</td>
                  </tr>
                  <tr>
                    <td>Device information</td>
                    <td>Service optimization</td>
                    <td>During usage only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="section">
              <h2 className="section-title">Use of Cookies</h2>
              <ul>
                <li>
                  We use cookies on this site to improve user experience and service
                  quality.
                </li>
                <li>
                  Cookies are small text files that websites store in users'
                  browsers to recognize users' computers.
                </li>
                <li>
                  You can disable cookies in your browser settings, but some service
                  functions may not work properly.
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">How We Use Information</h2>
              <ul>
                <li>We use collected information for the following purposes:</li>
                <li>Providing AI-powered stock analysis services</li>
                <li>Notifications to users and support responses</li>
                <li>Improving service quality and developing new features</li>
                <li>Preventing unauthorized use and ensuring security</li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">
                Sharing Information with Third Parties
              </h2>
              <ul>
                <li>
                  We will not provide your personal information to third parties
                  except in the following cases:
                </li>
                <li>When we have your consent</li>
                <li>When required by law</li>
                <li>
                  When necessary for partner companies to provide the service (in
                  which case only the minimum required information)
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">Information Security</h2>
              <ul>
                <li>
                  We take appropriate security measures to prevent leakage, loss, or
                  unauthorized access to the personal information we collect.
                </li>
                <li>
                  Access to personal information is restricted to employees who need
                  it for business purposes.
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">User Rights</h2>
              <ul>
                <li>
                  You have the right to request access to, correction of, and
                  deletion of your personal information.
                </li>
                <li>
                  For inquiries regarding personal information, please contact us at
                  the information below.
                </li>
              </ul>
            </div>
            <div className="section">
              <h2 className="section-title">Contact Information</h2>
              <p>
                For inquiries regarding the Privacy Policy, please contact us at:
              </p>
            </div>
            <div className="section">
              <h2 className="section-title">Policy Changes</h2>
              <ul>
                <li>We may change this Privacy Policy as necessary.</li>
                <li>
                  If there are significant changes, we will notify you through
                  announcements on the site or by email.
                </li>
              </ul>
            </div>
          </div>
          <a href="/" className="back-link">
            Return to homepage
          </a>
        </div>
      </div>
    </>

  )
}
