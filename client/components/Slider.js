import React from 'react';

var recettesImages = [
  "boeuf_saute.jpg",
  "poelee_de_veau_aux_carottes_et_oignons.jpg",
  "poelee_gambas.jpg",
  "salade_de_fruits_de_saison.jpg"
];
//var imagesPath = "app/img/recipes/";
var imagesPath ="https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/recipes/"


class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className='slider'>
        <img className="slider-image" src={imagesPath+recettesImages[2]+'?raw=true'} alt='image unavailable' />
        <div className="slider-text-wrapper">
          <div className="slider-text">
            <p>Where cooking amateurs & lovers meet! </p>
          </div>
        </div>
      </div>
    )
  }

};
export default Slider;
