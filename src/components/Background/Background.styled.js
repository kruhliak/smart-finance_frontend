import styled from '@emotion/styled';

import { device } from 'components/options/device';
import bgLogin from 'images/bg.png';
import bgHome from 'images/bggrey.png';

export const BgLogin = styled.div`
  position: absolute;
  top: -240px;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 582px;
  background-image: url(${bgLogin});

  @media ${device.tablet} {
    top: 0;
  }
`;

export const BgHome = styled(BgLogin)`
  z-index: -2;
  background-image: url(${bgHome});
`;
