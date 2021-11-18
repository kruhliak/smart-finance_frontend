import { useMediaQuery } from 'hooks/useMediaQuery';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TableMobile from './TableMobile/TableMobile';
import TableDesktop from './TableDesktop/TableDesktop';
import CustomBtnStyled from 'components/Buttons/CustomButton';
import Modal from 'components/Modal';
import {
  deleteTransaction,
  getAllOperationByMonth,
} from 'redux/operations/transaction-operation';

const Table = ({ operation, color }) => {
  const [id, setId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const isMatches = useMediaQuery('(min-width: 768px)');
  const toggleModal = () => setIsModalOpen(state => !state);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteTransaction(id));
    toggleModal();
    setIsDelete(true);
  };

  //console.log(isDelete);

  useEffect(() => {
    if (isDelete) {
      const dateNow = new Date();
      const year = dateNow.getFullYear();
      const month = dateNow.getMonth() + 1;
      dispatch(getAllOperationByMonth([year, month]));
    }
  }, [dispatch, isDelete]);

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
