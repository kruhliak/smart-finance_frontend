import LogoTitle from "components/LogoTitle";
import { Icon } from "hooks/Icon";
import { LogoContainer, RectangleTransparent, RectangleNotTransparent } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer>
      <RectangleTransparent>
        <Icon name="icon-logo"
          size="33px"
          viewBox="0 0 33 26"
          color='rgba(251, 124, 47, 0.2)'>
        </Icon>
      </RectangleTransparent>
      <RectangleNotTransparent>
        <Icon
          name="icon-logo"
          size="33px"
          viewBox="0 0 33 26"
          color='#FB7C2F'>
        </Icon>
      </RectangleNotTransparent>
      <LogoTitle text="Kapu$ta" />
    </LogoContainer>
  )
}

export default Logo