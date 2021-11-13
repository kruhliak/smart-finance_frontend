import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 12px 0;
  display: block;
  width: 125px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  outline: none;
  border-radius: 16px;
  text-align: center;
  background-color: var(--white-text-color);
  color: var(--primary-text-color);
  border: 2px solid #f6f7fc;
  box-shadow: 0px 0px 1px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 0%),
    0px 2px 1px rgb(0 0 0 / 15%);

  &.${props => props.activeClassName} {
    color: red;
  }

  &:focus,
  &:hover {
    box-shadow: 2px 4px 4px 0px rgb(0 0 0 / 30%), -1px 0px 0px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ButtonNav = ({ path, text }) => {
  return (
    <Link to={path} exact>
      {text}
    </Link>
  );
};

export default ButtonNav;
