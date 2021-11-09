import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
  width: 90px;
  cursor: pointer;

  @media (max-width: 768px) {
    &:after {
      content: '';
      width: 280px;
      border-bottom: 1px solid #e0e5eb;
      position: absolute;
      left: 0px;
      margin: 20px;
    }
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  margin-top: 5px;
  margin-bottom: 5px;
`;
