import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../store/reducers/actions/authActions' 

const Signin = (props) =>{
 return (
    <ul className="right">
       
        {/* <li><NavLink to="/home" className="black-text">  Home</NavLink> </li> */}
        <li><NavLink to="/dashboard" className="black-text">Add Recipe</NavLink></li>
        <li><NavLink to="/search" className="black-text">Search</NavLink> </li>
        <li><NavLink to="/logout" onClick={props.signOut}>LogOut</NavLink></li>
        
        <li><NavLink to="/" className="btn btn-floating black lighten-2">
        {props.profile.initials}
        </NavLink></li>
    </ul>
    
 );
}

const mapDispatchToProps =(dispatch)=>{
    return{
        signOut:()=>dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(Signin)
