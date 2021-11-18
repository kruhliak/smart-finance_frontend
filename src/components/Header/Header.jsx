import { HeaderContainer, HeaderWrap } from "./Header.styled";

const Header = ({children}) => {
  return(
    <HeaderContainer>
      <HeaderWrap>
        {children}
      </HeaderWrap>
    </HeaderContainer>
  )
}

export default Header