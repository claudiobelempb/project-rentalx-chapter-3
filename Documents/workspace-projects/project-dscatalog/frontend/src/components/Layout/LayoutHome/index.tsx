import { Header } from 'components/Header';
import React from 'react';

type LayoutHomeProps = {
  children: React.ReactNode;
};

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export { LayoutHome };
