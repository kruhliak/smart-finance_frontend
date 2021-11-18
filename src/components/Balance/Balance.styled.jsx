import styled from '@emotion/styled';

import { device } from '../options/device';

export const Box = styled.section`
  display: flex;
  justify-content: start;
  align-content: flex-start;

  width: 100%;
  height: 342px;

  border-bottom-left-radius: 140px;

  padding-top: 86px;

  background-color: #f5f6fb;

  @media ${device.mobileMax} {
    flex-direction: column;

    margin-bottom: 172px;
  }

  @media ${device.tablet} {
    width: 768px;
    height: 583px;

    border-bottom-left-radius: 80px;
  }

  @media ${device.desktop} {
    width: 1280px;

    justify-content: flex-end;
  }

  & .balance-form {
    display: flex;
    justify-content: center;
    width: 100%;

    @media ${device.tablet} {
      width: 265px;
      height: 44px;

      margin-right: 111px;
    }

    @media ${device.desktop} {
      width: 265px;
      margin-right: 205px;
    }
  }
`;

// export const Link = styled.a`
//   font-family: 'Roboto', sans-serif;
//   font-size: 12px;
//   line-height: 1.166;
//   letter-spacing: 0.04em;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: 24px;

//   padding-right: 10px;

//   color: var(--primary-text-color-transparent);

//   @media ${device.mobileMax} {
//     margin-bottom: 41px;
//   }

//   @media ${device.tablet} {
//     height: 44px;
//   }
// `;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.166;
  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20px;

  color: var(--primary-text-color-transparent);

  @media ${device.mobileMax} {
    margin-bottom: 5px;
  }

  @media ${device.tablet} {
    justify-content: flex-end;

    width: 83px;
    height: 44px;

    margin-right: 21px;
    margin-left: 82px;
  }

  @media ${device.desktop} {
    justify-content: center;

    margin-left: 442px;
  } ;
`;

export const InputBox = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.166;
  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 124px;
  height: 44px;

  border: 2px solid var(--white-text-color);
  border-radius: 22px 0 0 22px;

  color: var(--black-text-color);

  @media ${device.mobileMax} {
  }

  @media ${device.tablet} {
    border-radius: 16px;

    margin-right: 15px;
  }
`;

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.166;
  letter-spacing: 0.02em;

  text-align: center;

  width: 100%;

  border: none;

  color: var(--black-text-color);
  background-color: transparent;

  &:hover,
  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    text-align: center;

    color: inherit;
  }
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1.166;

  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 124px;
  height: 44px;

  border: 2px solid var(--white-text-color);

  color: var(--primary-text-color-transparent);
  background-color: transparent;

  cursor: pointer;

  @media ${device.mobileMax} {
    border-radius: 0 22px 22px 0;
  }

  @media ${device.tablet} {
    border-radius: 16px;
  }
`;
