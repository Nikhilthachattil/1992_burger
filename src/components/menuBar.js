import React, { useRef } from "react";
import { useCart } from "react-use-cart";
import { useState } from "react";
import img20 from "../assets/menubar.png";
import { NavLink } from "react-router-dom";

function MenuBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const svgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== svgRef.current) {
      setOpen(false);
    }
  });
  const { items } = useCart();
  return (
    <div>
      <nav className="cursor-pointer mx-auto flex min-h-full w-full justify-between relative bg-dorange z-50">
        {open && (
          <div ref={menuRef} className={`lg:block overflow-hidden`}>
            <ul
              className="right-0 absolute items-center text-justify justify-between gap-10
            top-0 px-16 z-30 text-sm rounded-xl lg:flex py-5 backdrop-blur-3xl lg:backdrop-blur-0 text-dcream border-dorange"
            >
              <NavLink to="/">
                <li
                  onClick={() => setOpen(false)}
                  href="#features"
                  className="px-8 py-2 border-[1px] rounded-lg shadow-md mb-5 hover:text-white"
                >
                  Home
                </li>
              </NavLink>
              <NavLink to="/Profile">
                <li
                  onClick={() => setOpen(false)}
                  href="#download"
                  className="px-8 py-2 text-white border-[1px] rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Offers
                </li>
              </NavLink>
              <NavLink to="/Skill">
                <li
                  onClick={() => setOpen(false)}
                  href="#faq"
                  className=" flex px-8 py-2 text-white border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
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
                  onClick={() => setOpen(false)}
                  href="/"
                  className="px-8 py-2 text-white border-[1px] border-green-500 rounded-lg shadow-md mb-5 hover:bg-green-500 hover:text-white"
                >
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>
        )}

        <div
          id="menu-btn"
          className=" static right-0 text-white px-5 lg:hidden py-5 z-50"
        >
          <img
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            ref={svgRef}
            className="md:w-6 md:h-6 w-5 h-5 cursor-pointer "
            src={img20}
            alt=""
          />
          <span className="text-claret px-2 rounded-full">
            {items.length === 0 ? "" : items.length}
          </span>
        </div>
      </nav>
    </div>
  );
}

export default MenuBar;
