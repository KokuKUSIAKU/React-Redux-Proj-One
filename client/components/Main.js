import React from 'react'; 
import {Link} from 'react-router';
import Header from './Header'; 
import NewRecipeList from './NewRecipeList';
import Footer from './Footer';
import Nav from './Nav'

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Nav {...this.props} />
                {React.cloneElement(this.props.children, this.props)}              
                <Footer /> 
            </div>
        )
    }
}

export default Main; 