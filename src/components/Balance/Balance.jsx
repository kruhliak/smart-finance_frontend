import { useSelector } from 'react-redux';
import { Box, Title, InputBox, Button, Input } from './Balance.styled';
import { Icon } from '../../hooks/Icon';
import { NavLink } from 'react-router-dom';
import { getBalance } from '../../redux/selectors/auth-selectors';

export default function Balance() {
  const balance = useSelector(getBalance);
  const width = document.documentElement.scrollWidth;
  const renderByWidth = width > 767;

  function handleSubmit(evt) {
    evt.preventDefault();

    console.log(evt.target[0].value);
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

      <Title>Баланс:</Title>
      <form className="balance-form" action="" onSubmit={handleSubmit}>
        <InputBox>
          <Input type="number" placeholder={balance.toFixed(2) + ' UAH'} />
        </InputBox>
        <Button type="submit">ПОДТВЕРДИТЬ</Button>
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
