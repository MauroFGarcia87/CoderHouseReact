import React from "react";

import Item from "./Item";

const ItemList = ({ list }) => {
  return (
    <div className="container">
      <div className="row" >
        {list.map((item) => (
          <Item item={item} key={item.id} />
          ))}
      </div>
        
      
    </div>
  );
};

export default ItemList;
