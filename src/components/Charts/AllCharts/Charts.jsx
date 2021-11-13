// import React, { useState } from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Wrapper, Container} from './Charts.styled';
import DesktopChart from '../DesktopChart/';
import MobileChart from '../MobileChart';

const Charts = () => {
  const isMatches = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
          <Wrapper>
        {isMatches ? <DesktopChart /> :
        <MobileChart/>}
          </Wrapper>
    </Container>
  );
}

export default Charts;