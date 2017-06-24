import React from 'react';

class Ingredients extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div >
                <ul className="ingredient-list">
                    {this.props.ingredients.map((ingredient, index) =>
                        <li className="ingredient" key={index}>{ingredient}</li>)}
                </ul>
            </div>
        )
    }
}


export default Ingredients;