import styled from '@emotion/styled';
import { device } from '../../components/options/device';

export const Form = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media ${device.mobileMax} {
    width: 282px;
    justify-content: center;
    align-items: center;
  }

  @media ${device.tablet} {
    margin-bottom: 48px;
  }
  @media ${device.desktop} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 59px;
  }
`;
export const Wrapper = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
  }

  @media ${device.tablet} {
    margin-bottom: 30px;
    flex-direction: row;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
    justify-content: space-between;
    margin-right: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media ${device.mobileMax} {
    background: #f5f6fb;
    flex-direction: column;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      border-right: 2px solid #fff;
      width: 2px;
      height: 40px;
      top: 120px;
      left: 186px;
    }
  }
  @media ${device.tablet} {
    margin-bottom: 30px;
    flex-direction: row;
  }
  @media ${device.desktop} {
    margin-bottom: 0px;
    justify-content: space-between;
    margin-right: 10px;
  }
`;

export const InputDesc = styled.input`
  height: 44px;
  background: transparent;

  font-size: 12px;
  line-height: 14px;
  font-family: inherit;
  color: #c7ccdc;
  letter-spacing: 0.02em;

  padding: 2px 21px;
  border: 2px solid #ffffff;
  border-radius: 16px 16px 0 0;
  width: 282px;

  @media ${device.tablet} {
    border-radius: 16px 0 0 0;
    width: 190px;

    border-top: 2px solid #f5f6fb;
    border-bottom: 2px solid #f5f6fb;
    border-left: 2px solid #f5f6fb;
  }
  @media ${device.desktop} {
    width: 260px;
  }

  &:hover,
  &:focus {
    border: 2px solid var(--accent-color);
  }

  &::placeholder {
    color: #c7ccdc;
  }
`;

export const InputСategory = styled.input`
  width: 282px;
  height: 44px;
  background: transparent;

  font-size: 12px;
  line-height: 14px;
  font-family: inherit;
  letter-spacing: 0.02em;

  padding: 2px 21px;
  border: 2px solid #ffffff;
  cursor: pointer;
  color: #c7ccdc;

  @media ${device.mobileMax} {
    border-radius: 0 0 16px 0;
  }
  @media ${device.tablet} {
    width: 171px;
    border-top: 2px solid #f5f6fb;
    border-bottom: 2px solid #f5f6fb;
    border-left: 2px solid #f5f6fb;
  }
  @media ${device.desktop} {
    width: 188px;
  }

  &::placeholder {
    color: #c7ccdc;
  }

  &:hover,
  &:focus {
    border: 2px solid var(--accent-color);
  }
`;

export const ListСategory = styled.ul`
  background-color: #fff;
  position: absolute;
  left: 0px;
  top: 100%;
  border: none;
  outline: none;
  z-index: 100;
  border: 2px solid #f5f6fb;
  box-shadow: 0px 3px 4px rgba(170, 178, 197, 0.4);
  width: 282px;

  @media ${device.tablet} {
    width: 171px;
  }

  @media ${device.desktop} {
    width: 188px;
  }
`;

export const InputWrapperCategory = styled.div`
  position: relative;
`;

export const InputValue = styled.input`
  position: relative;
  display: block;

  height: 44px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #c7ccdc;
  color: #000000;
  border: 2px solid #ffffff;
  border-radius: 22px;
  text-align: center;
  background-color: transparent;
  &::placeholder {
    color: #000;
  }
  @media ${device.mobileMax} {
    width: 183px;
    margin-top: 30px;
  }

  @media ${device.tablet} {
    width: 104px;
    border: 2px solid #f5f6fb;
    border-radius: 0 16px 16px 0;
    color: #c7ccdc;

    &::placeholder {
      color: #c7ccdc;
    }
  }

  @media ${device.desktop} {
    width: 126px;
  }

  &:hover,
  &:focus {
    border: 2px solid var(--accent-color);
  }
`;

export const Label = styled.label`
  position: absolute;
  content: '';
  right: 65px;
  bottom: 8px;
  display: block;
  @media ${device.tablet} {
    right: 15px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 265px;
  display: flex;
  justify-content: space-between;
  @media ${device.mobileMax} {
    margin-top: 83px;
  }
`;
