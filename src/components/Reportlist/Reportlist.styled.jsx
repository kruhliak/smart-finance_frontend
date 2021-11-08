import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 613px;
  row-gap: 40px;
`;

export const Container = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding-top: 20px;
  padding-bottom: 25px;
`;

export const Categories = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  margin-top: 0px;
  margin-bottom: 20px;
  &:after {
    content: '>';
    margin-left: 30px;
    color: #ff751d;
    font-weight: 900;
  }
  &:before {
    content: '<';
    margin-right: 30px;
    color: #ff751d;
    font-weight: 900;
  }
`;
