import React, { useState } from 'react';

import {
  Container,
  Categories,
  Stripe,
  Income,
  Expenses,
} from './Reportline.styled';

function Reportline() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');

  const getExpenses = () => {};
  const getIncome = () => {};

  return (
    <Container>
      <Categories>
        Расходы: <Expenses>- {expenses} грн.</Expenses>
      </Categories>
      <Stripe></Stripe>
      <Categories>
        Доходы: <Income>+ {income} грн.</Income>
      </Categories>
    </Container>
  );
}

export default Reportline;
