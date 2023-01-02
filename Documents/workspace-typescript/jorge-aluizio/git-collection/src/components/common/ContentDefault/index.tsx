import { TypeDefault } from '../../../assets/themes/TypeDefault';

import * as Styles from './Content.module';

export function ContentDefault({ ...props }: TypeDefault) {
  return (
    <Styles.ContentDefaultStyle {...props}>
      {props.children && props.children}
    </Styles.ContentDefaultStyle>
  );
}
