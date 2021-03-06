import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../store/reducers/actions/authActions'
class signup extends Component {
    state= {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.signUp(this.state);
        //console.log(this.state);
    }
    render() {
        const {authError,auth}=this.props
        if(auth.uid)return<Redirect to='/'/>
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h4>SIGN UP</h4>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="LastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn grey darken-3">Sign Up</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>:null}
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        auth:state.firebase.auth,
        authError:state.auth.authError
    }
}
const mapDispatchToProps=(dispatch)=>{
 return{
     signUp:(newUser)=>dispatch(signUp(newUser))
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(signup)
