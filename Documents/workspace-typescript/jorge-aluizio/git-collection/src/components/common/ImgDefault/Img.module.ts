import styled, { css } from 'styled-components';
import { afterDefault } from '../../../assets/themes/functions/afterDefault';
import { beforeDefault } from '../../../assets/themes/functions/beforeDefault';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { effectDefault } from '../../../assets/themes/functions/effectDefaults';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { positionDefault } from '../../../assets/themes/functions/positionDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ImgDefaultContainer = styled.img<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    z-index: 0;
    width: ${props.width}rem;
    height: ${props.height}rem;

   /*EFFECT DEFAULT */
   ${props.effectDefault && effectDefault.effectDefault({})}
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && beforeDefault({})};
    /*BEFORE DEFAULT  */
    ${props.afterDefault && afterDefault({})};
    /*POSITION DEFAULT  */
    ${props.positionDefault && positionDefault({})};
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
     /*BORDER DEFAULT */
     ${
       props.borderDefault
         ? borderDefault.borderDefault(props.borderDefault)
         : theme.borderDefault.borderDefault({})
     }
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault
        ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
        : theme.borderRadiusDefault.borderRadiusDefault({})
    };

    /* FLEX DEFAULT */
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({})
    }


    ${props.iconDefault && props.iconDefault()}



  `}
`;

export const FigureDefaultContainer = styled.figure<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;

     /*HEIGHT DEFAULT  */
     ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}
    /*EFFECT DEFAULT */
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
    /*EFFECT DEFAULT */
    ${props.effectDefault && effectDefault.effectDefault({})}
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && beforeDefault({})};
    /*BEFORE DEFAULT  */
    ${props.afterDefault && afterDefault({})};
    /*POSITION DEFAULT  */
    ${props.positionDefault && positionDefault({})};
    /* FLEX DEFAULT */
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({})
    }


    ${props.iconDefault && props.iconDefault()}


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

     /*BORDER DEFAULT */
     ${
       props.borderDefault
         ? borderDefault.borderDefault(props.borderDefault)
         : theme.borderDefault.borderDefault({})
     }
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault
        ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
        : theme.borderRadiusDefault.borderRadiusDefault({})
    };

  `}
`;
