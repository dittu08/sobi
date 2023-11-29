// Header.js
import React, { useState } from "react";
import AccountModal from "./AccountModal";
import { AccountButton, AccountLi, AccountUl, StyledHeader, StyledLogo } from "./Styled";

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
        <StyledHeader>
            <StyledLogo>소비생활</StyledLogo>
            <div>
                <AccountUl>
                    <AccountLi><AccountButton onClick={openLoginModal}>로그인</AccountButton></AccountLi>
                    <AccountLi><AccountButton onClick={openSignupModal}>회원가입</AccountButton></AccountLi>
                </AccountUl>
            </div>
            {loginModalOpen && <AccountModal closeModal={closeLoginModal} modalType='login' openSignupModal={openSignupModal} />}
            {signupModalOpen && <AccountModal closeModal={closeSignupModal} modalType='signup' openLoginModal={openLoginModal} />}
        </StyledHeader>
    )
}

export default Header;