import React, { LabelHTMLAttributes, SelectHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Select.module';

interface IInputSelectDefaultType
  extends SelectHTMLAttributes<HTMLSelectElement> {}
interface ILabelDefaultType extends LabelHTMLAttributes<HTMLLabelElement> {}

type InputSelectDefaultProps = IInputSelectDefaultType &
  TypeDefault &
  ILabelDefaultType;

export const InputSelectDefault = React.forwardRef(
  ({ ...props }: InputSelectDefaultProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <Styles.Container>
        {props.label && (
          <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
            {props.label}
          </Styles.LabelDefaultContainer>
        )}
        <Styles.SelectDefaultContainer {...props} type='select' ref={ref}>
          {props.children}
        </Styles.SelectDefaultContainer>
      </Styles.Container>
    );
  }
);
