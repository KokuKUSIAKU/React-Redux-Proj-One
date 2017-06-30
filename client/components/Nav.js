import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                <Link to='/' >Home</Link>
                <Link to='all' onClick={this.props.setFilter.bind(this,'all')}>Recipes</Link>
                <Link to='starters' onClick={this.props.setFilter.bind(this,'starter')} >Starter</Link>
                <Link to='main-recipes' onClick={this.props.setFilter.bind(null, 'main')}>Main</Link>
                <Link to='deserts' onClick={this.props.setFilter.bind(null, 'desert')}>Deserts</Link>
            </nav>
        )
    }
}

export default Nav; 