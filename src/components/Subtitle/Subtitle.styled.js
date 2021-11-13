import styled from '@emotion/styled/macro';

export const H2 = styled.h2`
  margin-left: 50px;
  margin-bottom: 50px;
  font-size: 0.8125rem;
  line-height: 0.9375rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    margin-left: 172px;
    font-size: 1rem;
    line-height: 1.1875rem;
    letter-spacing: 0.18em;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 192px;
    margin-bottom: 0;
  }
`;
