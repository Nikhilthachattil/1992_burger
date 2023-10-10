import React from "react";
import data from "../Data/data";
import ItemsCards2 from "../cards/itemsCards2";

function theMenu() {
  return (
    <div className="flex">
      {data.productData.map((item, index) => {
        return (
          <ItemsCards2
            img={item.img}
            title={item.title}
            desc={item.desc}
            price={item.price}
            item={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default theMenu;
