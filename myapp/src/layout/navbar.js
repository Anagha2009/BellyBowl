import React from 'react';
import {Link} from 'react-router-dom';
import Signin from './signin';
import SignOut from './signout';
import {connect} from 'react-redux';
const Navbar = (props) =>{
    const {auth,profile} = props;
    const links =auth.uid ? <Signin profile={profile}/>:<SignOut/>
 return(
    <nav className="nav-wrapper teal accent-4">
        <div className="container">
            <Link to='/' className="brand-logo left">BELLYBOWL</Link>
            {links}
        </div>
     </nav>
 );
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar)
