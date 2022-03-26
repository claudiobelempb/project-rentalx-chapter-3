import React from 'react';
import { Brand } from 'components/Brand';
import { Nav } from 'components/Nav';

// const ImgBrand = '/src/assets/images/brand_dscatalog.svg';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Brand href="/" />
      <Nav />
    </nav>
  );
};

export { NavBar };
