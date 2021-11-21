import Container from 'components/Container';
import { HomePageWrap } from './HomePage.styled';
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
  getCategoriesByMonth,
} from 'redux/operations/transaction-operation';
// import SpeechBalloon from 'components/SpeechBalloon';

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    dispatch(getSummaryByYear(year));
    dispatch(getAllOperationByMonth([year, month]));
    dispatch(getCategoriesByMonth(['expense', year, month]));
  }, [dispatch]);

  return (
    <>
      <Header>
        <Logo />
        <UserNav />
      </Header>

      <Background typePage="home" />

      <Container>
        <HomePageWrap>
          <Balance />
          <UserTabs />
        </HomePageWrap>
      </Container>
    </>
  );
}
