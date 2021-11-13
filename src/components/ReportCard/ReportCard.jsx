import React, { useState } from 'react';
import { Icon } from 'hooks/Icon';

import { Wrapper, Text } from './ReportCard.styled';

function ReportCard({ sum, name, icon, setSelectedCard, selectedCard, index }) {
  const showSelectedCard = e => {
    setSelectedCard(index);
  };

  return (
    <Wrapper onClick={showSelectedCard}>
      <Text>{sum}</Text>
      <Icon
        name={icon}
        size="56px"
        viewBox="0 0 56 56"
        color={selectedCard === index ? '#FF751D' : '#071F41'}
      ></Icon>
      <Text>{name}</Text>
    </Wrapper>
  );
}

export default ReportCard;
