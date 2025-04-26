import React from "react";
import Item from "./Item";

const ItemList = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <Item item={item} key={item.id}  />
      ))}
    </div>
  );
};

export default ItemList;
