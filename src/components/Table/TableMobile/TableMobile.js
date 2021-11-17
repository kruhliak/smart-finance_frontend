import Modal from 'components/Modal';
import { useState } from 'react';
import CustomBtnStyled from 'components/Buttons/CustomButton';
import {
  Wrapper,
  LeftSide,
  SubLeftSide,
  RightSide,
  DeleteBtn,
  Date,
  Desc,
  Category,
  Value,
} from './TableMobile.styled';
import { Icon } from 'hooks/Icon';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/operations/transaction-operation';

const TableMobile = ({ operation, color }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState('');
  const toggleModal = () => setIsModalOpen(state => !state);

  const dispatch = useDispatch();
  const onDeleteContact = id => {
    dispatch(deleteTransaction(id));
    toggleModal();
  };

  const handleDeleteClick = idToDel => {
    setId(idToDel);
    toggleModal();
  };

  console.log(id);
  return (
    <>
      {isModalOpen && (
        <Modal text="Вы уверены?" onClose={toggleModal}>
          <CustomBtnStyled text="Да" onClick={() => onDeleteContact(id)} />
          <CustomBtnStyled backBtn text="Нет" onClick={toggleModal} />
        </Modal>
      )}
      {operation &&
        operation.list.map(item => (
          <Wrapper key={item._id}>
            <LeftSide>
              <Desc>{item.description}</Desc>
              <SubLeftSide>
                <Date>
                  {`${item.day}.
                  ${item.month}.
                  ${item.year}`}
                </Date>
                <Category>{item.category}</Category>
              </SubLeftSide>
            </LeftSide>
            <RightSide>
              {color ? (
                <Value red>{`-${item.value} грн.`}</Value>
              ) : (
                <Value>{`+${item.value} грн.`}</Value>
              )}
              <DeleteBtn
                type="button"
                onClick={() => {
                  handleDeleteClick(item._id);
                }}
              >
                <Icon
                  name="icon-delete"
                  size="18px"
                  viewBox="0 0 20 20"
                  color="#52555F"
                />
              </DeleteBtn>
            </RightSide>
          </Wrapper>
        ))}
    </>
  );
};

export default TableMobile;
