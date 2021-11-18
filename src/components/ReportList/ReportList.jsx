import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTransactions } from 'redux/selectors/transaction-selectors';
import * as transactionOperations from '../../redux/operations/transaction-operation';
import { Wrapper, Container, Categories } from './ReportList.styled';

import ReportCard from '../ReportCard/ReportCard';
import data from './data.json';
import dataIncome from './dataIncome.json';

function ReportList() {
  const [category, setCategory] = useState(true);
  const [selectedCard, setSelectedCard] = useState(0);

  const dispatch = useDispatch();
  // const transactions = useSelector(getTransactions);

  // useEffect(() => {
  //   dispatch(transactionOperations.getTransactionByType('expense'));
  // }, [dispatch]);

  const changeCategory = () => {
    setSelectedCard(0);
    setCategory(!category);
  };

  return (
    <Container>
      {category ? (
        <>
          <Categories onClick={changeCategory}>РАСХОДЫ</Categories>
          <Wrapper>
            {data.map(({ id, icon, sum, name }) => (
              <ReportCard
                key={id}
                index={id}
                icon={icon}
                sum={sum.reduce((a, b) => {
                  return a + b;
                })}
                name={name}
                setSelectedCard={setSelectedCard}
                selectedCard={selectedCard}
              ></ReportCard>
            ))}
          </Wrapper>
        </>
      ) : (
        <>
          <>
            <Categories onClick={changeCategory}>ДОХОДЫ</Categories>
            <Wrapper>
              {dataIncome.map(({ id, icon, sum, name }) => (
                <ReportCard
                  key={id}
                  index={id}
                  icon={icon}
                  sum={sum.reduce((a, b) => {
                    return a + b;
                  })}
                  name={name}
                  setSelectedCard={setSelectedCard}
                  selectedCard={selectedCard}
                ></ReportCard>
              ))}
            </Wrapper>
          </>
        </>
      )}
    </Container>
  );
}

export default ReportList;
