import React from "react";
import { useCart } from "react-use-cart";
const ItemsCards2 = (props) => {
  const { addItem } = useCart();
  return (
    <div>
      <ul className="md:text-[20px] text-[8px] w-full flex md:block mx-5 font-burger ">
        <li className="py-3 my-3 border-2 px-3 rounded-[28px] gap-2 text-center align-middle text-dcream mx-2 hover:scale-105 cursor-pointer ease-in-out duration-300 ">
          <img src={props.img} alt="" className=" rounded-2xl " />
          <h5 className="py-3  md:px-0 w-[100px] px-6  md:w-[180px] ">
            <span className="text-claret px-1 ">&hearts;</span>
            {props.title}
          </h5>
          <h5 className="py-3">$ {props.price}</h5>
          <p>{props.desc}</p>
          <button className="" onClick={() => addItem(props.item)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2rem"
              viewBox="0 0 448 512"
              className=" fill-dcream bg-claret p-2 h-10 w-10 m-2 rounded-full cursor-pointer"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ItemsCards2;
