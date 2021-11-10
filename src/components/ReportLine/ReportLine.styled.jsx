import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 30px;

  @media (min-width: 320px) {
    max-width: 282px;
    justify-content: space-evenly;
  }
  @media (min-width: 768px) {
    max-width: 666px;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    max-width: 1060px;
  }
`;

export const Categories = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin: 0px;
  color: --primary-text-color;
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    display: inline;
  }
`;

export const Stripe = styled.span`
  width: 2px;
  background-color: #e0e5eb;
  @media (min-width: 320px) {
    height: 70.5px;
  }
  @media (min-width: 768px) {
    margin-right: 20px;
    margin-left: 20px;
    height: 36px;
  }
`;

export const Income = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #e53935;
  @media (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const Expenses = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;

  color: #407946;
  @media (min-width: 768px) {
    margin-left: 15px;
  }
`;
