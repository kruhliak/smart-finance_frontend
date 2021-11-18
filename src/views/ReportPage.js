import Charts from 'components/Charts/AllCharts';
import ReportLine from 'components/ReportLine/ReportLine';
import ReportList from 'components/ReportList/ReportList';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import UserNav from 'components/UserNav';
import ReportBalance from 'components/Balance/Report/ReportBalance';
import Container from 'components/Container';
import Background from 'components/Background';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategoriesByMonth } from 'redux/operations/transaction-operation';


const categories = new getCategoriesByMonth();
console.log("categories >>", categories)

export default function ReportPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    dispatch(getCategoriesByMonth(['expense', year, month]));
  }, [dispatch]);
  return (
    <>
      <Header>
        <Logo />
        <UserNav />
      </Header>
      <Background typePage="home" />

      <Container typePage="home">
        <ReportBalance />
        <ReportLine></ReportLine>
        <ReportList></ReportList>
        <Charts category="alcohol"/>
      </Container>
    </>
  );
}
