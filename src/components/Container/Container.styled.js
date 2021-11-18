import styled from '@emotion/styled';
import { device } from 'components/options/device';

export const Div = styled.div`
  width: 100%;
  max-width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 768px;
    padding-left: 52px;
    padding-right: 52px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
    padding-left: 110px;
    padding-right: 110px;
  }
`;
