import React from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions';
import Home from '../components/Home';

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


function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const HomePage = connect(
    mapStateToProps,
    mapDispachToProps
)(Home);

export default HomePage