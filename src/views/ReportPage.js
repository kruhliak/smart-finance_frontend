import Charts from 'components/Charts/AllCharts';
import ReportLine from 'components/ReportLine/ReportLine';
import ReportList from 'components/ReportList/ReportList';
import Header from 'components/Header';
import Logo from 'components/Logo/Logo';
import UserNav from 'components/UserNav';
import ReportBalance from 'components/Balance/Report/ReportBalance';

export default function ReportPage() {
  return (
    <>
      <Header>
        <Logo />
        <p>HomePage</p>
        <UserNav />
        {/* тут должна быть проверка на авторизованность юзера */}
        {/* {isLogged && <UserNav />} */}
      </Header>
      <ReportBalance />
      <ReportLine></ReportLine>
      <ReportList></ReportList>
      <Charts />
    </>
  );
}
