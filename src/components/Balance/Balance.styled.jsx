import styled from '@emotion/styled';

import { device } from '../options/device';

export const Box = styled.div`
  display: flex;

  @media ${device.mobileMax} {
    flex-direction: column;
    margin-bottom: 40px;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    padding-bottom: 58px;
  }

  @media ${device.desktop} {
    justify-content: space-between;
    padding-bottom: 9px;
  }

  & .balance-form {
    display: flex;
    justify-content: center;

    @media ${device.mobileMax} {
      flex-direction: column;
      align-items: center;
    }

    @media ${device.tablet} {
      height: 44px;
    }

    @media ${device.desktop} {
      margin-left: 332px;
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

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--primary-text-color-transparent);

  @media ${device.mobileMax} {
    margin-bottom: 6px;
  }

  @media ${device.tablet} {
    width: 83px;
    margin-right: 21px;
    margin-left: 15px;
  }

  @media ${device.desktop} {
    justify-content: center;
  } ;
`;

export const InputBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  label {
    position: absolute;
    color: var(--black-text-color);

    left: 80px;
    font-weight: 700;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  font-weight: 700;
  padding-right: 46px;
  height: 44px;
  width: 125px;
  font-size: 12px;

  text-align: right;

  border: 2px solid var(--white-text-color);
  border-radius: 22px 0 0 22px;

  color: var(--black-text-color);
  background-color: transparent;

  @media ${device.mobileMax} {
  }

  @media ${device.tablet} {
    border-radius: 16px;
    margin-right: 15px;
  }

  &::placeholder {
    text-align: right;
    color: inherit;
  }
`;

export const Button = styled.button`
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
  &:focus,
  &:hover {
    background-color: var(--accent-color);
    color: var(--white-text-color);
    border: none;
    box-shadow: 2px 4px 4px 0px rgb(0 0 0 / 30%), -1px 0px 0px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
