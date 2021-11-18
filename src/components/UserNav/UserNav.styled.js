import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: #f5f6fa;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const LogoutBtn = styled.button`
  display: flex;
  border: none;
  background-color: transparent;

  &:focus,
  &:hover > svg {
    fill: var(--primary-text-color);
  }

  & > p :focus,
  :hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  display: none;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-size: 0.75rem;
    line-height: 0.875rem;
    letter-spacing: 0.04em;
    color: var(--primary-text-color);

    &:not(button > p)::after {
      content: '';
      width: 1px;
      height: 36px;
      margin-left: 20px;
      background-color: #e0e5eb;
    }
  }
`;
