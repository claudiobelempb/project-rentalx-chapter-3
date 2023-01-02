import {
  ChangeEvent,
  CSSProperties,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
} from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Input.module';

type InputDefaultType = InputHTMLAttributes<HTMLInputElement>;
// type LabelDefaultType = LabelHTMLAttributes<HTMLLabelElement>;

type InputBaseProps = {
  children?: ReactNode;
  className?: string;
  id?: string;
  label?: string;
  htmlFor?: string;
  name?: string;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: CSSProperties;
  type: HTMLInputTypeAttribute;
  value?: string;
};

type InputDefaultProps = InputBaseProps & TypeDefault & InputDefaultType;

export const InputDefault = ({ ...props }: InputDefaultProps) => {
  return (
    <Styles.Container>
      {props.label && (
        <Styles.LabelDefaultContainer htmlFor={props.htmlFor}>
          {props.label}
        </Styles.LabelDefaultContainer>
      )}
      <Styles.InputDefaultContainer {...props} />
    </Styles.Container>
  );
};
