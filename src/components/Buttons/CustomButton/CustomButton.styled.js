import styled from '@emotion/styled';

export const CustomButton = styled.button`
  width: 125px;
  height: 44px;
  background-color: var(--accent-color);
  color: var(--white-text-color);

  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  border: none;
  outline: none;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 0%),
    0px 2px 1px rgb(0 0 0 / 15%);
  ${({ backBtn }) =>
    backBtn &&
    `
    background-color: var(--white-text-color);
    color: var(--primary-text-color);
    border: 2px solid #F6F7FC;
  `};

  ${({ googleBtn }) =>
    googleBtn &&
    `
    width: 122px;
    height: 40px;
    background-color: #F6F7FB;
    border-radius: 26px;
    color: var(--black-text-color);
    text-transform: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin: 0 auto;
  `};

  &:focus,
  &:hover {
    box-shadow: 2px 4px 4px 0px rgb(0 0 0 / 30%), -1px 0px 0px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
