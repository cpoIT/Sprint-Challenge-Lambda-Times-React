import React from 'react';
import { TopBarStyle, TopBarContainer, TopBarContainerLeft, TopBarContainerCenter, TopBarContainerRight } from '../CSS/TopBarStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file




const TopBar = () => {
  return (
    <TopBarStyle className="top-bar">
      <TopBarContainer className="container">
        <TopBarContainerLeft className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarContainerLeft>
        <TopBarContainerCenter className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarContainerCenter>
        <TopBarContainerRight className="container-right">
          <span>LOG IN</span>
        </TopBarContainerRight>
      </TopBarContainer>
    </TopBarStyle>
  )
}

export default TopBar;