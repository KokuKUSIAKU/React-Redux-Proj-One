import React from 'react';
import { Link } from 'react-router';
import Header from '../components/Header';
import NewRecipeList from '../components/NewRecipeList';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Main from '../components/Main';

function mapStateToProps(state) {
    var recipes = state.filter == 'all' || !state.filter ? state.recipes : state.recipes.filter(recipe => recipe.type === state.filter);
    return {
        recipes,
        filter: state.filter
    }
}


function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const RecipePage = connect(
    mapStateToProps,
)(Main);

export default RecipePage; 