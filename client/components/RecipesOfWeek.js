
import React from 'react';
import Recipe from './Recipe';
import Ingredients from './Ingredients';

class RecipesOfWeek extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
         const indexes =[2,3,6];
         
        return (
            <div className="single-recipe">
                <div className="recipe-wrap">
                    <div className="recipe-box">
                        <Recipe recipe={recipe} title="top" />
                    </div>
                </div>
                <div className="ingredients">
                    <h2> INGREDIENTS </h2>
                    <Ingredients ingredients={recipe.ingredients}></Ingredients>
                </div>
            </div>
        )
    }
}

export default RecipesOfWeek; 