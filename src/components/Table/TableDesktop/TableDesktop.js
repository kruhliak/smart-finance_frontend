import Modal from 'components/Modal';
import { useState } from 'react';
import CustomBtnStyled from 'components/Buttons/CustomButton';
import {
  Wrapper,
  Th,
  TheadTable,
  TableS,
  Td,
  Tr,
  Value,
  Desc,
  Category,
  Date,
  DeleteBtn,
  Scroll,
} from './TableDesktop.styled';
import { Icon } from 'hooks/Icon';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/operations/transaction-operation';

const TableDesktop = ({ operation, color }) => {
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
      <Wrapper>
        <TableS>
          <TheadTable>
            <tr>
              <Th className="date">Дата</Th>
              <Th className="desc">Описание</Th>
              <Th className="category">Категория</Th>
              <Th className="value">Сумма</Th>
              <Th></Th>
              <Th></Th>
            </tr>
          </TheadTable>
        </TableS>
        <Scroll>
          <TableS body>
            <tbody>
              {operation &&
                operation.list.map(item => (
                  <Tr key={item._id}>
                    <Date>
                      {`${item.day}.
                  ${item.month}.
                  ${item.year}`}
                    </Date>
                    <Desc>{item.description}</Desc>
                    <Category>{item.category}</Category>
                    {color ? (
                      <Value red>{`-${item.value} грн.`}</Value>
                    ) : (
                      <Value>{`+${item.value} грн.`}</Value>
                    )}

                    <Td>
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
                    </Td>
                  </Tr>
                ))}
            </tbody>
          </TableS>
        </Scroll>
      </Wrapper>
    </>
  );
};

export default TableDesktop;
