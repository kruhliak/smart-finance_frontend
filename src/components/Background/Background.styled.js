import styled from '@emotion/styled';

import { device } from 'components/options/device';
import bgLogin from 'images/bgLogin.png';
import bgHome from 'images/bgHome.png';
import bgTabletBottom from 'images/bgTabletBottom.png';
import bgDesktopBottom from 'images/bgDesktopBottom.png';

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

export const CabbageWrap = styled.div`
  position: absolute;
  top: 780px;
  left: 35px;
  z-index: -1;
  @media ${device.tablet} {
    top: 859px;
    left: 103px;
  }
  @media ${device.desktop} {
    top: 676px;
    left: 230px;
  }
  &:nth-of-type(3) {
    display: none;
    top: 834px;
    left: 197px;
    transform: scale(-1, 1);
    @media ${device.tablet} {
      display: block;
    }
    @media ${device.desktop} {
      top: 660px;
      left: 324px;
    }
  }
`;

export const EllipseWrap = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: absolute;
    top: 968px;
    left: 108px;
    z-index: -1;
    @media ${device.desktop} {
      top: 785px;
      left: 235px;
    }
  }
  &:nth-of-type(5) {
    top: 943px;
    left: 208px;
    @media ${device.desktop} {
      top: 769px;
      left: 335px;
    }
  }
`;

export const BgWrapHome = styled.div`
  position: absolute;
  z-index: -1;
  @media ${device.tablet} {
    top: 1033px;
    right: 88px;
    width: 183px;
    height: 142px;
    background-image: url(${bgTabletBottom});
    background-repeat: no-repeat;
  }
  @media ${device.desktop} {
    top: 732px;
    left: 10px;
    width: 100%;
    height: 232px;
    background-image: url(${bgDesktopBottom});
    background-repeat: repeat-x;
  }
`;
