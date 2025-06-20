import { useEffect, useState } from 'react'
import { redirect } from '@/utils/redicrect'
import intro1 from './intro1.png'
import intro2 from './intro2.png'
import './style.css'

export const config = {
  title: 'forms',
}

const defaultData = [
  {
    id: 1,
    text: 'What is your main goal? ',
    subtitle: 'e.g. This can be any investment through a Brokerage, IRA, 401k, etc.',
    required: true,
    options: ['Grow wealth', 'Passive income', 'Financial independence', 'Be my own boss', 'Retire wealthy', 'Travel the world'],
    selected: null,
  },
  {
    id: 2,
    text: 'What income source are you most familiar with? .',
    subtitle: 'Select all that apply',
    required: true,
    options: ['Full-time job', 'Passive income', 'Other'],
    selected: null,
  },
  {
    id: 3,
    text: 'Do you agree to follow WhatsApp group rules?',
    subtitle: '✅ No fake news ✅ No ads/spam ✅ Friendly discussions',
    required: true,
    options: ['Yes', 'No'],
    selected: null,
  },
]

function Page({
  introImage,
  introTitle = <span>Are you ready to start trading challenges? </span>,
  introDescription = <p>Entering the market carries risks, invest with caution By proceeding, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</p>,
  data = defaultData,
}) {
  const [formData, setFormData] = useState([...data])
  const [currentStep, setCurrentStep] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  // 滚动到指定问题
  const scrollToQuestion = (questionIndex) => {
    const element = document.getElementById(`question-${questionIndex}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentStep(questionIndex)
    }
  }

  // 处理选项选择
  const handleOptionSelect = (questionIndex, optionValue) => {
    const newFormData = [...formData]
    newFormData[questionIndex].selected = optionValue
    setFormData(newFormData)

    if (questionIndex < formData.length - 1) {
      scrollToQuestion(questionIndex + 1)
    }
  }

  // 处理表单完成
  const handleFormCompletion = () => {
    redirect()
  }

  // 监听滚动事件来更新当前步骤
  useEffect(() => {
    const handleScroll = () => {
      const questions = document.querySelectorAll('.question-section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      questions.forEach((question, index) => {
        const rect = question.getBoundingClientRect()
        const elementTop = rect.top + window.scrollY
        const elementBottom = elementTop + rect.height

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setCurrentStep(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isAllCompleted = formData.every(q => q.selected !== null)

  const startSurvey = () => {
    setShowIntro(false)
  }

  return (
    <div className="step-form-container">
      {/* 开始遮罩 */}
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-content">
            {introImage && <img className="intro-image" src={introImage} alt="intro" />}
            <h1 className="intro-title">{introTitle}</h1>
            <p className="intro-description">{introDescription}</p>

            <button className="start-button" onClick={startSurvey}>
              3 Qs to Join Free Group
            </button>
          </div>
        </div>
      )}

      {/* 问题页面 */}
      {!showIntro && formData.map((question, index) => (
        <section
          key={question.id}
          id={`question-${index}`}
          className="question-section"
        >
          <div className="question-card">
            <div className="question-header">
              <h2 className="question-number">
                {index + 1}
                .
                {' '}
                {question.text}
                {question.required && <span className="required-marker">*</span>}
              </h2>
              <div className="question-subtitle-container">
                <p className="question-subtitle">{question.subtitle}</p>
              </div>
            </div>

            <div className="question-body">
              <div className="options-list">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`option-item ${question.selected === option ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={question.selected === option}
                      onChange={() => handleOptionSelect(index, option)}
                      className="option-input"
                    />
                    <span className="option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 固定UI元素 */}
      {!showIntro && (
        <div className="fixed-ui">
          <button
            className="completion-button "
            style={{
              opacity: isAllCompleted ? 1 : 0,
            }}
            onClick={handleFormCompletion}
          >
            Chat with Experts on WhatsApp
          </button>

          {/* 进度条 */}

          <div className="progress-container">
            <div className="step-indicator">
              {currentStep + 1}
              {' '}
              /
              {formData.length}
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentStep + 1) / formData.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
