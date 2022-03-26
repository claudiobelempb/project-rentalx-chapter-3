import React, { useEffect, useState } from 'react';

import { ProductCard } from '../../components/ProductCard/';
import { TypeProductPage } from '../../app/types/TypeProductPage';
import { Pagination } from '../../components/Pagination';
import { LayoutHome } from '../../components/Layout/LayoutHome';
import { TypeSpringPage } from 'app/types/vendor/TypeSpring';
import { TypeAxiosPage } from 'app/types/vendor/TypeAxios';

import { api } from '../../app/http/index';
import { LoaderDefault } from 'app/common/LoaderDefault';

type formDataProps = {
  name: string;
  category: string;
};

const CatalogList: React.FC = () => {
  const [products, setProducts] = useState<TypeSpringPage<TypeProductPage>>();
  const [formData, seFormData] = useState<formDataProps>({
    name: '',
    category: '',
  });

  useEffect(() => {
    const params: TypeAxiosPage = {
      method: 'GET',
      url: `/api/products/`,
      params: {
        page: 0,
        size: 12,
      },
    };

    api(params).then(response => {
      setProducts(response.data);
    });
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    seFormData({ ...formData, [name]: value });
    console.log('onChange: ', event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmit: ', formData);
  };

  return (
    <LayoutHome>
      <div className="container py-5">
        <div className="row g-2 bg-white p-2 rounded-3 d-flex align-items-center justify-content-end">
          <div className="col-sm-12 col-md-12 col-lg-3">
            <h3 className="fs-6 fw-bold text-secondary">
              Catálogo de produtos
            </h3>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-9 ">
            <form onSubmit={handleSubmit} className="d-flex">
              <input
                className="form-control m-2"
                type="text"
                placeholder="Nome do produto"
                aria-label="default input example"
                onChange={handleChange}
                name="name"
                value={formData.name}
              />

              <select
                className="form-select text-secondary m-2"
                aria-label="Filtrar por Categora"
                value={formData.category}
                onChange={handleChange}
              >
                <option defaultValue={'selected'}>Filtrar por Categora</option>
                <option value={'1'}>One</option>
                <option value={'2'}>Two</option>
                <option value={'3'}>Three</option>
              </select>

              <button className="btn btn-light text-secondary border w-100 m-2">
                LIMPAR FILTRO
              </button>
            </form>
          </div>
        </div>
        <div className="row py-5">
          <div className="row g-2">
            {!products?.content ? (
              <LoaderDefault show={!products?.content} size={4} />
            ) : (
              products?.content.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
        <div className="row">
          <Pagination />
        </div>
      </div>
    </LayoutHome>
  );
};

export default CatalogList;
