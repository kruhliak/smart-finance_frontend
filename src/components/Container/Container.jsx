import React from "react";

import { Div, DivHome } from './Container.styled'

const Container = ({ typePage, children})=>{
  return <>{typePage === 'home' ? <DivHome>{children}</DivHome> : <Div>{children}</Div>}</>;
}

export default Container;