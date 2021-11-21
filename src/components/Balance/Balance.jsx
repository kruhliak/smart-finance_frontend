import { Box, Title, InputBox, Button, Input } from './Balance.styled';
import { Icon } from '../../hooks/Icon';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SpeechBalloon from 'components/SpeechBalloon';
import { userCreateBalance } from 'redux/operations/auth-operation';

export default function Balance() {
  const width = document.documentElement.scrollWidth;
  const renderByWidth = width > 767;
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

  const showNotification = () => {
    if (state === 0) {
      // return console.log('state === 0');
      <SpeechBalloon/>
      console.log('show not-n');
    }
  }
  
  return (
    <Box>
      {!renderByWidth && (
        <NavLink className="balance-link" to="/report">
          Перейти к отчетам
          <Icon
            name={'icon-balance'}
            size={'14px'}
            viewBox="0 0 14 14"
            color="#52555F"
          />
        </NavLink>
      )}

      <form className="balance-form" onSubmit={handleSubmitForm}>
        <Title>Баланс:</Title>
        <InputBox>
          <Input
            id="inputBalance"
            type="number"
            name="filter"
            onChange={handleChangeForm}
            onClick={showNotification}
            value={value}
            pattern="\d+(\.\d{2})"
            title="0.00"
            required
            autoComplete="off"
            placeholder="0.00"
            max="99999999.99"
          />
          <label htmlFor="inputBalance">UAH</label>
          <Button type="submit">ПОДТВЕРДИТЬ</Button>
        </InputBox>
      </form>

      {renderByWidth && (
        <NavLink className="balance-link" to="/report">
          Перейти к отчетам
          <Icon
            name={'icon-balance'}
            size={'14px'}
            viewBox="0 0 14 14"
            color="#52555F"
          />
        </NavLink>
      )}
    </Box>
  );
}
