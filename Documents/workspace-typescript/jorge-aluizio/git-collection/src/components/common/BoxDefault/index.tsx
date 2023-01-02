import React from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Box.module';

const BoxDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.BoxDefaultStyle {...props}>{props.children}</Styles.BoxDefaultStyle>
  );
};

export { BoxDefault };
