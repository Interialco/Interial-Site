import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle} offset={-80}>About</SideBarLink>
          <SideBarLink to="discover" onClick={toggle} offset={-80}>Discover</SideBarLink>
          <SideBarLink to="services" onClick={toggle} offset={-80}>Services</SideBarLink>
          <SideBarLink to="contact us" onClick={toggle} offset={-80}>Contact Us</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/wip">Sign In</SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
