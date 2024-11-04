
// react state
import React, { useState } from 'react';

// React icon
import { MdAccountCircle } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { IoSearchCircleSharp } from "react-icons/io5";

// Import Image
import Logo from "../../images/Logo.png";

// import Account component sing in or sing up perpas
import Account from '../account/account.jsx'


import "./navbar.css"
const navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <div className="navbar-container ml-16 mr-16  mt-10">
        <div className="nav flex justify-between align-middle gap-20">
          <div className="logo">
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>

          <ul className="ul-menu flex gap-10 align-middle">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">Reservation</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="car-or-account flex gap-5">
            <div className="input border border-neutral-300 rounded-full">
              <input
                type="text"
                className="rounded-full p-2 min-w-80 border-hidden outline-none bg-slate-20 "
                placeholder="Search Food...."
              />
              <IoSearchCircleSharp className="mr-5 text-2xl" />
            </div>

            <div className="input dropdown">
              <div className='flex gap-1' onClick={toggleDropdown}>
              <MdAccountCircle className="cart-icon-by-man" />
              <p> Account </p>
              </div>

              { isOpen && (
                <div className='dropdown-menu'>
                    <Account/>
                </div>
              )}
            </div>

            <div className="input">
              <div className="count">0</div>
              <MdShoppingCart className="cart-icon-by-man" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default navbar