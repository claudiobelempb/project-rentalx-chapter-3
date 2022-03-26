import React from 'react';
import { ReactComponent as ImgSetaLeft } from 'assets/images/seta-left.svg';

import styles from './styles.module.scss';

const ButtonIcon: React.FC = () => {
  return (
    <div className={`${styles.button_container}`}>
      <button className='btn btn-primary'>
        INICIE AGORA A SUA BUSCA <ImgSetaLeft />
      </button>
    </div>
  );
};

export { ButtonIcon };
