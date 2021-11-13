import { HeaderContainer } from "./Header.styled";
// import {Title} from '../Title/Title.jsx';

const Header = ({children}) => {
  return(
    <HeaderContainer>
      {children}
    </HeaderContainer>
  )
}

export default Header