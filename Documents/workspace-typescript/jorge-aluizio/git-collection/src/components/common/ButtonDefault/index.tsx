import React, { ButtonHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styles from './Button.module';

interface ButtonDefaultProps
  extends TypeDefault,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  children,
  isIconLeft = true,
  isIconRight,
  title = 'Button Default',
  ...props
}: ButtonDefaultProps) => {
  return (
    <Styles.ButtonDefaultContainer {...props}>
      {isIconLeft && children} {title}
      {isIconRight && children}
    </Styles.ButtonDefaultContainer>
  );
};
