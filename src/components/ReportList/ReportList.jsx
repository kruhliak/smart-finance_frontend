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
  const categories = useSelector(state => state.finance.categories);
  const operations = useSelector(state => state.finance.operations);

  useEffect(() => {
    dispatch(transactionOperations.getCategoriesByMonth(['expense', 2021, 11]));
  }, [category]);

  const changeCategory = () => {
    setSelectedCard(0);
    setCategory(!category);
  };

  const salary = operations[0]?.list.filter(item => item.category === 'ЗП');
  const income = operations[0]?.list.filter(
    item => item.category === 'Доп. доход',
  );

  return (
    <Container>
      {category ? (
        <>
          <Categories onClick={changeCategory}>РАСХОДЫ</Categories>
          <Wrapper>
            {categories.length > 0 &&
              categories.map(({ category, sum }) => (
                <ReportCard
                  key={category}
                  index={category}
                  icon={category}
                  sum={sum}
                  name={category}
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
              {salary.length > 0 && (
                <ReportCard
                  key={'ЗП'}
                  index={'ЗП'}
                  icon={'icon-salary'}
                  sum={operations[0].list
                    .filter(item => item.category === 'ЗП')
                    .map(item => item.value)
                    .reduce((a, b) => {
                      return a + b;
                    })}
                  name={'ЗП'}
                  setSelectedCard={setSelectedCard}
                  selectedCard={selectedCard}
                ></ReportCard>
              )}
              {income.length > 0 && (
                <ReportCard
                  key={'Доп. доход'}
                  index={'Доп. доход'}
                  icon={'icon-income'}
                  sum={operations[0].list
                    .filter(item => item.category === 'Доп. доход')
                    .map(item => item.value)
                    .reduce((a, b) => {
                      return a + b;
                    })}
                  name={'Доп. доход'}
                  setSelectedCard={setSelectedCard}
                  selectedCard={selectedCard}
                ></ReportCard>
              )}
            </Wrapper>
          </>
        </>
      )}
    </Container>
  );
}

export default ReportList;
