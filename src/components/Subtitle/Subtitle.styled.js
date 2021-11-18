import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const H2 = styled.h2`
  margin-left: 11px;
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--primary-text-color);

  @media ${device.tablet} {
    margin-left: 53px;
    font-size: 1rem;
    line-height: 1.1875rem;
    letter-spacing: 0.18em;
  }
  @media ${device.desktop} {
    margin-left: 72px;
  }
`;
