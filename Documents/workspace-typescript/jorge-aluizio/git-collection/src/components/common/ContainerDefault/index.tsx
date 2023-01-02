import React from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Container.module';

const ContainerDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.ContainerDefault {...props}>
      {props.children}
    </Styles.ContainerDefault>
  );
};

export { ContainerDefault };
