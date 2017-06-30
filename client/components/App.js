import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

import Main from './Main'; 
import Header from './Header';
import Footer from './Footer';

import NavBar from '../containers/NavBar';
import Page from '../containers/Main'
import HomePage from '../containers/HomePage';
 

const App = (props) =>(
    <div className="main">
        <Header/>
        <NavBar/>
        {props.children}
        <Footer/>
    </div>
)

export default App;