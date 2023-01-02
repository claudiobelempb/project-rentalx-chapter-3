import { ImgHTMLAttributes } from 'react';
import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styles from './Img.module';

type ImgDefaultProps = ImgHTMLAttributes<HTMLImageElement>;

type ImgDefaultType = ImgDefaultProps & TypeDefault;

const ImgDefault: React.FC<ImgDefaultType> = ({ ...props }) => {
  return (
    <Styles.FigureDefaultContainer {...props}>
      <Styles.ImgDefaultContainer {...props} loading="lazy" />
    </Styles.FigureDefaultContainer>
  );
};

export { ImgDefault };
