'use strict';

import React from 'react';
//import newrecipes from '../data/newrecipes';
import NewRecipeList from './NewRecipeList';
import Slider from './Slider';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home-page">
                <Header />
                <Nav {...this.props} />
                <Slider />
                <NewRecipeList newrecipelist={this.props.newrecipes} />
                <Footer />
            </div>
        )
    }
}

export default Home; 