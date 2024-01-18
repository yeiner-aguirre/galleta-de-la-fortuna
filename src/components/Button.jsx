import getRamdonFromArr from "../utils/getRandomFromArr"
import phrases from "../utils/phrases.json"
import arrPhotos from '../utils/photos.json'

const Button = ( {setQuoteRandom,setphotoR} ) => {
    const handleChangePhrase = () =>{
        setQuoteRandom (getRamdonFromArr(phrases))
        setphotoR(getRamdonFromArr(arrPhotos))
    }
  return (
    <button className="app_btn" onClick= {handleChangePhrase}>cambia a tu nueva frase</button>
  )
}

export default Button