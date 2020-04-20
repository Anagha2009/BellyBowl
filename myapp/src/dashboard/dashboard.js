import React,{Component} from 'react';
import RecipeList from './recipeList'
import {connect} from 'react-redux';
import CreateRecipe from './addrecipe';
import {firestoreConnect} from 'react-redux-firebase';
 import {compose} from 'redux';
 import {Redirect} from 'react-router-dom'
class Dashboard extends Component{
    render(){
      const {recipes,auth}=this.props;
      if(!auth.uid)return<Redirect to='/signin'/>
        return(
            <div className="dashboard container">
              <div className="row">
              <div className="col l6">
                <RecipeList recipes={recipes}/>

              </div>
              <div className="col l6">
                <CreateRecipe/>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
  console.log(state);
  return{
    recipes:state.firestore.ordered.recipes,
    auth:state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'recipes'}
  ])
)(Dashboard);