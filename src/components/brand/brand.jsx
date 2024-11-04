
// brand-carousel-image
import BergerImage1 from "../../images/barger1.jpg";
import BergerImage2 from "../../images/barger2.jpg";
import BergerImage3 from "../../images/barger3.jpg";
import BergerImage4 from "../../images/barger4.jpg";
import Pizza1 from "../../images/pizza3.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Optional effect like blur

// React-owl-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./brand.css";
const brand = () => {

  const options = {

    loop:true,
    margin: 10,
    responsiveClass: true,
    autoplay:true,
    nav: false,
    dots: false,
    autoplaySpeed: 10,
    mouseDrag: false,
    slideTransition:` linear`,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      <div className="brand-container ml-16 mr-16 mt-5">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <LazyLoadImage 
             src={BergerImage1}
             widht="100%"
            />
          </div>

          <div className="item">
            <LazyLoadImage 
             src={BergerImage2}
             widht="100%"
            />
          </div>
          <div className="item">
            <LazyLoadImage 
             src={BergerImage3}
             widht="100%"
            />
          </div>
          <div className="item">
            <LazyLoadImage 
             src={BergerImage4}
             widht="100%"
            />
          </div>
          <div className="item">
            <LazyLoadImage 
             src={Pizza1}
             widht="100%"
            />
          </div>
          
        </OwlCarousel>

        <div className="product-off">
          <h1>
            Grab Upto <span className="text-green-400">50%</span> Off
          </h1>
          <h1>on Selected Any Pizza!</h1>
          <button className="button">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default brand;
