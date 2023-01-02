import React from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styles from './Text.module';

const TextDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <>
      <Styles.ContainerTextDefault {...props}>
        {props.children && props.children}
      </Styles.ContainerTextDefault>
    </>
  );
};

export { TextDefault };
