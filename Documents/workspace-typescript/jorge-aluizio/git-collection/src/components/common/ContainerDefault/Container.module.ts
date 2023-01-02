import styled, { css } from 'styled-components';
import { backgroundImgDefault } from '../../../assets/themes/functions/backgroundImgDefault';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { colorDefault } from '../../../assets/themes/functions/colorDefault';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { gridDefault } from '../../../assets/themes/functions/gridDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContainerDefault = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 1.5rem; */
    /* position: relative; */
    /* width: 100%; */
    /* height: 100%; */
    /* background-color: red; */
    /*UTILS DEFAULT */
    /* FLEX DEFAULT */
    ${
      props.widthDefault
        ? widthDefault.widthDefault(props.widthDefault)
        : theme.widthDefault({ widthDefault: { value: 10, unit: '%' } })
    };
    ${
      props.heightDefault
        ? heightDefault.heightDefault(props.heightDefault)
        : theme.heightDefault({})
    };
    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({})
    };

    ${
      props.backgroundImgDefault
        ? backgroundImgDefault.backgroundImgDefault(props.backgroundImgDefault)
        : theme.backgroundImgDefault({})
    }

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
    /*GRID DEFAULT */
    ${props.gridDefault && gridDefault.gridDefault({})}

     // sm applies to x-small devices (portrait phones, less than 576px)
     @media (max-width: 320px) {
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `}
`;
