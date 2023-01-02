import React from 'react';
import { Link } from 'react-router-dom';
import BrandImg from '../../../assets/images/logo.svg';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import { ImgDefault } from '../ImgDefault';

import * as Styles from './Brand.module';

const BrandDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.BrandDefaultStyle {...props}>
      <Link to={props.url ? props.url : '/'}>
        {props.children}
        <ImgDefault src={BrandImg} width={20} alt="Git Collection" />
      </Link>
    </Styles.BrandDefaultStyle>
  );
};

export { BrandDefault };
