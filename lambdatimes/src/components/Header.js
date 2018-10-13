import React from 'react';
import { HeaderStyles, HeaderStylesH1} from '../CSS/HeaderStyles'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderStyles className="header">
      <span className="date">SMARCH 32, 2018</span>
      <HeaderStylesH1>Lambda Times</HeaderStylesH1>
      <span className="temp">98°</span>
    </HeaderStyles>
  )
}

export default Header