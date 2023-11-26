// Item.js
import React, { useState } from "react";
import ChangeItemModal from "./ChangeItemModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "./Actions";

const Item = ({ item }) => {
    console.log("item:", item);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    const items = useSelector((state) => state.items);

    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeItem(item.id));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>
                    <div className="date">
                        <p>날짜 {item.date}</p>
                    </div>
                    <div className="title">
                        <h3>제목 {item.title}</h3>
                    </div>
                    <div className="money">
                        <h3>금액 {item.money}</h3>
                    </div>
                    <div className="slide">
                        <button onClick={openModal}>수정</button>
                        {showModal && <ChangeItemModal closeModal={closeModal} />}
                        <button onClick={handleRemove}>삭제</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Item;