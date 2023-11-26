// ChangeItemModal.js
import { useState } from "react";
import Select from "react-select";

const ChangeItemModal = ({ closeModal }) => {
    const expend = [
        { value: "expend", label: "지출" },
        { value: "income", label: "수입" },
    ]
    const [selectExpend, setSelectExpend] = useState(expend[0]);

    const category = [
        { value: "edu", label: "교육" },
        { value: "transport", label: "교통" },
        { value: "shopping", label: "쇼핑" },
        { value: "food", label: "식비" },
        { value: "transfer", label: "이체" },
    ]
    const [selectCategory, setSelectCategory] = useState(category[0]);

    return (
        <div className="modal-container">
            <h2>내역 수정</h2>
            <button onClick={closeModal}>x</button>
            <div className="date">
                    <p>날짜 : </p>
                    <input type="date" />
                </div>
                <div className="title">
                    <p>제목 : </p>
                    <input type="text" placeholder="제목을 입력해주세요" />
                </div>
                <div className="money">
                    <p>금액 : </p>
                    <Select options={expend} defaultValue={selectExpend} onChange={setSelectExpend} />
                    <input type="text" placeholder="금액을 입력해주세요" />
                </div>
                <div className="category">
                    <p>카테고리 : </p>
                    <Select options={category} defaultValue={selectCategory} onChange={setSelectCategory} />
                </div>
        </div>
    );
};
export default ChangeItemModal;