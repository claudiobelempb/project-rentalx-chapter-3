import { formatPrice } from 'app/utils/formatPrice';
import React from 'react';

type ProductPriceProps = {
  price: number;
};

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  return (
    <div className="d-flex">
      <span className="fs-6 text-top me-2 text-secondary">R$</span>
      <strong className="fs-4 text-primary">{formatPrice(price)}</strong>
    </div>
  );
};

ProductPrice.defaultProps = {
  price: 2300.55,
};

export { ProductPrice };
