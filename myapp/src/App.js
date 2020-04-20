import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './layout/navbar';
import login from './authentication/login';
import signup from './authentication/signup';
import SearchDetails from './recipes/searchDetails';
import Dashboard from './dashboard/dashboard';
import Search from './recipes/searchrecipes';
import RecipeDetails from './dashboard/recipeDetails';
import Home from './layout/home'
// import Header from './layout/header';
class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div className="App">
       <Navbar />
       
       <Switch>
         <Route path='/login' component={login}/>
         <Route path='/signup' component={signup}/>
         <Route exact path='/' component={Home}/>
         <Route path='/logout' component={Home}/>
         <Route path='/search' component={Search}/>
         <Route path='/recipe/:id' component={RecipeDetails}/>
         <Route path='/dashboard' component={Dashboard}/>
         <Route path='/api/recipe/:id' component={SearchDetails}/>
       </Switch>
      
      </div>
    </BrowserRouter>
  );
}
}

export default App;
