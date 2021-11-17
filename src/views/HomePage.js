import { useState } from 'react';
import Modal from 'components/Modal';
import CustomBtnStyled from 'components/Buttons/CustomButton';
import Container from 'components/Container';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import Balance from 'components/Balance/Balance';
import UserNav from 'components/UserNav';
import UserTabs from 'components/UserTabs';
import Background from 'components/Background';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getSummaryByYear,
  getAllOperationByMonth,
} from 'redux/operations/transaction-operation';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(state => !state);

  const dispatch = useDispatch();
  useEffect(() => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    dispatch(getSummaryByYear(year));
    dispatch(getAllOperationByMonth([year, month]));
  }, [dispatch]);

  return (
    <>
      <Header>
        <Logo />
        <UserNav />
      </Header>
      <Background typePage="home" />

      <Container typePage="home">
        {isModalOpen && (
          <Modal text="Вы уверены?" onClose={toggleModal}>
            <CustomBtnStyled text="Да" />
            <CustomBtnStyled backBtn text="Нет" />
          </Modal>
        )}
        <Balance />
        <UserTabs onClickModal={toggleModal} />

        {/* <Modal text="Вы действительно хотите выйти?">
        <CustomBtnStyled text="Да, ёпта"/>
        <CustomBtnStyled backBtn text="Пардон" />
        <CustomBtnStyled googleBtn text="Google"/>
      </Modal> */}
      </Container>
    </>
  );
}
