// Main.js
import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import Item from "./Item";
import { Provider } from "react-redux";
import Store from "./Store";

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
            <div>
                <div>
                    <p>expense list</p>
                    <button onClick={openModal}>+</button>
                    {showModal && <AddItemModal closeModal={closeModal} />}
                    <Item />
                </div>
                <div>
                    <p>monthly graph</p>
                </div>
                <div>
                    <p>circular graph</p>
                </div>
            </div>
        </Provider>
    );
};

export default Main;