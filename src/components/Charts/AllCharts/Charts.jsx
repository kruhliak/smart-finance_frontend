import React, { useState } from 'react';
import { Wrapper, Container} from './Charts.styled';
import DesktopChart from '../DesktopChart/DesktopChart';

const Charts = () => {
  const [category, setCategory] = useState(true);

  return (
    <Container>
          <Wrapper>
            <DesktopChart/>
          </Wrapper>
    </Container>
  );
}

export default Charts;