import React from 'react';
import { Wrapper, Text, Rectangle, List, Item, Title } from './Summary.styled';

function Summary({ title, month, money }) {
  return (
    <Wrapper>
      <Rectangle>
        <Title>{title}</Title>
      </Rectangle>
      <List>
        <Item>
          <Text>{month}</Text>
          <Text>{money}</Text>
        </Item>
      </List>
    </Wrapper>
  );
}

export default Summary;
