import styled, { css } from 'styled-components';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { colorDefault } from '../../../assets/themes/functions/colorDefault';
import { fontDefault } from '../../../assets/themes/functions/fontDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { textDefault } from '../../../assets/themes/functions/textDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';

import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContainerTextDefault = styled.p<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: 1.6rem;

    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({
            colorDefalut: { index: 'green', value: 'v400' },
          })
    };
     /*HEIGHT DEFAULT  */
     ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}


    /*BORDER DEFAULT */
    ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };
    /* Padding Default */
    ${
      props.paddingDefault
        ? paddingDefault.paddingDefault(props.paddingDefault)
        : theme.paddingDefault({})
    };
    /* Margin Default */
    ${
      props.marginDefault
        ? marginDefault.marginDefault(props.marginDefault)
        : theme.marginDefault({})
    };
    /*UTILS DEFAULT */
    ${
      props.ultilsDefault
        ? utilsDefault.utilsDefault(props.ultilsDefault)
        : theme.utilsDefault({})
    }
     /*HEIGHT DEFAULT  */
     ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}
    /*TEXT DEFAULT */
    ${
      props.textDefault
        ? textDefault.text(props.textDefault)
        : theme.textDefault({})
    }
    /*FONT DEFAULT  */
    ${
      props.fontDefault
        ? fontDefault.fontDefault(props.fontDefault)
        : theme.fontDefault({})
    }
    /*ICON DEFAULT */
    ${props.iconDefault && props.iconDefault()};

  `}
`;
