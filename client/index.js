// let's go!
import React from 'react';
import { render } from 'react-dom';

//import css 
require('./styles/style.css');

import App from './components/App';
import Home from './components/Home';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import SingleRecipe from './components/SingleRecipe';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from "react-redux";
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/recipes" component={RecipeList}></Route>
                <Route path="/starters" component={RecipeList}></Route>
                <Route path="/main-recipes" component={RecipeList}></Route>
                <Route path="/deserts" component={RecipeList}></Route>
                <Route path="/recipes/:id" component={SingleRecipe}></Route>
                <Route path='/recipes' component={Header}></Route>
            </Route>
            
        </Router>
    </Provider>
)
render(

    router,
    document.getElementById('root')
)