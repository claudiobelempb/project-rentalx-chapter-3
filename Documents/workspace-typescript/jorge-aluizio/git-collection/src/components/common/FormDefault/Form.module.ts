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

export const FormContainerDefault = styled.form<TypeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

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
    ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };

    /*HEIGHT DEFAULT  */
    ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}

    /*EFFECT DEFAULT */
    ${props.effectDefault && effectDefault.effectDefault({})}
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && beforeDefault({})};
    /*BEFORE DEFAULT  */
    ${props.afterDefault && afterDefault({})};
    /*POSITION DEFAULT  */
    ${props.positionDefault && positionDefault({})};

    /* GRID DEFAULT */
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

    ${props.iconDefault && props.iconDefault()}

  `}
`;
