'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const path = usePathname();

  return (
    <nav className="d-flex justify-content-center align-center p-3 mb-3 mw-100 navbar border-bottom border-primary border-2 sticky-top">
      <Link href="/" className={`me-5 nav-link ${path === '/' ? 'active' : 'inactive'}`}>
        Home
      </Link>
      <Link href="/games" className={`me-5 nav-link ${path === '/games' ? 'active' : 'inactive'}`}>
        Games
      </Link>
      <Link href="/music" className={`nav-link ${path === '/music' ? 'active' : 'inactive'}`}>
        Music
      </Link>
    </nav>
  );
}

export default NavBar;
