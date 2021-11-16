import styled from '@emotion/styled/macro';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 19px;
  padding-right: 19px;
  background-color: var(--white-text-color);

  @media (min-width: 768px) {
    padding-left: 26px;
    padding-right: 26px;
  }
`;
