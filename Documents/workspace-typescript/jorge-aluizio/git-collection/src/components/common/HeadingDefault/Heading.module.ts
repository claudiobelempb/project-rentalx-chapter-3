import styled, { css } from 'styled-components';
import { colorDefault } from '../../../assets/themes/functions/colorDefault';
import { fontDefault } from '../../../assets/themes/functions/fontDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { textDefault } from '../../../assets/themes/functions/textDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const HeadingDefaultContainer = styled.h1<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: 1.6rem;

     /*HEIGHT DEFAULT  */
     ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}

    /*TEXT DEFAULT */
    ${
      props.textDefault
        ? textDefault.text(props.textDefault)
        : theme.textDefault({ textTransform: 'uppercase' })
    }

    /*FONT DEFAULT  */
    ${
      props.fontDefault
        ? fontDefault.fontDefault(props.fontDefault)
        : theme.fontDefault({})
    }

    /* COLOR DEFAULT */
    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({
            colorDefalut: { index: 'primary', value: 'v500' },
          })
    };

  `}
`;
