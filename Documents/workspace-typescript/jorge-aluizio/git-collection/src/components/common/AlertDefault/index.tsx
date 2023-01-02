import React from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './AlertDefault.module';

const AlertDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.BoxDefaultStyle {...props}>{props.children}</Styles.BoxDefaultStyle>
  );
};

export { AlertDefault };
