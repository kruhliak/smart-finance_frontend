import React from 'react';

import { useSelector } from 'react-redux';

import {
  Container,
  Categories,
  Stripe,
  Income,
  Expenses,
} from './ReportLine.styled';

function ReportLine() {
  const transactions = useSelector(state => state.finance.operations);

  return (
    <Container>
      <Categories>
        Расходы:{' '}
        <Expenses>
          -
          {transactions.find(
            transaction => transaction.operation === 'expense',
          ) !== undefined &&
            transactions.find(
              transaction => transaction.operation === 'expense',
            ).sum}{' '}
          грн.
        </Expenses>
      </Categories>
      <Stripe></Stripe>
      <Categories>
        Доходы:{' '}
        <Income>
          +
          {transactions.find(
            transaction => transaction.operation === 'income',
          ) !== undefined &&
            transactions.find(transaction => transaction.operation === 'income')
              .sum}{' '}
          грн.
        </Income>
      </Categories>
    </Container>
  );
}

export default ReportLine;
