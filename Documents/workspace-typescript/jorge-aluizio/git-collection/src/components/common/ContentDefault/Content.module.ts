import styled, { css } from 'styled-components';
import { afterDefault } from '../../../assets/themes/functions/afterDefault';
import { backgroundImgDefault } from '../../../assets/themes/functions/backgroundImgDefault';
import { beforeDefault } from '../../../assets/themes/functions/beforeDefault';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { colorDefault } from '../../../assets/themes/functions/colorDefault';
import { effectDefault } from '../../../assets/themes/functions/effectDefaults';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { gridDefault } from '../../../assets/themes/functions/gridDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { positionDefault } from '../../../assets/themes/functions/positionDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContentDefaultStyle = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    /* height: 100%; */
    /*GRID DEFAULT */
    ${props.gridDefault && gridDefault.gridDefault({})}


    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({})
    };

   /*EFFECT DEFAULT */
   ${props.effectDefault && effectDefault.effectDefault({})}
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && beforeDefault({})};
    /*BEFORE DEFAULT  */
    ${props.afterDefault && afterDefault({})};
    /*POSITION DEFAULT  */
    ${props.positionDefault && positionDefault({})};
    /*BACKGROUND IMG DEFAULT  */
    ${
      props.backgroundImgDefault
        ? backgroundImgDefault.backgroundImgDefault(props.backgroundImgDefault)
        : theme.backgroundImgDefault({})
    }
   /*BORDER DEFAULT */
   ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };
    ${props.iconDefault && props.iconDefault()}

     /*HEIGHT DEFAULT  */
    ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}
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

    ${props.gridTemplateColumnsDefault && props.gridTemplateColumnsDefault()}

    ${props.gridTemplateRowsDefault && props.gridTemplateRowsDefault()}
    ${props.gridColumnDefault && props.gridColumnDefault()}
    ${props.gridRowDefault && props.gridRowDefault()}
    /* FLEX DEFAULT */
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({})
    }
  `}
`;
