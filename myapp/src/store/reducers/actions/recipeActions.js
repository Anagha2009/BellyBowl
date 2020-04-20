export const createRecipe =(recipe) =>{
    return(dispatch,getState, {getFirebase,getFirestore} )=>{
        //make async call to db
        const firestore=getFirestore();
        firestore.collection('recipes').add({
            ...recipe
        }).then(()=>{
            dispatch({type:'CREATE_RECIPE',recipe});
        }).catch((err)=>{
            dispatch({type:'CREATE_RECIPE_ERROR',err});
        })
        
    };
};