import React, { useState } from 'react';

import { Wrapper, Container, Categories } from './ReportList.styled';

import ReportCard from '../ReportCard/ReportCard';

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
            <ReportCard
              icon={'icon-food'}
              sum={'1000'}
              name={'Продукты'}
            ></ReportCard>
            <ReportCard
              icon={'icon-alco'}
              sum={'1000'}
              name={'Алкоголь'}
            ></ReportCard>
            <ReportCard
              icon={'icon-entertainment'}
              sum={'1000'}
              name={'Развлечение'}
            ></ReportCard>
            <ReportCard
              icon={'icon-health'}
              sum={'1000'}
              name={'Здоровье'}
            ></ReportCard>
            <ReportCard
              icon={'icon-car'}
              sum={'1000'}
              name={'Транспорт'}
            ></ReportCard>
            <ReportCard
              icon={'icon-home'}
              sum={'1000'}
              name={'все для дома'}
            ></ReportCard>
            <ReportCard
              icon={'icon-electronics'}
              sum={'1000'}
              name={'техника'}
            ></ReportCard>
            <ReportCard
              icon={'icon-communal'}
              sum={'1000'}
              name={`коммуналка,
связь`}
            ></ReportCard>
            <ReportCard
              icon={'icon-hobby'}
              sum={'1000'}
              name={'спорт, хобби'}
            ></ReportCard>
            <ReportCard
              icon={'icon-education'}
              sum={'1000'}
              name={'образование'}
            ></ReportCard>
            <ReportCard
              icon={'icon-other'}
              sum={'1000'}
              name={'прочее'}
            ></ReportCard>
          </Wrapper>
        </>
      ) : (
        <>
          <>
            <Categories onClick={() => setCategory(!category)}>
              ДОХОДЫ
            </Categories>
            <Wrapper>
              <ReportCard
                icon={'icon-salary'}
                sum={'1000'}
                name={'ЗП'}
              ></ReportCard>
              <ReportCard
                icon={'icon-income'}
                sum={'1000'}
                name={'Доп. доход'}
              ></ReportCard>
            </Wrapper>
          </>
        </>
      )}
    </Container>
  );
}

export default Reportlist;
