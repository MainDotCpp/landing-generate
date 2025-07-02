import { useState } from 'react'
import { redirect } from '@/utils/redicrect'
import img1 from './1.jpg'

export const config = {
  template: '/src/pages/日本通版V2/index.html',
}
export default () => {
  return (
    <div className="font-sans bg-washi text-gray-800 leading-relaxed tracking-wide">
      {/* Header */}
      <header className="bg-white header-shadow sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-jpBlue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
              <span className="ml-2 text-lg font-bold text-jpBlue">
                優良株の推薦
              </span>
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-10 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-jpBlue mb-4 leading-snug">
                暴騰株アラート
              </h1>
              <p className="text-gray-700 mb-6 text-base px-2">
                LINEを追加するだけで、最新の株価上昇ニュースを無料で受け取れます！
              </p>
              <button
                onClick={redirect}
                className="btn-jp bg-jpRed text-white px-6 py-3 w-full max-w-xs text-base font-medium"
              >
                <i className="fab fa-line mr-2" />
                LINEで詳細取得
              </button>
              {/* 按钮下方小字体提示（无链接） */}
              <p style={{ fontSize: 12, color: '#555', marginTop: 8 }}>
                積極的にお問い合わせいただければ、必要なサービスを提供いたします。
              </p>
            </div>
            <div className="w-full max-w-sm">
              <img src={img1} alt="情報" className="rounded-lg shadow-md w-full" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-10 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-jpBlue mb-2">サービスの特徴</h2>
            <div className="w-16 h-1 bg-jpRed mx-auto" />
          </div>
          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
            {/* Feature 1 */}
            <div className="feature-card bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-jpBlue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-jpBlue mb-1">
                    最新の市場動向を把握
                  </h3>
                  <p className="text-gray-700 text-sm">
                    経済ニュースや株式市場の動きをタイムリーにお届け。
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="feature-card bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-jpGreen"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-jpBlue mb-1">
                    毎週厳選した優良株式をご紹
                  </h3>
                  <p className="text-gray-700 text-sm">
                    今後の成長が見込まれる注目銘柄を毎週配信。情報収集が効率的に。
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="feature-card bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-jpRed"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-jpBlue mb-1">
                    信頼性の高い情報
                  </h3>
                  <p className="text-gray-700 text-sm">
                    専門的なアルゴリズムを使用し、株式市場の重要な情報を正確に分析。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-jpBlue to-primary text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-4">株の疑問をその場で解決</h2>
          <p className="mb-6 max-w-md mx-auto text-sm sm:text-base">
            LINE登録で今月の注目情報3選を無料で受け取れます
          </p>
          <button
            onClick={redirect}
            className="btn-jp bg-jpRed text-white px-8 py-3 text-base font-medium w-full max-w-xs"
          >
            <i className="fab fa-line mr-2" />
            LINEで「優良株」と送信し、人気情報を取得してください。
          </button>
        </div>
      </section>
      {/* Floating LINE Button */}
      <button
        onClick={redirect}
        className="fixed bottom-6 right-6 z-40 bg-jpGreen text-white rounded-full p-3 line-btn"
      >
        <i className="fab fa-line text-xl" />
      </button>
      <footer className="bg-dark text-rad py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          <p>© 2025 株式投資情報アラート. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="#" className="underline hover:text-primary transition-colors">
              プライバシーポリシー
            </a>
            {' '}
            |
            <a href="#" className="underline hover:text-primary transition-colors">
              利用規約
            </a>
          </p>
        </div>
      </footer>
    </div>

  )
}
