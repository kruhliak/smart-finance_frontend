import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const Div = styled.div`
  margin-left: 39px;
  width: 100%;
  margin-top: 86px;
  margin-bottom: 50px;

  @media ${device.tablet} {
    margin-top: 91px;
    margin-left: 119px;
    margin-bottom: 43px;
  }
  @media ${device.desktop} {
    margin-top: 0;
    margin-left: 120px;
    margin-bottom: 0;
  }
`;
