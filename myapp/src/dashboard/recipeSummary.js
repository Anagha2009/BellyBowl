import React from 'react';
const RecipeSummary = ({recipe}) =>{
    return(
        <div className="card blue lighten-5 z-depth-0">
                <div className="card-content black-text text-darken -3">
                    <span className="card-title">{recipe.title}</span>
                    <p>{recipe.ingredients}</p>
                </div>
            </div>
    );
};
export default RecipeSummary;