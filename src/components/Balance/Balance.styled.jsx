import styled from '@emotion/styled';

import { device } from '../options/device';

export const Box = styled.section`
  display: flex;

  justify-content: center;

  width: 248px;
  height: 134px;

  margin-left: auto;
  margin-right: auto;

  @media ${device.mobileMax} {
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    width: 634px;
    height: 44px;
  }

  @media ${device.desktop} {
    width: 1060px;

    justify-content: flex-end;
  } ;
`;

export const Link = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 1.166;
  letter-spacing: 0.04em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 154px;
  height: 24px;

  padding-right: 10px;

  color: var(--primary-text-color-transparent);

  @media ${device.mobileMax} {
    margin-bottom: 41px;
  }

  @media ${device.tablet} {
    height: 44px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.166;
  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
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
  }

  @media ${device.desktop} {
    justify-content: center;
  } ;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.166;
  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 124px;
  height: 44px;

  border: 2px solid var(--white-text-color);
  border-radius: 22px 0 0 22px;

  padding-right: 17px;

  color: var(--black-text-color);

  @media ${device.mobileMax} {
  }

  @media ${device.tablet} {
    border-radius: 16px;

    padding-right: 20px;
    margin-right: 15px;
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

    margin-right: 111px;
  }

  @media ${device.desktop} {
    margin-right: 205px;
  } ;
`;
