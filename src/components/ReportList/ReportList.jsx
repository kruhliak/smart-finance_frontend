import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTransactions } from 'redux/selectors/transaction-selectors';
import * as transactionOperations from '../../redux/operations/transaction-operation';
import { Wrapper, Container, Categories } from './ReportList.styled';

import ReportCard from '../ReportCard/ReportCard';
import data from './data.json';
import dataIncome from './dataIncome.json';

function ReportList({ setSelectedCard, selectedCard }) {
  const [category, setCategory] = useState(true);
  const [salary, setSalary] = useState([]);
  const [income, setIncome] = useState([]);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.finance.categories);
  const operations = useSelector(state => state.finance.operations);

  // useEffect(() => {
  //   dispatch(transactionOperations.getCategoriesByMonth(['expense', 2021, 11]));
  // }, [category]);

  const changeCategory = () => {
    setSelectedCard('');
    setCategory(!category);
  };

  // const salary = operations[0].list.filter(item => item.category === 'ЗП');
  // const income = operations[0].list.filter(
  //   item => item.category === 'Доп. доход',
  // );

  // console.log(
  //   operations[1].list
  //     .filter(item => item.category === 'ЗП')
  //     .map(item => item.value)
  //     .reduce((a, b) => {
  //       return a + b;
  //     }),
  // );

  // console.log(operations);

  // console.log(operations.find(item => item.operation === 'income'));
  // console.log(
  //   operations
  //     .find(item => item.operation === 'income')
  //     .list.filter(item => item.category === 'Доп. доход')
  //     .map(item => item.value),
  // );
  // console.log(categories);
  // console.log(operations);

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
              {typeof operations.find(item => item.operation === 'income') ===
                'object' &&
                operations
                  .find(item => item.operation === 'income')
                  .list.filter(item => item.category === 'ЗП')
                  .map(item => item.value).length > 0 && (
                  <ReportCard
                    key={'ЗП'}
                    index={'ЗП'}
                    icon={'icon-salary'}
                    sum={operations
                      .find(item => item.operation === 'income')
                      .list.filter(item => item.category === 'ЗП')
                      .map(item => item.value)
                      .reduce((a, b) => {
                        return a + b;
                      })}
                    name={'ЗП'}
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedCard}
                  ></ReportCard>
                )}
              {typeof operations.find(item => item.operation === 'income') ===
                'object' &&
                operations
                  .find(item => item.operation === 'income')
                  .list.filter(item => item.category === 'Доп. доход')
                  .map(item => item.value).length > 0 && (
                  <ReportCard
                    key={'Доп. доход'}
                    index={'Доп. доход'}
                    icon={'icon-income'}
                    sum={operations
                      .find(item => item.operation === 'income')
                      .list.filter(item => item.category === 'Доп. доход')
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
