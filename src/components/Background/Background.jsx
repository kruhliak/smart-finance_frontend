import React from "react";
import { BgLogin, BgHome, CabbageWrap, EllipseWrap, BgWrapHome } from './Background.styled';
import { Icon } from "hooks/Icon";

const Background = ({typePage}) => {
    return <>{typePage === 'home' ? <BgHome><BgWrapHome/>
    </BgHome> : <><BgLogin/><CabbageWrap>
    <Icon
        name="icon-cabbage"
        size="83px"
        viewBox="0 0 83 89"
        color="#DFE2EB">
    </Icon>
    </CabbageWrap>
    <CabbageWrap>
    <Icon
        name="icon-cabbage"
        size="83px"
        viewBox="0 0 83 89"
        color="#DFE2EB">
    </Icon>
    </CabbageWrap>
    <EllipseWrap>
    <Icon
        name="icon-ellipse"
        size="67px"
        viewBox="0 0 67 14"
        color="#F5F6FB">
    </Icon>
    </EllipseWrap>
    <EllipseWrap>
    <Icon
        name="icon-ellipse"
        size="67px"
        viewBox="0 0 67 14"
        color="#F5F6FB">
    </Icon>
    </EllipseWrap></>}
        
    </>
};

export default Background;