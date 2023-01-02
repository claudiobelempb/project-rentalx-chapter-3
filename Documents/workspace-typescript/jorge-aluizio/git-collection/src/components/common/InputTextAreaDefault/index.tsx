import React, { LabelHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './TextArea.module';

type ITextAreaDefaultType = TextareaHTMLAttributes<HTMLTextAreaElement>;
type ILabelDefaultType = LabelHTMLAttributes<HTMLLabelElement>;

type TextAreaDefaultTypeProps = ITextAreaDefaultType &
  TypeDefault &
  ILabelDefaultType;

export const InputTextAreaDefault = React.forwardRef(
  (
    { ...props }: TextAreaDefaultTypeProps,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    return (
      <Styles.Container>
        {props.label && (
          <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
            {props.label}
          </Styles.LabelDefaultContainer>
        )}
        <Styles.TextAreaDefaultContainer {...props} ref={ref}>
          {props.children}
        </Styles.TextAreaDefaultContainer>
      </Styles.Container>
    );
  },
);
