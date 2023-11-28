// Styled.js
import styled from "styled-components";

// Header.js
export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
    padding-bottom: 14px;
`;

export const StyledLogo = styled.div`
    color: #000;
    font-size: 48px;
`;

export const AccountUl = styled.ul`
    list-style: none;
`;

export const AccountLi = styled.li`
    float: left;
    margin-right: 24px;
`;

export const AccountButton = styled.button`
    width: 102px;
    height: 52px;
    font-family: 'Jeju Myeongjo', serif;
    font-size: 16px;
    border: 0 solid;
    border-radius: 5px;
    background-color: #d9d9d9;
`;

// Main.js
export const StyledMain = styled.div`
    border: 1px solid;
    border-radius: 10px;
    width: 641px;
    margin-top: 64px;
    padding: 30px 40px;
`;

export const ModalOpenButton = styled.button`
    width: 40px;
    height: 45px;
    font-size: 32px;
    background-color: #fff;
    border: 1px solid;
    border-radius: 5px;
    margin-bottom: 28px;
`;

// Item.js
export const StyledItem = styled.div`
    width: 467px;
    height: 80px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
`;

export const StyledItemTop = styled.div`
    margin: 12px 23px 9px 23px;
    display: flex;
    justify-content: space-between;
    height: 16px;
`;

export const StyledItemDate = styled.p`
    color: #8d8d8d;
    font-size: 14px;
    margin: 0;
`;

export const StyledItemButtons = styled.div`
    width: 70px;
    display: flex;
    justify-content: center;
`;

export const StyledItemButton = styled.button`
    width: 35px;
    border: none;
    background-color: #fff;
    color: #8d8d8d;
    font-size: 14px;
    cursor: pointer;
`;

export const StyledItemContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const StyledItemTitle = styled.div`
    color: #000;
    font-size: 24px;
    margin-left: 23px;
`;

export const StyledItemMoney = styled.div`
    color: #b72a1f;
    font-size: 24px;
    margin-right: 39px;
`;

// Modal
export const ModalContainer = styled.div`
    position: fixed;
    width: 400px;
    height: 620px;
    border: 1px solid #000;
    border-radius: 10px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;

export const ModalTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ModalName = styled.p`
    color: #000;
    font-size: 24px;
    margin: 20px auto;
`;

export const ModalCloseButton = styled.button`
    background-color: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

export const ModalSubName = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
`;

export const ModalContent = styled.div`
    width: 274px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const ModalLine = styled.div`
    margin-bottom: 20px;
`;

export const ModalP = styled.p`
    color: #000;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const ModalInput = styled.input`
    width: 250px;
    height: 40px;
    border: 1px solid;
    border-radius: 5px;
    padding: 0 6px 0 16px;
    margin-top: 5px;
`;

export const ModalButton = styled.button`
    width: 180px;
    height: 50px;
    font-family: 'Jeju Myeongjo', serif;
    font-size: 18px;
    border: 1px solid;
    border-radius: 5px;
    background-color: #fff;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        background-color: #d9d9d9;
    }
`;

export const ModalBottom = styled.p`
    font-size: 16px;
    margin-top: 30px;
    margin-left: 30px;
`;

export const ModalBottomClick = styled.span`
    font-size: 16px;
    color: #8d8d8d;
    text-decoration: underline;
    cursor: pointer;
`;