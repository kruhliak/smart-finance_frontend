import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const Div = styled.div`
  width: 100%;
  margin-left: 39px;
  margin-bottom: 50px;

  @media ${device.tablet} {
    margin-left: 119px;
    margin-bottom: 43px;
  }
  @media ${device.desktop} {
    margin-left: 120px;
    margin-bottom: 0;
  }
`;
