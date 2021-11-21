import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import { userCreateBalance } from 'redux/operations/auth-operation';
import {
  ReportBox,
  ReportTitle,
  ReportInputBox,
  ReportInput,
  ReportButton,
  MonthSlider,
  InputWrapper,
} from './ReportBalance.styled';
import { Icon } from '../../../hooks/Icon';
import {
  getCategoriesByMonth,
  getAllOperationByMonth,
} from 'redux/operations/transaction-operation';

export default function ReportBalance({ category, setSelectedCard }) {
  const screenWidth = document.documentElement.scrollWidth;
  const renderOnTablet = screenWidth > 767;
  const renderOnDesktop = screenWidth > 1279;

  const [value, setValue] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  console.log('startDate>>', startDate);

  const dispatch = useDispatch();
  const state = useSelector(state => state.auth.user.balance);

  useEffect(() => {
    setValue(state);
  }, [state]);

  useEffect(() => {
    setSelectedCard('');
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();
    const operation = category === true ? 'expense' : 'income';
    dispatch(getCategoriesByMonth([operation, year, month]));
    dispatch(getAllOperationByMonth([year, month]));
  }, [category, dispatch, startDate]);

  const handleChangeForm = e => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(userCreateBalance(value));
  };

  const onClick = e => {
    const btnName = e.currentTarget.className;
    const month = startDate.getMonth();

    switch (btnName) {
      case 'increment':
        setStartDate(new Date(startDate.setMonth(month + 1)));
        break;
      case 'decrement':
        setStartDate(new Date(startDate.setMonth(month - 1)));

        break;
      default:
        new Date();
    }
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
      {!renderOnTablet && (
        <MonthSlider>
          <p>Текущий период:</p>
          <InputWrapper>
            <button
              type="button"
              className="decrement"
              onClick={e => onClick(e)}
            >
              <Icon
                name={'arrow-back'}
                size={'7px'}
                viewBox="0 0 7 12"
                color="#FF751D"
                fill="transparent"
              />
            </button>
            <ReactDatePicker
              locale={ru}
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="LLLL yyyy"
              // disabled
              showMonthYearPicker
              className="inputDatePicker"
            />
            <button
              type="button"
              className="increment"
              onClick={e => onClick(e)}
            >
              <Icon
                name={'arrow-next'}
                size={'7px'}
                viewBox="0 0 7 12"
                color="#FF751D"
                fill="transparent"
              />
            </button>
          </InputWrapper>
        </MonthSlider>
      )}
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
            <label htmlFor="inputBalance">UAH</label>
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
            <label htmlFor="inputBalance">UAH</label>{' '}
          </ReportInputBox>
        </>
      )}

      {renderOnTablet && (
        <MonthSlider>
          <p>Текущий период:</p>
          <InputWrapper>
            <button
              type="button"
              className="decrement"
              onClick={e => onClick(e)}
            >
              <Icon
                name={'arrow-back'}
                size={'7px'}
                viewBox="0 0 7 12"
                color="#FF751D"
                fill="transparent"
              />
            </button>
            <ReactDatePicker
              locale={ru}
              selected={startDate}
              onChange={date => setStartDate(date)}
              dateFormat="LLLL yyyy"
              // disabled
              showMonthYearPicker
              className="inputDatePicker"
            />
            <button
              type="button"
              className="increment"
              onClick={e => onClick(e)}
            >
              <Icon
                name={'arrow-next'}
                size={'7px'}
                viewBox="0 0 7 12"
                color="#FF751D"
                fill="transparent"
              />
            </button>
          </InputWrapper>
        </MonthSlider>
      )}
    </ReportBox>
  );
}
