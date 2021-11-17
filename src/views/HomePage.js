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

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(state => !state);
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
