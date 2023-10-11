import React from "react";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";
import MenuBar from "./menuBar";

const Header = () => {
  const { items } = useCart();
  return (
    <header>
      <nav className="cursor-pointer mx-auto flex min-h-full w-full justify-between relative bg-dorange font-burger">
        <NavLink to="/">
          <div className="flex  h-[40px] my-4 py-6 px-10 md:py-3 items-center">
            <h1 className="text-dcream font-thin  text-[20px]">1992 BURGER</h1>
          </div>{" "}
        </NavLink>
        <div className={` lg:block overflow-hidden`}>
          <ul
            className=" items-center text-justify justify-between gap-10 hidden place-content-center align-middle mt-3 
             px-16 lg:flex lg:backdrop-blur-0"
          >
            <NavLink to="/">
              <li
                href="#features"
                className="px-8 py-2 text-dcream font-burger font-thin text-lg  mb-5 "
              >
                Home
              </li>
            </NavLink>
            <NavLink to="/Profile">
              <li
                href="#download"
                className="px-8 py-2 text-dcream font-burger font-thin text-lg  mb-5"
              >
                Offers
              </li>
            </NavLink>
            <NavLink to="/Skill">
              <li
                href="#faq"
                className="px-8 py-2 text-dcream font-burger font-thin text-lg flex  mb-5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="text-claret px-2 rounded-full">
                  {items.length === 0 ? "" : items.length}
                </span>
              </li>
            </NavLink>

            <NavLink to="/Contact">
              <li
                href="/"
                className="px-8 py-2 text-dcream font-burger font-thin text-lg  mb-5"
              >
                Contact
              </li>
            </NavLink>
          </ul>
        </div>
        <div
          id="menu-btn"
          className="z-30 static right-0 text-white px-5 lg:hidden py-1"
        >
          <MenuBar />
        </div>
      </nav>
    </header>
  );
};

export default Header;
