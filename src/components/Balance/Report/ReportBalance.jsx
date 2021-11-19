import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { userCreateBalance } from 'redux/operations/auth-operation';
import {
  ReportBox,
  ReportTitle,
  ReportInputBox,
  ReportInput,
  ReportButton,
  MonthSlider,
} from './ReportBalance.styled';
import { Icon } from '../../../hooks/Icon';

export default function ReportBalance() {
  const screenWidth = document.documentElement.scrollWidth;
  const renderOnTablet = screenWidth > 767;
  const renderOnDesktop = screenWidth > 1279;

  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth.user.balance);
  useEffect(() => {
    setValue(state);
  }, [state]);

  const handleChangeForm = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(userCreateBalance(value));
  };

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
        <form className="report-balance-form">
          <ReportTitle>Баланс:</ReportTitle>
          <ReportInputBox>
            <ReportInput
              id="inputBalance"
              type="text"
              name="filter"
              onChange={handleChangeForm}
              value={value}
              pattern="\d+(\.\d{2})"
              required
              autoComplete="off"
              placeholder="00.00"
            />
            <label for="inputBalance">UAN</label>
          </ReportInputBox>
          <ReportButton>ПОДТВЕРДИТЬ</ReportButton>
        </form>
      )}
      {!renderOnDesktop && (
        <>
          <ReportTitle>Баланс:</ReportTitle>
          <ReportInputBox>
            <ReportInput
              id="inputBalance"
              type="text"
              name="filter"
              onChange={handleChangeForm}
              value={value}
              pattern="\d+(\.\d{2})"
              required
              autoComplete="off"
              placeholder="00.00"
            />
            <label for="inputBalance">UAN</label>{' '}
          </ReportInputBox>
        </>
      )}

      {renderOnTablet && <MonthSlider>This is slider</MonthSlider>}
    </ReportBox>
  );
}
