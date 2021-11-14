import { Icon } from 'hooks/Icon';
import { NavContainer, UserAvatar, LogoutBtn } from './UserNav.styled';
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/operations/auth-operation';

const UserNav = () => {
  const dispatch = useDispatch();

  return (
    <NavContainer>
      <UserAvatar />
      <LogoutBtn onClick={() => dispatch(userLogout())}>
        <Icon
          name="icon-logout"
          size="16px"
          viewBox="0 0 16 16"
          color="#CBCCD0"
        ></Icon>
      </LogoutBtn>
    </NavContainer>
  );
};

export default UserNav;
