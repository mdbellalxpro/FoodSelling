
// React icon
import { FaStar } from "react-icons/fa";

// Pizza StoreImage
import PizzaImage1 from "../../images/pizza1.jpg";
import PizzaImage2 from "../../images/pizza2.jpg";
import PizzaImage3 from "../../images/pizza3.jpg";
import PizzaImage4 from "../../images/pizza4.jpg";

//Berger StoreImage
import BergerImage1 from "../../images/barger1.jpg";
import BergerImage2 from "../../images/barger2.jpg";
import BergerImage3 from "../../images/barger3.jpg";
import BergerImage4 from "../../images/barger4.jpg";

// Briyani StoreImage
import BriyaniImage1 from "../../images/briyani.jpeg";
import BriyaniImage2 from "../../images/briyani1.jpeg";
import BriyaniImage3 from "../../images/briyani2.jpeg";
import BriyaniImage4 from "../../images/briyani3.jpeg";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional effect like blur


import "./store.css";
const store = () => {
  return (
    <>
      <div className="store m-16">
        <h2>Pizza For you!</h2>
        <div className="store-product flex gap-10 justify-between">
          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={PizzaImage1} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>

            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>

            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={PizzaImage2} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>

            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={PizzaImage3} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>

            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={PizzaImage4} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>

            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="store m-16">
        <h2>Barger For you!</h2>
        <div className="store-product flex gap-10 justify-between">
          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BergerImage1} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>

            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BergerImage2} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BergerImage3} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BergerImage4} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <div className="store m-16">
        <h2>Briyani For you!</h2>
        <div className="store-product flex gap-10 justify-between">
          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BriyaniImage1} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BriyaniImage2} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BriyaniImage3} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>

          <div className="main-product">
            <div className="product-item">
              <LazyLoadImage
                alt="An amazing view"
                src={BriyaniImage4} // Image source
                effect="blur" // Optional effect: blur, opacity, or none
                width="100%" // Optional width
                height="100%" // Optional height
              />
            </div>
            <div className="details flex justify-between align-middle mt-3 gap-20px">
              <div className="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt.</h3>
              </div>
              <div>
                <p>$20</p>
              </div>
            </div>
            <div className="button">
              <div className="star flex">
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
                <FaStar className="fastar" />
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default store;
