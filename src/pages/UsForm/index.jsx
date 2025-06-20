import { useEffect, useState } from 'react'
import UsForm from '@/templates/UsForm'
import { redirect } from '@/utils/redicrect'
import intro1 from './intro1.png'
import intro2 from './intro2.png'
import intro3 from './intro3.png'
import './style.css'

export const config = {
  title: 'forms',
}

const data = [
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

function Page() {
  return (
    <UsForm
      data={data}
      introImage={intro3}
      introTitle={<h5>Are you ready to start the 28-DAY TRADING CHALLENGE?</h5>}
      introDescription={(
        <div>Entering the market carries risks, invest with caution By proceeding, you agree with Terms and Conditions, Privacy Policy, Subscription Terms</div>
      )}
    />
  )
}

export default Page
