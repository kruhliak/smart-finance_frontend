import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper, Text, Rectangle, List, Item, Title } from './Summary.styled';

function Summary({ title, month, money }) {
  const transactions = useSelector(state => state.finance.summary);

  const balance = transactions?.length > 0 ? transactions.map(({ month, sum }) => ({ month, sum })) : [];

  // const income = transactions.find(
  //   transaction => transaction.operation === 'income',
  // ) !== undefined &&
  //   transactions.find(transaction => transaction.operation === 'income')
  //     .sum;
  
  console.log("transactions >>", transactions);
  console.log("expense >>", balance);
  // console.log("income >>", income);

  return (
    <Wrapper>
      <Rectangle>
        <Title>{title}</Title>
      </Rectangle>
      <List>
        {balance && balance.map(el => <Item>
          
          <Text>{el.month}</Text>
          <Text>{el.sum} грн</Text>
          </Item>)}
          {/* {balance && balance.map(el => <Text>{el.sum}</Text>)} */}
        
      </List>
    </Wrapper>
  );
}

export default Summary;
