import styled from '@emotion/styled';
import { device } from 'components/options/device';

export const Div = styled.div`
  width: 100%;
  max-width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 142px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 768px;
    padding-left: 52px;
    padding-right: 52px;
    padding-top: 146px;
  }

  @media ${device.desktop} {
    max-width: 1280px;
    padding-left: 110px;
    padding-right: 110px;
    padding-top: 173px;
  }
`;

export const DivHome = styled(Div)`
  padding-top: 86px;
  @media ${device.tablet} {
    padding-top: 97px;
  }
`;
