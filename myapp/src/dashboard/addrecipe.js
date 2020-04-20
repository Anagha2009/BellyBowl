import React,{Component} from 'react';
import {connect} from 'react-redux';
import {createRecipe} from '../store/reducers/actions/recipeActions';
import {Redirect} from 'react-router-dom'

class CreateRecipe extends Component {
    state = {
      title: '',
      ingredients:[],
      instructions:''
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state);
      this.props.createRecipe(this.state);
    }
    render() {
      const {auth}=this.props;
      if(!auth.uid)return<Redirect to='/signin'/>
      return (
        <div className="container">
          <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Create a New Recipe</h5>
            <div className="input-field">
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">Recipe Title</label>
            </div>
            <div className="input-field">
              <input type="text" id='ingredients' onChange={this.handleChange} />
              <label htmlFor="ingredients">Ingredients</label>
            </div>
            <div className="input-field">
              <textarea id="instructions" className="materialize-textarea" onChange={this.handleChange}></textarea>
              <label htmlFor="instructions">Instructions</label>
            </div>
            <div className="input-field">
              <button className="btn grey darken-3">ADD</button>
            </div>
          </form>
        </div>
      )
    }
  }
  const mapStateToProps =(state)=>{
    return{
     auth:state.firebase.auth
    }
  }
  const mapDispatchToProps=(dispatch)=>{
      return{
          createRecipe:(recipe)=>dispatch(createRecipe(recipe))
      }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CreateRecipe);