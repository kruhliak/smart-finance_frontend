import React, { useState } from 'react';
import { Wrapper, Container} from './Charts.styled';
import DesktopChart from '../DesktopChart/';
import MobileChart from '../MobileChart';

const Charts = () => {
  const [category, setCategory] = useState(true);

  return (
    <Container>
          <Wrapper>
        <DesktopChart />
        <MobileChart/>
          </Wrapper>
    </Container>
  );
}

export default Charts;