import React from 'react'
import SmartTextAreaWithSpeech from '../Components/SmartTextAreaWithSpeech'

export default function About() {
  return (
    <>
      <header>

      </header>

      <main>
        <div className='mt-8 flex w-full justify-center'>
          <SmartTextAreaWithSpeech
            onSend={(text) => console.log(text)}
            customStyles="w-[100%] p-4" />
        </div>
      </main>

    </>
  )
}
