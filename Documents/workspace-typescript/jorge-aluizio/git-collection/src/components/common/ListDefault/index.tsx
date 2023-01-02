import React from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styles from './List.module';

const ListDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.ListDefaultContainer {...props}>
      {props.children}
    </Styles.ListDefaultContainer>
  );
};

const ItenListDefault: React.FC<TypeDefault> = ({ ...props }) => {
  return (
    <Styles.ItenListDefaultContainer {...props}>
      {props.children}
    </Styles.ItenListDefaultContainer>
  );
};

export { ListDefault, ItenListDefault };
