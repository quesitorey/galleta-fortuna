import './App.css'

import photo1 from './assets/fortuna-2/fondo1.png'
import photo2 from './assets/fortuna-2/fondo2.png'
import photo3 from './assets/fortuna-2/fondo3.png'

import { useState } from 'react' 
import fortune from './data/phrases.json'
import CookieCard from './components/CookieCard'

export default function App() {

  const [ index, setIndex ] = useState(0)
  const [ phrases, setPhrases ] = useState(0)
  
  const photos = [ photo1, photo2, photo3 ]
  
  const change = () => {
    if( phrases < fortune.length - 1 ){
      setPhrases( phrases + 1 )    
    }else{
      setPhrases(0)
    }
    if( index < photos.length - 1 ){
      setIndex( index + 1 )
    }else{
      setIndex(0)
    }
  }
  
  document.body.style = `background: url(${ photos[index] })`
  
  return (
    <>
      <CookieCard
        phrase={ fortune[phrases] }
        random={ change }
      />
    </>
  )
}
