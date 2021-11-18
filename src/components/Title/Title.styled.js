import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const H1 = styled.h1`
  margin-bottom: 4px;
  font-size: 2.875rem;
  line-height: 3.5rem;
  font-weight: 900;
  color: var(--black-text-color);

  @media ${device.tablet} {
    margin-bottom: 5px;
    font-size: 4.875rem;
    line-height: 5.4rem;
  }
  @media ${device.desktop} {
    font-size: 6.375rem;
    line-height: 7.5rem;
  }
`;
