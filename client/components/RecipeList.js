import React from 'react';
import Recipe from './Recipe';

class RecipeList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const list = this.props.recipes.map((recipe, index) =>
            <div className="grid-recipe" key={index}>
                <Recipe recipe={recipe} key={index} index={index} title="bottom"/>
            </div>
        )

        return (
            <div className='recipe-list'>
                {list}
            </div>
        )
    }
}

export default RecipeList; 