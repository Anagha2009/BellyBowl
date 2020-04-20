import React,{Component} from 'react';
import axios from 'axios';

import IngredientsList from './ingredientsList';
class SearchDetails extends Component{
    state={
        ingredients:[],
        instructions:'',
        title:'',
        image:''
    }
    componentDidMount(){
        axios.get(`https://api.spoonacular.com/recipes/${this.props.match.params.id}/information?includeNutrition=false&apiKey=887d1f0707f2469aaec6eb1fffc8386c`)
            .then(data=>{
                this.setState({
                    ingredients:data.data.extendedIngredients,
                    instructions:data.data.instructions,
                    title:data.data.title,
                    image:data.data.image
                })
            })
    }
    render(){
        if(this.state.ingredients && this.state.instructions){
            return(
                <div className="search-details container">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{this.state.title}</span>
                            <img src={this.state.image} alt=""/>
                            <h3>Ingredients</h3>
                            <IngredientsList ingredients={this.state.ingredients}/>
                            <h3>Instructions</h3>
                            <p>{this.state.instructions}</p>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className=" container">Its still cooking!</div>
            )
        }
    }
}
export default SearchDetails