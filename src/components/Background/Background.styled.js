import styled from '@emotion/styled';

import { device } from 'components/options/device';
import bg from 'images/bg.png';

export const BgImage = styled.div`
  position: absolute;
  top: -240px;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 582px;
  background-image: url(${bg});

  @media ${device.tablet} {
    top: 0;
  }
`;
