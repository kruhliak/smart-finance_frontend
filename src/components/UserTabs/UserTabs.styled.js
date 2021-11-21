import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const WrapperContent = styled.div`
  @media ${device.desktop} {
    display: flex;
  }
`;
