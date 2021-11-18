import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  ReportBox,
  ReportTitle,
  ReportInputBox,
  ReportInput,
  ReportButton,
  MonthSlider,
} from './ReportBalance.styled';
import { getBalance } from '../../../redux/selectors/auth-selectors';

import { Icon } from '../../../hooks/Icon';

export default function ReportBalance() {
  const screenWidth = document.documentElement.scrollWidth;
  const renderOnTablet = screenWidth > 767;
  const renderOnDesktop = screenWidth > 1279;
  const balance = useSelector(getBalance);

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(evt);
  }

  return (
    <ReportBox>
      <NavLink className={'report-balance-link'} to="/">
        <Icon
          name={'icon-back-arrow'}
          size={'18px'}
          viewBox="0 0 18 12"
          color="#FF751D"
        />
        {renderOnTablet && 'Вернуться на главную'}
      </NavLink>
      {!renderOnTablet && <MonthSlider>This is slider</MonthSlider>}
      {renderOnDesktop && (
        <form className="report-balance-form" onSubmit={handleSubmit}>
          <ReportTitle>Баланс:</ReportTitle>
          <ReportInputBox>
            <ReportInput placeholder={balance.toFixed(2) + ' UAH'} />
          </ReportInputBox>
          <ReportButton>ПОДТВЕРДИТЬ</ReportButton>
        </form>
      )}
      {!renderOnDesktop && (
        <>
          <ReportTitle>Баланс:</ReportTitle>
          <ReportInputBox>{balance.toFixed(2) + ' UAH'}</ReportInputBox>
        </>
      )}

      {renderOnTablet && <MonthSlider>This is slider</MonthSlider>}
    </ReportBox>
  );
}
