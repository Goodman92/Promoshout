import React, {Component} from 'react';
import NfCarouselItem from './nf-carousel-item';
import './nf-carousel.css';

import { CSSTransitionGroup } from 'react-transition-group';


const NfCarousel = (props) => {

		const items = props.data.items.slice().splice(props.data.index * props.data.size, props.data.size);
	
		return(
			<div>
				<div className="row nf-carousel-slider">

					{props.data.page === 0 && props.data.index === 0 ? 
						null : <i className="fa fa-2x fa-angle-right fa-rotate-180 nf-carousel-toggle nf-carousel-button-wrapper" aria-hidden="true" onClick={props.getPrevious} />
					}
			    
			    {items.map((item, index) => (
							<div className="col-lg-3 col-md-6 col-sm-6" key={item.key}>
		            <CSSTransitionGroup
		              transitionName="example"
		              transitionAppear={true}
		              transitionAppearTimeout={400}
		              transitionEnter={false}
		              transitionLeave={false}>

					          <NfCarouselItem item={item} />

		            </CSSTransitionGroup>
			        </div>
			    ))}

			    <i className="fa fa-2x fa-angle-right nf-carousel-toggle nf-carousel-button-wrapper" aria-hidden="true" onClick={props.getNext} />
  			</div>
  		</div>
)};

export default NfCarousel;