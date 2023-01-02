import { TypeDefault } from '../../../assets/themes/TypeDefault';
import * as Styled from './Heading.module';

const HeadingDefault: React.FC<TypeDefault> = ({ children, ...props }) => {
  switch (props.as) {
    case 'h1':
      return (
        <Styled.HeadingDefaultContainer
          fontDefault={{ fontSizeDynamic: { value: 0.48 } }}
          {...props}
        >
          {children}
        </Styled.HeadingDefaultContainer>
      );
    case 'h2':
      return (
        <Styled.HeadingDefaultContainer
          fontDefault={{ fontSizeDynamic: { value: 0.5 } }}
          {...props}
        >
          {children}
        </Styled.HeadingDefaultContainer>
      );
    case 'h3':
      return (
        <Styled.HeadingDefaultContainer
          fontDefault={{ fontSizeDynamic: { value: 0.36 } }}
          {...props}
        >
          {children}
        </Styled.HeadingDefaultContainer>
      );
    case 'h4':
      return (
        <Styled.HeadingDefaultContainer
          fontDefault={{ fontSizeDynamic: { value: 0.24 } }}
          {...props}
        >
          {children}
        </Styled.HeadingDefaultContainer>
      );
    case 'h5':
      return (
        <Styled.HeadingDefaultContainer
          fontDefault={{ fontSizeDynamic: { value: 0.16 } }}
          {...props}
        >
          {children}
        </Styled.HeadingDefaultContainer>
      );
    case 'h6':
      return (
        <Styled.HeadingDefaultContainer
          fontDefault={{ fontSizeDynamic: { value: 0.1 } }}
          {...props}
        >
          {children}
        </Styled.HeadingDefaultContainer>
      );
    default:
      return (
        <Styled.HeadingDefaultContainer {...props}>
          {children}
        </Styled.HeadingDefaultContainer>
      );
  }
};

export { HeadingDefault };
