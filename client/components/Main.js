import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main">
                {React.cloneElement(this.props.children, this.props)}  
            </div>
        )
    }
}

export default Main; 