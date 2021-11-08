import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1060px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 30px;
`;

export const Categories = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin: 0px;
  color: --primary-text-color;
`;

export const Stripe = styled.span`
  height: 36px;
  width: 2px;
  background-color: #e0e5eb;
  margin-right: 20px;
  margin-left: 20px;
`;

export const Income = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  color: #e53935;
`;

export const Expenses = styled.span`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  color: #407946;
`;
