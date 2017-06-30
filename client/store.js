
'use strict'; 
import {createStore, compose} from 'redux'; 
import {syncHistoryWithStore} from 'react-router-redux'; 
import {browserHistory } from 'react-router'; 


import rootReducer from './reducers/index'; 
import recipes from './data/recipes';
//import newrecipes from './data/newrecipes';
const filter ="";
const newrecipes =[7,6,2];
const defaultState = {
    recipes, 
    filter, 
    newrecipes
}; 

const store = createStore(rootReducer, defaultState); 

export const history = syncHistoryWithStore(browserHistory, store);

export default store; 