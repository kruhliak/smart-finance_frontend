import styled from '@emotion/styled';

export const Error = styled.span`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #eb5757;
  margin-bottom: 14px;
  opacity: ${props => (props.opacity ? 0 : 1)};
`;
