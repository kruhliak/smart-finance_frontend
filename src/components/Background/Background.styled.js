import styled from '@emotion/styled';

import { device } from 'components/options/device';
import bgLogin from 'images/bgLogin.png';
import bgHome from 'images/bgHome.png';

export const BgLogin = styled.div`
  position: absolute;
  top: -240px;
  left: 0;
  width: 100%;
  min-height: 582px;
  background-image: url(${bgLogin});
  background-repeat: no-repeat;
  z-index: -5;

  @media screen and (min-width: 1281px) {
    background-size: cover;
    min-height: 700px;
  }

  @media ${device.tablet} {
    top: 0;
  }
`;

export const BgHome = styled(BgLogin)`
  background-image: url(${bgHome});

  @media screen and (min-width: 1281px) {
    background-size: cover;
    min-height: 700px;
  }
`;
