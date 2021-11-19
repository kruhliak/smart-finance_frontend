import styled from '@emotion/styled/macro';
import { device } from 'components/options/device';

export const Tabs = styled.div`
  -webkit-tap-highlight-color: transparent;
`;

export const TabList = styled.ul``;

export const MyTab = styled.li`
  display: inline-block;
  position: relative;
  list-style: none;
  padding: 11px 44.5px;
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 17px;
  color: var(--black-text-color);
  background: linear-gradient(
    270deg,
    rgba(250, 251, 253, 1) 0%,
    rgba(239, 239, 239, 1) 100%
  );
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;

  ${({ isActive }) =>
    isActive &&
    `
    color: var(--accent-color);
    background: #fefefe;
  `};

  &--disabled {
    color: #eee;
    cursor: default;
  }

  &:focus {
    box-shadow: 0 0 5px var(--accent-color);
    border-color: var(--accent-color);

    &:after {
      content: '';
      position: absolute;
      height: 5px;
      left: -4px;
      right: -4px;
      bottom: -5px;
      background: teal;
    }
  }
`;

export const TabPanel = styled.div`
  display: none;

  ${({ isActive }) =>
    isActive &&
    `
    display: block;
    background: var(--white-text-color);
  `};

  @media ${device.tablet} {
    padding: 28px 30px 48px 20px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
  }
  @media ${device.desktop} {
    padding: 33px 30px 61px 20px;
  }

  &--selected {
    display: none;
  }
`;
