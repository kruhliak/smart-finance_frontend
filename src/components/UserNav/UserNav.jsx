import { Icon } from 'hooks/Icon';
import { NavContainer, UserAvatar, LogoutBtn, P } from './UserNav.styled';
import { useDispatch } from 'react-redux';
import { userLogout } from 'redux/operations/auth-operation';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'hooks/useMediaQuery';

const UserNav = () => {
  const dispatch = useDispatch();

  const userName = useSelector(state => state.auth.user.name);
  const firstUserNameLetter = userName?.slice(0, 1);
  const isMatches = useMediaQuery('(min-width: 768px)');

  return (
    <NavContainer>
      <UserAvatar>{firstUserNameLetter}</UserAvatar>
      <P>{userName}</P>
      <LogoutBtn onClick={() => dispatch(userLogout())}>
        {isMatches ? (
          <P>Выйти</P>
        ) : (
          <Icon
            name="icon-logout"
            size="16px"
            viewBox="0 0 16 16"
            color="#CBCCD0"
          ></Icon>
        )}
      </LogoutBtn>
    </NavContainer>
  );
};

export default UserNav;
