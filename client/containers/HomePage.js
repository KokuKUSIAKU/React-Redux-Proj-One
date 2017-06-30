import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import Home from '../components/HomePage';

function mapStateToProps(state) {
    var newrecipes;

    if(state.newrecipes && state.newrecipes.length ){
        newrecipes = state.newrecipes.map((val, index)=>state.recipes[val]) 
    } else{
      newrecipes =[];  
    }
    
    return {
        newrecipes
    }
}

const HomePage = connect(
    mapStateToProps,
)(Home);

export default HomePage