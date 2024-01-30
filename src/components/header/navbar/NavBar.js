'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import ThemeToggleButton from './ThemeToggleButton';

function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className="d-flex justify-content-center align-center p-3 mb-3 mw-100 sticky-top navbar">
      <div className="d-flex flex-row justify-content-center align-center">
        <NavLink path="/" label="Home" currentPath={currentPath} />
        <NavLink path="/games" label="Games" currentPath={currentPath} />
        <NavLink path="/music" label="Music" currentPath={currentPath} />
      </div>
      <ThemeToggleButton />
    </nav>
  );
}

export default NavBar;
