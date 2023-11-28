// Item.js
import React, { useState } from "react";
import ChangeItemModal from "./ChangeItemModal";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./Actions";
import { StyledItem, StyledItemButton, StyledItemContent, StyledItemDate, StyledItemButtons, StyledItemMoney, StyledItemTitle, StyledItemTop } from "./Styled";
import { FaPenToSquare, FaSquareXmark } from "react-icons/fa6";

const Item = ({ item }) => {
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
                <StyledItem>
                    <StyledItemTop>
                        <StyledItemDate>{item.date}</StyledItemDate>
                        <StyledItemButtons>
                            <StyledItemButton onClick={openModal}><FaPenToSquare /></StyledItemButton>
                            <StyledItemButton onClick={handleRemove}><FaSquareXmark /></StyledItemButton>
                            {showModal && <ChangeItemModal closeModal={closeModal} />}
                        </StyledItemButtons>
                    </StyledItemTop>
                    <StyledItemContent>
                        <StyledItemTitle>{item.title}</StyledItemTitle>
                        <StyledItemMoney>{item.money}</StyledItemMoney>
                    </StyledItemContent>
                </StyledItem>
            ))}
        </div>
    );
};
export default Item;