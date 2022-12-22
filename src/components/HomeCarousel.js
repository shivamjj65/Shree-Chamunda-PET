import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import "./css/App.css";

export default function ImageCarousel() {
return (
	<div className="slides"> 
	<MDBCarousel showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={img3}
        alt='...'
      >
        <h2 className='title'>PET Bottles</h2>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={img2}
        alt='...'
      >
        <h2 className='title'>Big PET Bottles</h2>
	   </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={img4}
        alt='...'
      >
        <h2 className='title'>Fridge Bottles</h2>
      </MDBCarouselItem>
	  
    </MDBCarousel>
	</div>
);
}
