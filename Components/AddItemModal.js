// AddItemModal.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Actions";
import Select from "react-select";

const AddItemModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [money, setMoney] = useState('');
    
    const handleAddItem = () => {
        const newItem = {
            date,
            title,
            money,
        };
        dispatch(addItem(newItem));
        closeModal();
    }

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
            <h2>내역 추가</h2>
            <button onClick={closeModal}>x</button>
            <div className="modal-content">
                <div className="date">
                    <p>날짜 : </p>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="title">
                    <p>제목 : </p>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요" />
                </div>
                <div className="money">
                    <p>금액 : </p>
                    <Select options={expend} defaultValue={selectExpend} onChange={setSelectExpend} />
                    <input type="text" value={money} onChange={(e) => setMoney(e.target.value)} placeholder="금액을 입력해주세요" />
                </div>
                <div className="category">
                    <p>카테고리 : </p>
                    <Select options={category} defaultValue={selectCategory} onChange={setSelectCategory} />
                </div>
                <button onClick={handleAddItem}>추가</button>
            </div>
        </div>
    );
};
export default AddItemModal;