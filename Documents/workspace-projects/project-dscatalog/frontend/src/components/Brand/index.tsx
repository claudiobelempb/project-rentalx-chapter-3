import React from 'react';

type BrandProsp = {
  href: string;
};

const Brand: React.FC<BrandProsp> = ({ href }) => {
  return (
    <a href={href} className="navbar-brand fw-bold bg-primary">
      DS Catalog
    </a>
  );
};
export { Brand };
