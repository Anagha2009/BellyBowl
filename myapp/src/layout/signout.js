import React from 'react';
import { NavLink } from 'react-router-dom';
const SignOut = () =>{
 return (
    <ul className="right">
       
        <li><NavLink to="/signup" className="black-text">SignUp</NavLink> </li>
        <li><NavLink to="/login"className="black-text">LogIn</NavLink></li>
        
    </ul>
 );
}
export default SignOut