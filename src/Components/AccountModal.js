// AccountModal.js

const AccountModal = ({ closeModal, modalType, openLoginModal, openSignupModal }) => {
    let accountModalContent;
    if (modalType === 'login') {
        accountModalContent = (
            <div className="modal-container">
                <div className="modal-content">
                    <h2>소비생활</h2>
                    <button onClick={closeModal}>x</button>
                    <h3>로그인</h3>
                    <p>아이디</p>
                    <input type="text" />
                    <p>비밀번호</p>
                    <input type="text" />
                    <button>로그인</button>
                    <p>계정이 없으신가요? <span onClick={openSignupModal}>회원가입</span></p>
                </div>
            </div>
        );
    } else if (modalType === 'signup') {
        accountModalContent = (
            <div className="modal-container">
                <div className="modal-content">
                    <h2>소비생활</h2>
                    <button onClick={closeModal}>x</button>
                    <h3>회원가입</h3>
                    <p>아이디</p>
                    <input type="text" />
                    <p>비밀번호</p>
                    <input type="text" />
                    <p>비밀번호 확인</p>
                    <input type="text" />
                    <button>회원가입</button>
                    <p>이미 계정이 있으신가요? <span onClick={openLoginModal}>로그인</span></p>
                </div>
            </div>
        );
    }

    return (accountModalContent);
};

export default AccountModal;