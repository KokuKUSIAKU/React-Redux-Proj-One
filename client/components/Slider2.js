var React = require('react');
var ReactDOM = require('react-dom');
import sliderImages from '../data/slider';

class RecetteSlider extends React.Component{
  constructor(props){
    super(props);  
  }

  render(){
    return(
      <div className='recetteSlider'>
       
        <div className="text-wrapper">
          <div className="text">
            <p>Where cooking amateurs & lovers meet! </p>
          </div>
        </div>
      </div>
    )
  }

};
export default RecetteSlider;
