import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background: #fff; */
  row-gap: 40px;
  column-gap: 10px;
  @media (min-width: 320px) {
    max-width: 320px;
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 635px;
    width: 100%;
  }
  @media (min-width: 1280px) {
    max-width: 758px;
    width: 100%;
  }
`;

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 320px) {
    max-width: 320px;
    padding-top: 10px;
  }
  @media (min-width: 768px) {
    max-width: 666px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 30px;
    padding-top: 20px;
  }
  @media (min-width: 1280px) {
    max-width: 1060px;
  }
`;
