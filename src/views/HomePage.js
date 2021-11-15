// import Chart from '../components/Charts/MobileChart';
// import Modal from 'components/Modal';
// import CustomBtnStyled from 'components/Buttons/CustomButton';
import Container from 'components/Container';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import Balance from 'components/Balance/Balance';
import Title from 'components/Title';
import TitleWrapper from 'components/TitleWrapper';
import Subtitle from 'components/Subtitle';
import UserNav from 'components/UserNav';
import ExpenseIncomeForm from 'components/ExpenseIncomeForm/ExpenseIncomeForm';

export default function HomePage() {
  return (
    <>
      {/* <Chart/> */}
      <Container>
        <Header>
          <Logo />
          {/* тут должна быть проверка на авторизованность юзера */}
          {/* {isLogged && <UserNav />} */}
        </Header>

        <TitleWrapper>
          <Title text="Kapu$ta" />
          <Subtitle text="smart finance" />
        </TitleWrapper>
        <ExpenseIncomeForm />

        <Balance />

        {/* <Modal text="Вы действительно хотите выйти?">
        <CustomBtnStyled text="Да, ёпта"/>
        <CustomBtnStyled backBtn text="Пардон" />
        <CustomBtnStyled googleBtn text="Google"/>
      </Modal> */}
      </Container>
    </>
  );
}
