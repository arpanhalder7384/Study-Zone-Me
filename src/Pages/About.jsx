import React from 'react'
import SmartTextAreaWithSpeech from '../Components/SmartTextAreaWithSpeech'

export default function About() {
  return (
    <div>
      <SmartTextAreaWithSpeech onSend={(text)=>console.log(text)}/>
    </div>
  )
}
