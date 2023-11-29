// AddItemModal.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Actions";
import Select from "react-select";
import { ModalCloseButton, ModalContainer, ModalName, ModalTop, ModalContent, ModalLine, ModalP, ModalInput, ModalButton } from "./Styled";
import { FaXmark } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

const AddItemModal = ({ closeModal }) => {
    const dispatch = useDispatch();
    const [id, setId] = useState(uuidv4());
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [money, setMoney] = useState('');
    
    const handleAddItem = () => {
        const newItem = {
            id,
            date,
            title,
            money,
            expend: selectExpend.value,
            category: selectCategory.value,
        };
        dispatch(addItem(newItem));
        closeModal();
        setId(uuidv4());
        console.log(
            'id',id,
            'date',date,
            'title',title,
            'money',money,
            'expend',expend,
            'cate',category,
        )
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
        <ModalContainer>
            <ModalTop>
                <ModalName>내역 추가</ModalName>
                <ModalCloseButton onClick={closeModal}><FaXmark /></ModalCloseButton>
            </ModalTop>
            <ModalContent>
                <ModalLine>
                    <ModalP>날짜</ModalP>
                    <ModalInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </ModalLine>
                <ModalLine>
                    <ModalP>제목</ModalP>
                    <ModalInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목을 입력해주세요"/>
                </ModalLine>
                <ModalLine>
                    <ModalP>금액</ModalP>
                    <Select
                        options={expend}
                        defaultValue={selectExpend}
                        onChange={setSelectExpend} />
                    <ModalInput type="text" value={money} onChange={(e) => setMoney(e.target.value)} placeholder="금액을 입력해주세요" />
                </ModalLine>
                <ModalLine>
                    <ModalP>카테고리</ModalP>
                    <Select
                        options={category}
                        defaultValue={selectCategory}
                        onChange={setSelectCategory} />
                </ModalLine>
                <ModalButton onClick={handleAddItem}>추가</ModalButton>
            </ModalContent>
        </ModalContainer>
    );
};
export default AddItemModal;