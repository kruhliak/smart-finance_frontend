import { HeaderContainer } from "./Header.styled";

const Header = ({children}) => {
  return(
    <HeaderContainer>
      {children}
    </HeaderContainer>
  )
}

export default Header