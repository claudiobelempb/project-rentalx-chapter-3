import React from 'react';
import { NavBar } from 'components/NavBar';

const Header: React.FC = () => {
  return (
    <div className="bg-primary">
      <div className="container ">
        <NavBar />
      </div>
    </div>
  );
};

export { Header };
