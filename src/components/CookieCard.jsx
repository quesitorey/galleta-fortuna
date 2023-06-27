import { useState } from 'react'
const CookieCard = ({ phrase, random, randomBack }) => {

  const [ index, setIndex ] = useState(0)

  
  
  return(
    <div>
    <p>Galletas de la <br/> fortuna</p>
      <div className="button">
        <button onClick={ random }>Probar mi suerte</button>
      </div>
    <div className="container">
      <div className="box">
        <h4>{ phrase.phrase }</h4>
      </div>
    </div>
      <div className="container-two">
        <div className="box-two">
          <h5>{ phrase.author }</h5>
        </div>
      </div>
    </div>
  )
}

export default CookieCard