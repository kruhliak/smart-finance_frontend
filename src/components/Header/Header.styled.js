import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 56px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 19px;
  padding-right: 19px;
  background-color: var(--white-text-color);
  z-index: 10;

  @media ${device.tablet} {
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 282px;
  margin: 0 auto;
  z-index: 10;

  @media ${device.tablet} {
    max-width: 716px;
  }
  @media ${device.desktop} {
    max-width: 1060px;
  }
`;
