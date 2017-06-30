'use strict';

import React from 'react';
//import newrecipes from '../data/newrecipes';
import NewRecipeList from './NewRecipeList';
import Slider from './Slider';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home-page">
                <Slider />
                <NewRecipeList newrecipelist={this.props.newrecipes} />
            </div>
        )
    }
}

export default Home; 