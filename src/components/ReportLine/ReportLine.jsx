import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  getTransactions,
  getStatusLoader,
} from 'redux/selectors/transaction-selectors';
import * as transactionOperations from '../../redux/operations/transaction-operation';

import {
  Container,
  Categories,
  Stripe,
  Income,
  Expenses,
} from './ReportLine.styled';

function ReportLine() {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.finance.operations);

  // const getExpenses = () => {
  //   setExpenses(transactions.map(item => item.value));
  // };

  // const getIncome = () => {};

  // useEffect(() => {
  //   dispatch(transactionOperations.getAllOperationByMonth(Array(2)));
  // }, [dispatch]);

  // console.log(transactions);

  return (
    <Container>
      <Categories>
        Расходы:{' '}
        <Expenses>
          - {transactions.length > 0 && transactions[1].sum} грн.
        </Expenses>
      </Categories>
      <Stripe></Stripe>
      <Categories>
        Доходы:{' '}
        <Income>+ {transactions.length > 0 && transactions[0].sum} грн.</Income>
      </Categories>
    </Container>
  );
}

export default ReportLine;
