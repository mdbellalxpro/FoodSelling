
// React icon 
import { IoIosArrowDown } from "react-icons/io";

import "./productmenu.css"
const productmenu = () => {
  return (
    <>
      <div className="product-menu m-16 flex justify-between">
        <div className="item flex gap-8">
          <div className="product-type">
            <h3>Head phone</h3>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <h3>Price</h3>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <h3>Rivew</h3>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <h3>Color</h3>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <h3>Filter</h3>
            <IoIosArrowDown className="arrow" />
          </div>
          <div className="product-type">
            <h3>All material</h3>
            <IoIosArrowDown className="arrow" />
          </div>
        </div>

        <div className="short-by">
          <div className="product-type border border-neutral-300">
            <h3>Short by</h3>
            <IoIosArrowDown className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default productmenu