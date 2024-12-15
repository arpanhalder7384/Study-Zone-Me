import React from 'react'
import SmartTextAreaWithSpeech from '../Components/SmartTextAreaWithSpeech'

export default function About() {
  return (
    <>
      <header>

      </header>

      <main>
        <div className='mt-8'>
          <SmartTextAreaWithSpeech onSend={(text) => console.log(text)} />
        </div>
      </main>

    </>
  )
}
