import { useState } from 'react';
import Modal from 'components/Modal';
import CustomBtnStyled from 'components/Buttons/CustomButton';
import Container from 'components/Container';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import Balance from 'components/Balance/Balance';
// import Title from 'components/Title';
// import TitleWrapper from 'components/TitleWrapper';
// import Subtitle from 'components/Subtitle';
import UserNav from 'components/UserNav';
import UserTabs from 'components/UserTabs';
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
      <Container>
        {isModalOpen && (
          <Modal text="Вы уверены?" onClose={toggleModal}>
            <CustomBtnStyled text="Да" />
            <CustomBtnStyled backBtn text="Нет" />
          </Modal>
        )}
        <Header>
          <Logo />
          <UserNav />
        </Header>
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
