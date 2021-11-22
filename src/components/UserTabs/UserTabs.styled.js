import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const WrapperContent = styled.div`
  @media ${device.tablet} {
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
  }

  @media ${device.desktop} {
    display: flex;
    box-shadow: none;
  }
`;