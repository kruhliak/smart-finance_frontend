import React, { useState } from 'react';
import { Icon } from 'hooks/Icon';

import { Wrapper, Text } from './Reportcard.styled';

function Reportcard({ sum, name, icon }) {
  const [isShown, setIsShown] = useState(false);

  const showGraph = () => {
    setIsShown(!isShown);
  };

  return (
    <Wrapper onClick={showGraph}>
      <Text>{sum}</Text>
      <Icon
        name={icon}
        size="56px"
        viewBox="0 0 56 56"
        color={isShown ? '#FF751D' : '#071F41'}
      ></Icon>
      <Text>{name}</Text>
    </Wrapper>
  );
}

export default Reportcard;
