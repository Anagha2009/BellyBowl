import React from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
 const RecipeDetails=(props)=> {
    //  const id=props.match.params.id;
    //  console.log(props);
     const {recipe} = props;
     if(recipe) {
         return(
            <div className="container section recipe-details">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title" >{recipe.title}</span>
                        <h6>Ingredients</h6>
                        <ul>
                            <li>{recipe.ingredients}</li>
                        </ul>
                        <h6>Instructions</h6>
                        <p>{recipe.instructions}</p>
                    </div>
                 
                </div>
            </div>
         )
    }
    else{
        return(
            <div className="container center">
                <p>Its still cooking!</p>
            </div>
        )
    }
    
}

 const mapStateToProps=(state,ownProps)=>{
     const id=ownProps.match.params.id
     const recipes= state.firestore.data.recipes
     const recipe=recipes ? recipes[id] :null
    return{
        recipe:recipe
    }
 }
export default compose(
 connect(mapStateToProps),
 firestoreConnect([
     {collection:'recipes'}
 ])
)(RecipeDetails);
