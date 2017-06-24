function filter(state=[], action){
    //console.log('filter reducer fired', action);
    switch(action.type){
        case 'SET_FILTER':
            return action.filter;
        default:
            return state; 
    }
}

export default filter; 