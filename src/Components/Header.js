// Header.js
import React, { useState } from "react";
import AccountModal from "./AccountModal";

const Header = () => {
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [signupModalOpen, setSignupModalOpen] = useState(false);

    const openLoginModal = () => {
        setSignupModalOpen(false);
        setLoginModalOpen(true);
    };

    const closeLoginModal = () => {
        setLoginModalOpen(false);
    };

    const openSignupModal = () => {
        setLoginModalOpen(false);
        setSignupModalOpen(true);
    };

    const closeSignupModal = () => {
        setSignupModalOpen(false);
    };

    return (
        <header>
            <div className="logo">소비생활</div>
            <div>
                <ul>
                    <li><button onClick={openLoginModal}>로그인</button></li>
                    <li><button onClick={openSignupModal}>회원가입</button></li>
                </ul>
            </div>
            {loginModalOpen && <AccountModal closeModal={closeLoginModal} modalType='login' openSignupModal={openSignupModal} />}
            {signupModalOpen && <AccountModal closeModal={closeSignupModal} modalType='signup' openLoginModal={openLoginModal} />}
        </header>
    )
}

export default Header;