import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article className="grid-new-recipe">
                <div className="new-recipe">
                    <img className="fullwidth-img" src={this.props.recipe.image} alt=""/>
                </div>
                <div className="user-pic"></div>
                <h4 className="user-name"> By Name </h4>
                <h3>{this.props.recipe.name}</h3>
            </article>
        )
    }
}

export default User;