import {Link} from 'react-router-dom'
//import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import React from 'react';

function Landing () {
    return(
        <div>
         <Link to = "/Home">
            <button>empecemos</button>
            </Link>
        </div>
    )
}
export default Landing