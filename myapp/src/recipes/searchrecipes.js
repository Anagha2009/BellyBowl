import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 class Search extends Component{
     state=
     {
       query:'',
       results:[]
     }
     handleChange=(e)=>{
       this.setState({
        query : e.target.value
       })
      
     }
     handleSubmit=(e)=>{
       e.preventDefault();
        axios.get(`https://api.spoonacular.com/recipes/search?query=${this.state.query}&apiKey=887d1f0707f2469aaec6eb1fffc8386c`)
         .then(data => {
           console.log(data);
           this.setState({
             results:data.data.results
           })
           console.log(this.state.results)
         });
       }
      
       render(){
         return(
           <div className="Container">
               <form className="search-bar input-field" onSubmit={this.handleSubmit}>
          <label htmlFor="query"/>
          <input type="text" id="query" placeholder="dish,ingredients,recipe..." onChange={this.handleChange} ></input>
           <br/>
           <button className="btn grey darken-3 medium">
            <span>Search</span>
            <i className="material-icons right">search</i>
          </button>
          {/* <div className="section search-image">
          <img src="./img/searchimg.jpg" alt=""></img>
          </div> */}
       </form>
            <div className="container">
              <div className="search-results">
                <div className="row">
                <div className="col l6">
                 {this.state.results.map(
                   result =>{
                      return (
                       <Link to={'/api/recipe/'+ result.id } key={result.id}> 
                       
                         <div className="card grey lighten-4" key={result.id}>
                         <div className="card-content">
                         <h5 className="card-title" style={{margin:5,padding:2}}>{result.title}</h5>
                         <div className="card-image image">
                         <img src={`https://spoonacular.com/recipeImages/${result.image}`} alt="" />
                        </div>
                        </div>
                        </div>
                    
                        </Link>
              
                      )
                  }
                )}
                </div>
              </div>
              </div>

            </div>


           </div>
         )
       }
 }
 export default Search