import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 230px;
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 450px;
    width: 100%;
    margin: 27px auto;
    box-shadow: 0px 8px 5px rgb(170 178 197 / 20%);
  }
`;

export const Rectangle = styled.div`
  align-items: center;
  width: 100%;
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
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  height: 38px;
  background: #f5f6fb;
  display: flex;
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
