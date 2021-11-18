import { Box, Title, InputBox, Button, Input } from './Balance.styled';
import { Icon } from '../../hooks/Icon';
import { NavLink } from 'react-router-dom';

export default function Balance() {
  const width = document.documentElement.scrollWidth;
  const renderByWidth = width > 767;

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

      <form className="balance-form" action="" method="post">
        <Title>Баланс:</Title>
        <InputBox>
          <Input placeholder="00.00 UAH" />
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
