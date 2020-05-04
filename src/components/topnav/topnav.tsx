import React, { StatelessComponent } from 'react';
import { StickyTopNav, NavHeader } from './topnav.styled';

const TopNav: StatelessComponent = () => {
  return (
    <StickyTopNav>
      <NavHeader onClick={() => window.location.replace('https://blog.l3f7.dev')}>Blog</NavHeader>
    </StickyTopNav>
  )
}

export default TopNav;