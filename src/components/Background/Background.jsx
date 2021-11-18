import React from "react";
import { BgLogin, BgHome } from './Background.styled';

const Background = ({typePage}) => {
    return <>{typePage === 'home' ? <BgHome/> : <BgLogin/>}</>
};

export default Background;