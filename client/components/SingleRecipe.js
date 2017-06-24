import React from 'react';
import Recipe from './Recipe';
import Ingredients from './Ingredients';
class SingleRecipe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id } = this.props.params;
        const name = id.split('-').join(' ');
        const index = this.props.recipes.findIndex(recipe => recipe.name == name)
        const recipe = this.props.recipes[index];
        return (
            <div className="single-recipe">
                <div className="recipe-wrap">
                    <div className="recipe-box">
                        <Recipe recipe={recipe} title="top" />
                    </div>
                </div>
                <div className="ingredients">
                    <h2 className="ingredient-header"> INGREDIENTS </h2>
                    <Ingredients ingredients={recipe.ingredients}></Ingredients>
                </div>
            </div>
        )
    }
}


export default SingleRecipe; 