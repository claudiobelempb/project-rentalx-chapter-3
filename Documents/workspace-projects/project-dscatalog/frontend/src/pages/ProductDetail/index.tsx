import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../app/http/index';

import { FaArrowLeft } from 'react-icons/fa';
import { ProductPrice } from '../../components/ProductPrice';
import { LayoutHome } from '../../components/Layout/LayoutHome';
import { TypeProductPage } from '../../app/types/TypeProductPage';
import { LoaderDefault } from 'app/common/LoaderDefault';

type paramsProps = {
  id: string;
};

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<TypeProductPage>();

  const { id } = useParams<paramsProps>();

  useEffect(() => {
    api.get<TypeProductPage>(`/api/products/${id}`).then(response => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <LayoutHome>
      <div className="container bg-white rounded-3 mt-5 p-3 m-auto">
        <div className="row py-3">
          <Link className="fs-4 text-dark fw-bold text-uppercase" to="/catalog">
            <FaArrowLeft className="fw-bold fs-3 text-primary" /> Voltar
          </Link>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
            <div className="border rounded-3 d-flex align-items-center justify-content-center mb-3">
              {!product ? (
                <LoaderDefault show={!product} />
              ) : (
                <img
                  src={product?.imgUrl}
                  className="img-fluid"
                  alt={product?.name}
                />
              )}
            </div>
            {!product ? (
              <LoaderDefault show={!product} />
            ) : (
              <>
                <h2 className="fw-bold mb-3 fs-4">{product?.name}</h2>
                {product && <ProductPrice price={product?.price} />}
              </>
            )}
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="rounded-3 border overflow- auto p-3 text-secondary">
              {!product ? (
                <LoaderDefault show={!product} />
              ) : (
                <>
                  <h2 className="fw-bold mb-3 fs-4 lead">
                    Decrição do Produto
                  </h2>
                  <p>{product?.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default ProductDetail;
