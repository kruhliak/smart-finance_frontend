import styled from '@emotion/styled';

export const IconButton = styled.button`
  cursor: pointer;
  border-radius: 50px;
  border: transparent;
  background-color: transparent;
  margin-right: 20px;
  &:hover,
  &:focus {
    color: var(--accent-color);
  }
`;
