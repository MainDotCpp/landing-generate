import { useEffect, useState } from 'react'
import UsForm from '@/templates/UsForm'
import { redirect } from '@/utils/redicrect'
import intro1 from './intro1.png'
import intro2 from './intro2.png'
import './style.css'

export const config = {
  title: 'forms',
}

const data = [
  {
    id: 1,
    text: 'Do you invest in the stock market?',
    subtitle: 'e.g. This can be any investment through a Brokerage, IRA, 401k, etc.',
    required: true,
    options: ['Yes', 'No'],
    selected: null,
  },
  {
    id: 2,
    text: 'Which types of investments do you make?',
    subtitle: 'Select all that apply',
    required: true,
    options: ['Stocks', 'Crypto', 'ETFs - VOO,QQQ,etc', 'Other'],
    selected: null,
  },
  {
    id: 3,
    text: 'Do you agree to follow group rules?',
    subtitle: '✅ No fake news ✅ No ads/spam ✅ Friendly discussions',
    required: true,
    options: ['Yes', 'No'],
    selected: null,
  },
]

function Page() {
  return (
    <UsForm
      data={data}
      introTitle={<h1>👋</h1>}
      introDescription={(
        <>
          <div style={{ fontWeight: 200 }}>- 1971: 25 hours of work to buy 1 S&P 500 share</div>
          <div style={{ fontWeight: 200 }}>- 2024: 195 hours of work to buy 1 S&P 500 share</div>
          <div style={{ fontWeight: 200 }}>- Reality: Salaried workers can't catch up with stock investors</div>
          <div style={{ fontWeight: 200 }}>📈 Join Our WhatsApp Group & Get Daily Trade Insights</div>
          <div>(Answer 3 quick questions to unlock access)</div>
        </>
      )}
    />
  )
}

export default Page
