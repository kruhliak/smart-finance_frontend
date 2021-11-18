import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 230px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Rectangle = styled.div`
  width: 230px;
  height: 38px;
  background: #f5f6fb;
  display: flex;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  width: 230px;
  height: 38px;
  background: #f5f6fb;
  display: flex;
  justify-content: space-evenly;
  margin-top: 2px;
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;
