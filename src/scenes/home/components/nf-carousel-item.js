import React, {Component} from 'react';
import './nf-carousel-item.css';

export default class NfCarouselItem extends Component {

  constructor(props) {
    super(props);
    this.index = Math.floor(Math.random() * 20) + 1;
  }
                        
  render() {
    return (
        <div className="nf-carousel-item-wrapper">
                  
          <div className="gl-align-center">
            <img src={require('../../../resources/images/random/' + this.index + '.jpg')} 
              alt="Promoted post"
              className="img-fluid" 
            />
          </div>

            <div className="col-lg-12">
              <p className="nf-carousel-item-desc-name gl-bold c-dblue"> {this.props.item.name} </p>
            </div>
            <div className="col-lg-12">
              <p className="nf-carousel-item-desc-content"> 
              Teeny Tiny bicicleta to schewl <br /> "Cartman" 
              </p>
            </div>

            <div className="nf-carousel-small-info-wrapper">           
              <div className="gl-align-center" >
                <p className="gl-bold mb-0 nf-carousel-item-desc-span"> {this.props.item.followers}</p>
                <p className="nf-carousel-item-desc-followers"> followers</p>
              </div>

              <div className="gl-align-center">
                <p className="gl-bold mb-0 nf-carousel-item-desc-span"> {this.props.item.following}</p>
                <p className="nf-carousel-item-desc-followers"> following</p>
              </div>
            </div>

          <div className="nf-carousel-item-desc-button-wrapper">
            <button> From <h5 className="d-inline nf-carousel-item-desc-span"> ${this.props.item.price}</h5></button>
          </div>
        </div>
    );
  }
}
