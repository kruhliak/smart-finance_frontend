import styled from '@emotion/styled';

import { device } from 'components/options/device';
import bgLogin from 'images/bgLogin.png';
import bgLoginMobile from 'images/bgLoginMobile.png';
import bgHome from 'images/bgHome.png';
import bgHomeMobile from 'images/bgHomeMobile.png';

export const BgLogin = styled.div`
  position: absolute;
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  min-height: 582px;
  background-image: url(${bgLoginMobile});
  background-repeat: no-repeat;
  z-index: -5;

  @media ${device.tablet} {
    background-image: url(${bgLogin});
  }

  @media screen and (min-width: 1281px) {
    background-size: cover;
    min-height: 700px;
  }

  @media ${device.tablet} {
    top: 0;
  }
`;

export const BgHome = styled(BgLogin)`
  background-image: url(${bgHomeMobile});
  @media ${device.tablet} {
    background-image: url(${bgHome});
  }
`;
