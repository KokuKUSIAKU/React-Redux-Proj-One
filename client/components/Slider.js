import React from 'react';

var recettesImages = [
  "boeuf_saute.jpg",
  "poelee_de_veau_aux_carottes_et_oignons.jpg",
  "poelee_gambas.jpg",
  "salade_de_fruits_de_saison.jpg"
];

const imagesPath = "https://github.com/KokuKUSIAKU/recipebox/blob/master/app/img/recipes/"

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    var images = document.querySelectorAll('.slider-image-wrapper');
    console.log(images);
    images[0].classList.add('slider-animate');
  }

  render() {
    return (
      <div className='slider'>
        {recettesImages.map((recette, index) => (
          <article className="slider-item" key={index}>
            <div className="slider-image-wrapper" >
              <img className="slider-image"
                src={imagesPath + recettesImages[index] + '?raw=true'}
                data-index={index}
                style={{ 'zIndex': -1 + 5 * index }}
                alt="image unavailable" />
            </div>
          </article>

        ))}

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
