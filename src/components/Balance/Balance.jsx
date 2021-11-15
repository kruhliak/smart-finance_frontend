import { Box, Link, Title, Text, Button } from './Balance.styled';
import { Icon } from '../../hooks/Icon';
import { NavLink } from 'react-router-dom';

export default function Balance() {
  const width = document.documentElement.scrollWidth;
  const renderByWidth = width > 767;

  return (
    <Box>
      {!renderByWidth && (
        <Link href="#">
          Перейти к отчетам
          <Icon
            name={'icon-balance'}
            size={'14px'}
            viewBox="0 0 14 14"
            color="#52555F"
          />
        </Link>
      )}

      <Title>Баланс:</Title>
      <Text>00.00 UAH</Text>
      <Button>ПОДТВЕРДИТЬ</Button>
      {renderByWidth && (
        <NavLink to="/report">
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
