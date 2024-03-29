import React from 'react';
import Link from 'next/link';

function NavLink({ path, label, currentPath }) {
  return (
    <Link href={path} className={`mx-4 nav-link ${currentPath === path ? 'active' : 'inactive'}`}>
      {label}
    </Link>
  );
}

export default NavLink;
