import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const id = this.props.recipe.name.split(' ').join('-');
        const { index } = this.props
        return (
            <div className='recipe' id={id}>
                <Link to={`/recipes/${id}`} style={{textDecorationLine:'none'}}>
                    {this.props.title==="top" && <h1>{ this.props.recipe.name}</h1>}
                    <img className="fullwidth-img" src={this.props.recipe.image} />
                    {this.props.title==="bottom" &&<h3>{ this.props.recipe.name}</h3>}
                </Link>
            </div>
        )
    }
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default Recipe;