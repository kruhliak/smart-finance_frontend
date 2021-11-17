import styled from '@emotion/styled';
import { device } from '../../components/options/device';

export const Wrapper = styled.div`
  width: 300px;
  padding: 50px 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 76px;
  background-color: var(--white-text-color);
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  border-radius: 30px;
  @media ${device.tablet} {
    width: 436px;
    padding: 50px 85px;
    margin-bottom: 198px;
  }
  @media ${device.desktop} {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
  color: var(--primary-text-color);
  @media ${device.tablet} {
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 265px;
  height: 52px;
  background: #f6f7fb;
  border-radius: 30px;
  font-family: inherit;
  padding: 17px 20px;
  border: none;
  margin-bottom: 4px;
`;

export const Label = styled.label`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: var(--black-text-color);
  margin-bottom: 10px;
  @media ${device.tablet} {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.04em;
  color: #eb5757;
  margin-bottom: 14px;
  opacity: ${props => (props.opacity ? 0 : 1)};
`;

export const StarErr = styled.span`
  color: #eb5757;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const LoginPageWrap = styled.div`
  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 142px;
  }
`;
