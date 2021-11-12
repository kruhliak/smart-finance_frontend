import { Icon } from 'hooks/Icon';
import { NavContainer, UserAvatar, LogoutBtn } from './UserNav.styled';

const UserNav = () => {
  return (
    <NavContainer>
      <UserAvatar />
      <LogoutBtn>
        <Icon 
          name="icon-logout"
          size="16px"
          viewBox="0 0 16 16"
          color='#CBCCD0'>
        </Icon>
        </LogoutBtn>
    </NavContainer>
  )
}

export default UserNav