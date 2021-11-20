import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'hooks/useMediaQuery';
import * as transactionOperations from '../../../redux/operations/transaction-operation';

import { Wrapper, Container} from './Charts.styled';
import DesktopChart from '../DesktopChart/';
import MobileChart from '../MobileChart';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Charts = ({ data }) => {
  console.log("data Cgarts >>", data)
  const categories = useSelector(state => state.finance.categories);
  const isMatches = useMediaQuery('(min-width: 768px)');

  const dataByCategory = categories
    .find(item => (item.category === data))
    .list.map(({ description, value }) => ({ description, value }));

  const newData = dataByCategory
    ?.reduce((acc, { description, value }) => {
      const match = capitalizeFirstLetter(description);
      const newArr = acc?.find(el => el.description === description);
      if (!newArr) {
        acc.push({ description: match, value });
      }
      if (newArr) {
        const idx = acc.findIndex(el => el.description === description);
        acc[idx].value += value;
      }
      return acc;
    }, [])
  
  console.log('newData >>', newData)

  return (
    <Container>
          <Wrapper>
        {isMatches ? <DesktopChart data={newData}/> :
        <MobileChart data={newData}/>}
          </Wrapper>
    </Container>
  );
}

export default Charts;