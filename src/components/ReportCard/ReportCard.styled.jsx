import styled from '@emotion/styled';

export const Wrapper = styled.div`
  text-align: center;
  width: 90px;
  cursor: pointer;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 59px;
  height: 46px;
  margin-left: 16px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: #f5f6fb;
  ${({ selectedBg }) =>
    selectedBg &&
    `
background-color: #FFDAC0;
  `};
  @media (max-width: 768px) {
    &:after {
      position: absolute;
      content: '';
      width: 100px;
      height: 1px;
      left: -20px;
      bottom: -50px;
      background-color: #e0e5eb;
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
