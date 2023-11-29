// Main.js
import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import Item from "./Item";
import { Provider } from "react-redux";
import Store from "./Store";
import { ModalOpenButton, StyledMain } from "./Styled";

const Main = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Provider store={Store}>
            <StyledMain>
                <ModalOpenButton onClick={openModal}>&#43;</ModalOpenButton>
                {showModal && <AddItemModal closeModal={closeModal} />}
                <Item />
            </StyledMain>
        </Provider>
    );
};

export default Main;