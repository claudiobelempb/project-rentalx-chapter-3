import React from 'react';

import styles from './styles.module.scss';

import { ReactComponent as ImgBackgroundHome } from 'assets/images/background-home.svg';
import { ButtonIcon } from 'components/ButtonIcon';
// import ImgHome from '../../assets/images/background-home.svg';
import { LayoutHome } from '../..//components/Layout/LayoutHome';

const Home: React.FC = () => {
  return (
    <>
      <LayoutHome>
        <div className={`row d-flex flex-row-reverse ${styles.home_container}`}>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <ImgBackgroundHome />
          </div>
          <div
            className="
            col-sm-12
            col-md-12
            col-lg-6
            d-flex
            flex-column
            justify-content-center
            align-items-center
            "
          >
            <h1>Conheça o melhor catálogo de produtos</h1>
            <p>
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado.
            </p>
            <ButtonIcon />
          </div>
        </div>
      </LayoutHome>
    </>
  );
};

export default Home;
