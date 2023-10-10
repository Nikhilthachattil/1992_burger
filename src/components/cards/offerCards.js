import React from "react";
import { useCart } from "react-use-cart";
const OfferCards = (props) => {
  const { addItem } = useCart();
  return (
    <div className="relative text-center align-middle flex flex-wrap w-full h-full font-burger bg-ddblue py-2 text-dcream divide-y-2">
      <div className=" md:h-[500px] mt-5 w-[700px] mx-2 md:mx-0">
        <img
          className="rounded-[10px] mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          src={props.img}
          alt=""
        />
      </div>
      <div className="list-none flex flex-col py-2 text-dcream md:mx-8 cursor-pointer">
        <ul className="md:text-[20px] ">
          <li className="py-4 mx-2 my-3 md:mx-0 border-2 px-2 rounded-[26px] justify-around gap-2 bg-claret md:text-[40px]">
            <span className="text-dorange">&hearts;</span> {props.title}
          </li>
          <li className=" mx-2 md:mx-0 my-3 border-2 px-2 rounded-[26px] flex gap-2 justify-center align-start md:w-[570px] mg:text-lg py-2 bg-mgreen">
            <p>{props.desc}</p>
          </li>
          <li className="py-4 mx-2 md:mx-0 my-3 border-2 px-2 rounded-[26px] flex gap-2 justify-around md:text-[20px] bg-claret">
            <div>$ {props.price}</div>
          </li>
        </ul>
        <button
          className="py-4 mx-2 md:mx-0 my-3 border-2 px-2 rounded-[26px] flex gap-2 justify-around md:text-[20px] bg-dorange hover:bg-claret"
          onClick={() => addItem(props.item)}
        >
          ADD ME
        </button>
      </div>
    </div>
  );
};

export default OfferCards;
