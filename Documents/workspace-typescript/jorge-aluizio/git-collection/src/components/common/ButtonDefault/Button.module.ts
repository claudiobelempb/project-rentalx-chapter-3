import styled, { css } from 'styled-components';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { colorDefault } from '../../../assets/themes/functions/colorDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ButtonDefaultContainer = styled.button<TypeDefault>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 1rem 2rem;
    font-weight: bold;

    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({
            buttomColorDefalut: {
              background: { index: 'default', value: 'transparent' },
              color: { index: 'primary', value: 'v500' },
            },
          })
    };
    :focus {};
      /*BORDER DEFAULT */
    ${
      props.borderDefault
        ? borderDefault.borderDefault(props.borderDefault)
        : theme.borderDefault.borderDefault({
            borderDefault: {
              width: 0.2,
              style: 'solid',
              unit: 'rem',
              colorDefault: {
                borderColorDefalut: {
                  color: { index: 'default', value: 'transparent' },
                },
              },
            },
          })
    }
      /*BORDER RADIUS DEFAULT */
      ${
        props.borderRadiusDefault
          ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
          : theme.borderDefault.borderDefault({
              borderDefault: {
                width: 0.5,
                unit: 'rem',
              },
            })
      };
    }
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
        : theme.borderDefault.borderDefault({
            borderDefault: {
              width: 0.2,
              style: 'solid',
              unit: 'rem',
              colorDefault: {
                borderColorDefalut: {
                  color: { index: 'default', value: 'transparent' },
                },
              },
            },
          })
    }
      /*BORDER RADIUS DEFAULT */
      ${
        props.borderRadiusDefault
          ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
          : theme.borderDefault.borderDefault({
              borderDefault: {
                width: 0.5,
                unit: 'rem',
                colorDefault: {
                  borderColorDefalut: {
                    color: { index: 'default', value: 'transparent' },
                  },
                },
              },
            })
      };


   `}




`;
