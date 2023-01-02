import styled, { css } from 'styled-components';
import { afterDefault } from '../../../assets/themes/functions/afterDefault';
import { backgroundImgDefault } from '../../../assets/themes/functions/backgroundImgDefault';
import { beforeDefault } from '../../../assets/themes/functions/beforeDefault';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import {
  colorDefault,
  VariantObjDefault,
} from '../../../assets/themes/functions/colorDefault';
import { effectDefault } from '../../../assets/themes/functions/effectDefaults';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { fontDefault } from '../../../assets/themes/functions/fontDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { positionDefault } from '../../../assets/themes/functions/positionDefault';
import { textDefault } from '../../../assets/themes/functions/textDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ContainerNavLink = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition: all 0.25s ease-in;
    /* border: 3px solid transparent; */
    ${
      props.widthDefault
        ? widthDefault.widthDefault(props.widthDefault)
        : theme.widthDefault({})
    }
    ${
      props.heightDefault
        ? heightDefault.heightDefault(props.heightDefault)
        : theme.heightDefault({})
    }
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({
            flexDefault: 'flex',
            flexAlignItemsDefault: 'center',
            flexGapDefault: { column: 1, row: 1, unit: 'rem' },
          })
    }
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
        : theme.fontDefault({ fontSizeIcon: { value: 0.2, unit: 'rem' } })
    }
    /*ICON DEFAULT */
    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({
            colorDefalut: { index: 'gray', value: 'v500' },
            hoverColorDefalut: {
              background: { index: 'default', value: 'transparent' },
              color: { index: 'gray', value: 'v700' },
            },
            backgroundColorDefalut: { index: 'default', value: 'transparent' },
          })
    };


    & a.active {
      filter: brightness(0.9);
      color: ${
        VariantObjDefault[props.colorDefault?.colorDefalut?.index || 'green'][
          props.colorDefault?.colorDefalut?.value || 'v500'
        ]
      };
    }

    /*EFFECT DEFAULT */
    ${
      props.effectDefault
        ? effectDefault.effectDefault(props.effectDefault)
        : theme.effectDefault({
            effectHoverDefault: {
              colorDefault: {
                hoverColorDefalut: {
                  color: { index: 'primary', value: 'v500' },
                  background: { index: 'default', value: 'transparent' },
                },
              },
            },
          })
    };
    /*BEFORE DEFAULT  */
    ${props.beforeDefault && beforeDefault({})};
    /*BEFORE DEFAULT  */
    ${props.afterDefault && afterDefault({})};
    /*POSITION DEFAULT  */
    ${props.positionDefault && positionDefault({})};
    ${
      props.backgroundImgDefault
        ? backgroundImgDefault.backgroundImgDefault(props.backgroundImgDefault)
        : theme.backgroundImgDefault({})
    }
    /* Padding Default */
    ${
      props.paddingDefault
        ? paddingDefault.paddingDefault(props.paddingDefault)
        : theme.paddingDefault({
            paddingYStaticDefault: { vstatic: 0.2, unit: 'rem' },
            paddingXStaticDefault: { vstatic: 0.1, unit: 'rem' },
          })
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
        : theme.borderRadiusDefault.borderRadiusDefault({
            borderRadiusDefault: { width: 0.5, unit: 'rem' },
          })
    };

  `}
`;
