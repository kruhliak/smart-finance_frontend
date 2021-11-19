import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';

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
import {
  getCategoriesByMonth,
  getAllOperationByMonth,
} from 'redux/operations/transaction-operation';

export default function ReportBalance({ category }) {
  const screenWidth = document.documentElement.scrollWidth;
  const renderOnTablet = screenWidth > 767;
  const renderOnDesktop = screenWidth > 1279;

  const [value, setValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth.user.balance);

  useEffect(() => {
    const year = startDate.getFullYear();
    const month = startDate.getMonth() + 1;
    const operation = category === true ? 'expense' : 'income';
    dispatch(getCategoriesByMonth([operation, year, month]));
    dispatch(getAllOperationByMonth([year, month]));
  }, [category, dispatch, startDate]);

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
        <form className="report-balance-form" onSubmit={handleSubmitForm}>
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

      {renderOnTablet && (
        <MonthSlider>
          <ReactDatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="MMMM yyyy"
            showMonthYearPicker
          />
        </MonthSlider>
      )}
    </ReportBox>
  );
}
