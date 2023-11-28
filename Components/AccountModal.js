import { ModalBottom, ModalBottomClick, ModalButton, ModalCloseButton, ModalContainer, ModalContent, ModalInput, ModalLine, ModalName, ModalP, ModalSubName, ModalTop } from "./Styled";
import { FaXmark } from "react-icons/fa6";

// AccountModal.js
const AccountModal = ({ modalType, closeModal, openLoginModal, openSignupModal }) => {
    let accountModalContent;
    if (modalType === 'login') {
        accountModalContent = (
            <ModalContainer style={{ height: '520px' }}>
                <ModalTop>
                    <ModalName>소비생활</ModalName>
                    <ModalCloseButton onClick={closeModal}><FaXmark /></ModalCloseButton>
                </ModalTop>
                <ModalContent className="modal-content">
                    <ModalLine>
                        <ModalSubName>로그인</ModalSubName>
                    </ModalLine>
                    <ModalLine>
                        <ModalP>아이디</ModalP>
                        <ModalInput type="text" />
                    </ModalLine>
                    <ModalLine>
                        <ModalP>비밀번호</ModalP>
                        <ModalInput type="password" />
                    </ModalLine>
                    <ModalButton style={{ marginTop: '30px' }}>로그인</ModalButton>
                    <ModalBottom>계정이 없으신가요? <ModalBottomClick onClick={openSignupModal}>회원가입</ModalBottomClick></ModalBottom>
                </ModalContent>
            </ModalContainer>
        );
    } else if (modalType === 'signup') {
        accountModalContent = (
            <ModalContainer>
                <ModalTop>
                    <ModalName>소비생활</ModalName>
                    <ModalCloseButton onClick={closeModal}><FaXmark /></ModalCloseButton>
                </ModalTop>
                <ModalContent className="modal-content">
                    <ModalLine>
                        <ModalSubName>회원가입</ModalSubName>
                    </ModalLine>
                    <ModalLine>
                        <ModalP>아이디</ModalP>
                        <ModalInput type="text" />
                    </ModalLine>
                    <ModalLine>
                        <ModalP>비밀번호</ModalP>
                        <ModalInput type="password" />
                    </ModalLine>
                    <ModalLine>
                        <ModalP>비밀번호 확인</ModalP>
                        <ModalInput type="password" />
                    </ModalLine>
                    <ModalButton style={{ marginTop: '30px' }}>회원가입</ModalButton>
                    <ModalBottom style={{ marginLeft: '20px' }}>이미 계정이 있으신가요? <ModalBottomClick onClick={openLoginModal}>로그인</ModalBottomClick></ModalBottom>
                </ModalContent>
            </ModalContainer>
        );
    }

    return (accountModalContent);
};

export default AccountModal;