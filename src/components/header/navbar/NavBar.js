'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className="d-flex justify-content-center align-center p-3 mb-3 mw-100 navbar border-bottom border-primary border-2 sticky-top">
      <NavLink path="/" label="Home" currentPath={currentPath} />
      <NavLink path="/games" label="Games" currentPath={currentPath} />
      <NavLink path="/music" label="Music" currentPath={currentPath} />
    </nav>
  );
}

export default NavBar;
