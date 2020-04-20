import React from 'react';
const IngredientsList=({ingredients}) =>{
    return (
        <div className="container">
            {ingredients && ingredients.map(
                ingredient =>{
                    return(
                        <ul key={ingredient.id}>
                            <li>{ingredient.original}</li>
                        </ul>
                    )
                }
            )}
        </div>
    )

}
export default IngredientsList