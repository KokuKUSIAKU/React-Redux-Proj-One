import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import* as actionCreators from '../actions'; 

import Main from './Main'

function mapStateToProps(state){
    var recipes= state.filter=='all'|| !state.filter?state.recipes:state.recipes.filter(recipe=>recipe.type ===state.filter);
     return{
        recipes,
        filter:state.filter
    }
}


function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(Main); 

export default App;