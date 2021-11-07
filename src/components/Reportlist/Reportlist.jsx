import React from 'react';

import { Wrapper, Container } from './Reportlist.styled';

import Reportcard from '../Reportcard/Reportcard';

function Reportlist() {
  return (
    <Container>
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
    </Container>
  );
}

export default Reportlist;
