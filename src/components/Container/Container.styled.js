import styled from '@emotion/styled';
import { device } from 'components/options/device';

export const Div = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  /* height: auto; */
  /* width: 100%; */

  @media ${device.tablet} {
    padding-left: 52px;
    padding-right: 52px;
  }

  @media ${device.desktop} {
    padding-left: 110px;
    padding-right: 110px;
  }
`;
