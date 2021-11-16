import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  getTransactions,
  getStatusLoader,
} from 'redux/selectors/transaction-selectors';
import * as transactionOperations from '../../redux/operations/transaction-operation';

export const GetIncome = () => {
  const [income, setIncome] = useState([]);

  const dispatch = useDispatch();
  // const transactions = useSelector(getTransactions);

  // useEffect(() => {
  //   dispatch(transactionOperations.getTransactionByType('income'));
  //   setIncome(transactions);
  //   console.log(income);
  // }, []);

  return income;
};
