import React, { useRef } from "react";
import { useCart } from "react-use-cart";
import OrderConfirm from "./pages/orderconfirm";
import { useState } from "react";
const Cart = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const svgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== svgRef.current) {
      setOpen(false);
    }
  });
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <h1 className="text-[50px] text-claret font-burger text-center min-h-[80vh]">
        your cart is Empty
      </h1>
    );

  return (
    <section className=" bg-dorange ">
      <div className=" gap-2 list-none px-5 rounded-3xl min-h-[80vh] pb-5">
        <h5 className="text-dcream ">
          cart({totalUniqueItems}) total Items: ({totalItems})
        </h5>
        <div className=" md:flex md:flex-1 justify-between text-center align-middle items-center ">
          <table>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr
                    className="md:text-[16px] text-[10px] font-sans text-justify "
                    key={index}
                  >
                    <div className="py-3 my-5 border-2 px-2 rounded-[28px] flex gap-2 text-dcream">
                      <td>
                        <img
                          src={item.img}
                          alt=""
                          className="h-[30px] w-[40px] md:h-[50px] md:w-[60px] rounded-3xl my-3"
                        />
                      </td>
                      <td className="my-5 w-[100px] lg:w-[150px]">
                        {item.title}
                      </td>
                      <td className="my-5 md:my-6 w-[50px] ">$ {item.price}</td>

                      <button
                        className=" "
                        onClick={(e) => {
                          e.preventDefault();
                          updateItemQuantity(item.id, item.quantity - 1);
                        }}
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
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                      <td className="my-5 md:my-6"> {item.quantity} </td>
                      <button
                        className=" "
                        onClick={(e) => {
                          e.preventDefault();
                          updateItemQuantity(item.id, item.quantity + 1);
                        }}
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
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                      <button
                        className=" px-2 md:m-2 cursor-pointer text-dorange bg-dcream rounded-3xl font-burger"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className=" text-dcream font-sans mx-20 shadow-2xl md:p-10 rounded-3xl ">
            <div className=" w-fit align-center">
              <h2 className="mx-5 px-5 m-2 cursor-pointer text-dcream rounded-full text-[20px] font-burger">
                Total Price :
              </h2>
              <h2 className="mx-5 py-2 m-2 cursor-pointer text-dorange bg-dcream font-sans font-bold rounded-full text-[18px]">
                $ {cartTotal}
              </h2>
            </div>
            <div
              onClick={() => emptyCart()}
              className="flex flex-col text-center gap-5 text-dcream font-sans  w-full"
            >
              <button className=" mx-2 px-5 py-2 m-4 cursor-pointer text-dorange bg-dcream font-semibold font-sans rounded-full">
                Clear Cart
              </button>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
              className="mx-2 px-5 my-10 cursor-pointer text-claret bg-dcream font-burger rounded-3xl text-[25px]"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div
          ref={menuRef}
          className="absolute top-[20%] left-[10%] md:top-[20%]  md:left-[40%]"
        >
          <OrderConfirm />
        </div>
      )}
    </section>
  );
};

export default Cart;
