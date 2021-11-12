import styled from '@emotion/styled';
import { device } from '../../../components/options/device';

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

export const Link = styled.a`
  text-decoration: none;
  width: 122px;
  height: 40px;
  background-color: #f6f7fb;
  border-radius: 26px;
  text-transform: none;
  margin: 0 auto 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    box-shadow: 2px 4px 4px 0px rgb(0 0 0 / 30%), -1px 0px 0px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LinkText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  margin-left: 9px;
  color: var(--black-text-color);
`;
