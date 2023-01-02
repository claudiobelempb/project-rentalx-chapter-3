import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './InputRadio.module';

interface IInputRadioType extends InputHTMLAttributes<HTMLInputElement> {}
interface LabelDefaultType extends LabelHTMLAttributes<HTMLLabelElement> {}

type InputRadioProps = IInputRadioType & TypeDefault & LabelDefaultType;

export const InputRadioDefault = React.forwardRef(
  ({ ...props }: InputRadioProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <>
        <Styles.InputRadioDefaultContainer {...props} type='radio' ref={ref} />
        {props.label && (
          <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
            {props.label}
          </Styles.LabelDefaultContainer>
        )}
      </>
    );
  }
);
