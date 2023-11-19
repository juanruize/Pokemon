// import "./About.module.ccs"
import miFoto from '../assets/mifoto.jpg'
import React from 'react';
import back from "../../assets/pokemon.webp"
import { Link } from 'react-router-dom';

function About () {
    return(
        <div>
          <Link to="/home">
          <img src={back}/>
          </Link>
            <div>
        <h2>Acerca de Mí</h2>
        <img 
        src={miFoto} 
        alt="Mi Foto" 
        className="profile-photo" 
        width='300px'
        />
        <p>Hola, soy Juan Guillermo Ruiz Escalante. Soy un apasionado por los carros.</p>
        <p>En mi tiempo libre, disfruto de un buen libro y la compañia de mi esposa. También me encanta aprender nuevas tecnologías y mantenerme al tanto de las últimas tendencias en programación.</p>
        <p>Siempre estoy interesado en nuevas oportunidades y colaboraciones. No dudes en ponerte en contacto conmigo si quieres discutir un proyecto o simplemente saludar.</p>
        <div className="social-buttons">
        <a href="https://www.facebook.com/juangui.ruiz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        
      </div>
      </div>
        </div>
    )
}
export default About