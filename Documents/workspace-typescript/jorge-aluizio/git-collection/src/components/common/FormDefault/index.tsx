import { FormHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import { FormContainerDefault } from './Form.module';

type FormDefaultTypes = FormHTMLAttributes<HTMLFormElement>;
type FormDefaultProps = TypeDefault & FormDefaultTypes;

export function FormDefault({ ...props }: FormDefaultProps) {
  return (
    <FormContainerDefault {...props}>{props.children}</FormContainerDefault>
  );
}
