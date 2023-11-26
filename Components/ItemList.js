// ItemList.js
import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = () => {
    const items = useSelector((state) => state.items);
    console.log("items:",items);

    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;