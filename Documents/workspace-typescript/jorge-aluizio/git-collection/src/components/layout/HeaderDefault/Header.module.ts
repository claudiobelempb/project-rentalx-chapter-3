import styled, { css } from 'styled-components';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';

import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const HeaderDefaultStyle = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    /* z-index: -30; */
    /* height: 100%; */
    position: relative;
    width: 100%;
    /* background-color: red; */

    /* Padding Static */
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

    /* GRID DEFAULT */
    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}
    ${
      props.gridTemplateColumnsStaticDefault &&
      props.gridTemplateColumnsStaticDefault()
    }
    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}

    /* FLEX DEFAULT */
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({})
    }

     /*BORDER DEFAULT */
     ${
       props.borderDefault
         ? borderDefault.borderDefault(props.borderDefault)
         : theme.borderDefault.borderDefault({
             borderDefault: {
               width: 0.1,
               style: 'solid',
               unit: 'rem',
               colorDefault: {
                 borderColorDefalut: {
                   color: { index: 'default', value: 'black' },
                 },
               },
             },
           })
     }
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault
        ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
        : theme.borderRadiusDefault.borderRadiusDefault({
            borderRadiusDefault: {
              width: 0.1,
              unit: 'rem',
            },
          })
    };


    ${props.iconDefault && props.iconDefault()}

    /*UTILS DEFAULT */

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
  `}
`;
