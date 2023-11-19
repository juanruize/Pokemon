import {Link} from 'react-router-dom'
//import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import React from 'react';
import "../Nav/Nav.styles.css";
import logo from '../../assets/pokemon.webp'
import Search from '../Search/Search';

const NavBar =()=> {
    return(
        <div className= 'nav'>
            <img src= {logo} className='logo'/>
            <Search className='search'/>
            <Link to='/about'>
                <button>ABOUT</button>
            </Link>
            <Link to='/form'>
                <button>CREATE</button>
            </Link>

         
         
        </div>
    )
}
export default NavBar