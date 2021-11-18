import styled from '@emotion/styled';
import { device } from 'components/options/device';

export const HomePageWrap = styled.section`
  margin-top: 30px;

  @media ${device.tablet} {
    margin-top: 40px;
    margin-bottom: 64px;
  }
  @media ${device.desktop} {
    margin-bottom: 83px;
  }
`;
