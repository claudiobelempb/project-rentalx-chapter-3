import React from 'react';
import { Link } from 'react-router-dom';

import ProductImg from 'assets/images/product-default.svg';
import { ProductPrice } from '../../components/ProductPrice';
import { TypeProductPage } from '../../app/types/TypeProductPage';

type ProductCardProps = {
  product: TypeProductPage;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link className="col-sm-6 col-lg-3 col-xl-3" to={`/catalog/${product.id}`}>
      <div className="card shadow">
        <div className="card-body">
          <img
            className="card-img-top border-bottom"
            src={product.imgUrl}
            alt=""
          />

          <div className="mt-3">
            <h2 className="fs-6 card-title text-secondary">{product.name}</h2>
            <ProductPrice price={product.price} />
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.defaultProps = {
  product: {
    id: 1,
    name: 'Computador Desktop - Intel Core i7',
    description: 'string',
    price: 2355.55,
    imgUrl: ProductImg,
    status: 'string',
    createdAt: 'string',
    updatedAt: 'string',
    categories: [],
  },
};

export { ProductCard };
