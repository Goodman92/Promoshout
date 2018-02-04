import React, {Component} from 'react';
import NfCarouselItem from './nf-carousel-item';
import './nf-carousel.css';


const NfCarousel = (transcluded) => (

		<div className="row nf-carousel-slider">
	    <i className="fa fa-2x fa-angle-right fa-rotate-180 nf-carousel-toggle nf-carousel-button-wrapper" aria-hidden="true" onClick={transcluded.getPrevious} />
	    {transcluded.data.items.map((item, index) => (
	        index >= transcluded.data.index && index < transcluded.data.size + transcluded.data.index ?
	        <div className="col-lg-3 col-md-6 col-sm-6" key={item.key}>
	          <NfCarouselItem item={item} />
	        </div> : null
	    ))}
	    <i className="fa fa-2x fa-angle-right nf-carousel-toggle nf-carousel-button-wrapper" aria-hidden="true" onClick={transcluded.getNext} />
  	</div>
);

export default NfCarousel;