import React, { useState } from 'react';

import { Wrapper, Container, Categories } from './Reportlist.styled';

import Reportcard from '../Reportcard/Reportcard';

function Reportlist() {
  const [category, setCategory] = useState(true);

  return (
    <Container>
      {category ? (
        <>
          <Categories onClick={() => setCategory(!category)}>
            РАСХОДЫ
          </Categories>
          <Wrapper>
            <Reportcard
              icon={'icon-food'}
              sum={'1000'}
              name={'Продукты'}
            ></Reportcard>
            <Reportcard
              icon={'icon-alco'}
              sum={'1000'}
              name={'Алкоголь'}
            ></Reportcard>
            <Reportcard
              icon={'icon-entertainment'}
              sum={'1000'}
              name={'Развлечение'}
            ></Reportcard>
            <Reportcard
              icon={'icon-health'}
              sum={'1000'}
              name={'Здоровье'}
            ></Reportcard>
            <Reportcard
              icon={'icon-car'}
              sum={'1000'}
              name={'Транспорт'}
            ></Reportcard>
            <Reportcard
              icon={'icon-home'}
              sum={'1000'}
              name={'все для дома'}
            ></Reportcard>
            <Reportcard
              icon={'icon-electronics'}
              sum={'1000'}
              name={'техника'}
            ></Reportcard>
            <Reportcard
              icon={'icon-communal'}
              sum={'1000'}
              name={`коммуналка,
связь`}
            ></Reportcard>
            <Reportcard
              icon={'icon-hobby'}
              sum={'1000'}
              name={'спорт, хобби'}
            ></Reportcard>
            <Reportcard
              icon={'icon-education'}
              sum={'1000'}
              name={'образование'}
            ></Reportcard>
            <Reportcard
              icon={'icon-other'}
              sum={'1000'}
              name={'прочее'}
            ></Reportcard>
          </Wrapper>
        </>
      ) : (
        <>
          <>
            <Categories onClick={() => setCategory(!category)}>
              ДОХОДЫ
            </Categories>
            <Wrapper>
              <Reportcard
                icon={'icon-salary'}
                sum={'1000'}
                name={'ЗП'}
              ></Reportcard>
              <Reportcard
                icon={'icon-income'}
                sum={'1000'}
                name={'Доп. доход'}
              ></Reportcard>
            </Wrapper>
          </>
        </>
      )}
    </Container>
  );
}

export default Reportlist;
