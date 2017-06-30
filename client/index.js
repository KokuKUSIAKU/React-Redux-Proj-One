import React from 'react';
import { render } from 'react-dom';

//import css 
require('./styles/style.css');

// app containers 
import HomePage from './containers/HomePage';
import RecipePage from './containers/RecipePage';
import Main from './containers/Main';

// app components
import App from './components/App';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import SingleRecipe from './components/SingleRecipe';

// libraries & frameworks 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from "react-redux";
import store, { history } from './store';

// main rout component
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component ={App}>
                <IndexRoute component={HomePage}></IndexRoute>
                <Route path="/recipes" component={ RecipePage }>
                    <Route path="/all" component={RecipeList}></Route>
                    <Route path="/starters" component={RecipeList}></Route>
                    <Route path="/main-recipes" component={RecipeList}></Route>
                    <Route path="/deserts" component={RecipeList}></Route>
                    <Route path="/recipes/:id" component={SingleRecipe}></Route>
                </Route>
            </Route>
        </Router>
    </Provider>
)

render(
    router,
    document.getElementById('root')
)