import {Link} from 'react-router-dom'
import style from "../Landing/Landing.module.css"
import pokebola from "../assets/pokemon.webp"
import go from '../assets/pokepoke.png'

function Landing () {
    return(
        <>
        
        <div className={style.landing}>
            <img src={pokebola} className={style.img}/>
         <Link to = "/Home">
            <h1>go</h1>
            </Link>
        
        </div>
        
        </>
    )
}
export default Landing