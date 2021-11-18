import { useMediaQuery } from 'hooks/useMediaQuery';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';
import CustomBtnStyled from 'components/Buttons/CustomButton';
import Modal from 'components/Modal';
import { deleteTransaction } from 'redux/operations/transaction-operation';

const Table = ({ operation, color }) => {
  const [id, setId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMatches = useMediaQuery('(min-width: 768px)');
  const toggleModal = () => setIsModalOpen(state => !state);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteTransaction(id));
    toggleModal();
  };

  return (
    <>
      {isModalOpen && (
        <Modal text="Вы уверены?" onClose={toggleModal}>
          <CustomBtnStyled text="Да" onClick={() => onDeleteContact(id)} />
          <CustomBtnStyled backBtn text="Нет" onClick={toggleModal} />
        </Modal>
      )}
      {isMatches ? (
        <TableDesktop
          operation={operation}
          color={color}
          toggleModal={toggleModal}
          setId={setId}
        />
      ) : (
        <TableMobile
          operation={operation}
          color={color}
          toggleModal={toggleModal}
          setId={setId}
        />
      )}
    </>
  );
};

export default Table;
