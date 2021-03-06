import React from 'react';
import NewRecipe from './NewRecipe';

class NewRecipeList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <article className="new-recipe-list">
                <header className="new-recipe-header">
                    <h1>Recipes of the week !</h1>
                    <p> Morbi lectus turpis, pulvinar at diam eget, tempus congue dolor. </p>
                </header>
                
                {this.props.newrecipelist.map((recipe,index) => <NewRecipe recipe={recipe} key={index} />)}
            </article>
        )
    }
}
export default NewRecipeList;