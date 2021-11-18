import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const Div = styled.div`
  margin-bottom: 50px;
  margin-left: 39px;

  @media ${device.tablet} {
    margin-bottom: 43px;
    margin-left: 119px;
  }
  @media ${device.desktop} {
    margin-bottom: 0;
    margin-left: 120px;
  }
`;
