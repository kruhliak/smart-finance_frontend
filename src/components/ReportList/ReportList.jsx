import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Container, Categories } from './ReportList.styled';

import ReportCard from '../ReportCard/ReportCard';

function ReportList({ setSelectedCard, selectedCard, category, setCategory }) {
  const categories = useSelector(state => state.finance.categories);
  const operations = useSelector(state => state.finance.operations);

  const changeCategory = () => {
    setSelectedCard('');
    setCategory(!category);
  };

  useEffect(() => {
    console.log(categories.length > 0);
    if (category === true && categories.length > 0) {
      setSelectedCard(categories[0].category);
    }
    if (
      category === false &&
      operations.find(item => item.operation === 'income') !== undefined
    ) {
      setSelectedCard(
        operations.find(item => item.operation === 'income').list[0].category,
      );
    }
  }, [categories]);

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
