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

import { GetIncome } from './GetIncome';

function ReportLine() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const dispatch = useDispatch();
  // const transactions = useSelector(getTransactions);

  // console.log(transactions);

  // const getExpenses = () => {
  //   setExpenses(transactions.map(item => item.value));
  // };

  // const getIncome = () => {};

  // useEffect(() => {
  //   dispatch(transactionOperations.getTransactionByType('expense'));
  // }, [dispatch]);

  return (
    <Container>
      <Categories>
        Расходы:{' '}
        <Expenses>
          -{' '}
          {/* {transactions.length > 0 &&
            transactions.map(item => item.value).reduce((a, b) => a + b)}{' '} */}
          грн.
        </Expenses>
      </Categories>
      <Stripe></Stripe>
      <Categories>
        Доходы: <Income>+ {income} грн.</Income>
      </Categories>
    </Container>
  );
}

export default ReportLine;
