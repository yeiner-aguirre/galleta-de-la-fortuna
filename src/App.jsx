import { useState } from 'react'
import './App.css'
import phrases from "./utils/phrases.json"
import getRamdonFromArr from './utils/getRandomFromArr'
import Phrase from './components/Phrase'
import Button from './components/Button'
import arrPhotos from './utils/photos.json'

function App() {
  const phraseRandom = getRamdonFromArr(phrases)
  const photoRandom = getRamdonFromArr(arrPhotos)
  
  const [quoteRandom, setQuoteRandom] = useState(phraseRandom)
  const [photoR, setphotoR] = useState(photoRandom)
  
  const objtStyle = {
    backgroundImage: `url(/fondo${photoR}.jpg)`
  }
  return (
    <div className="app" style={objtStyle}>
      <h1 className='app_title'>HOLA!!! soy sofi a continuacion podras encontrar frases que mejor me describen... DISFRUTA </h1>
      <div className='app_card'>
        <Phrase quoteRandom = {quoteRandom} />
        <Button 
        setQuoteRandom = {setQuoteRandom}
        setphotoR = {setphotoR}
        />
      </div>
    </div>
  )
}

export default App
