import styled, { css } from 'styled-components';
import {
  borderDefault,
  borderRadiusDefault,
} from '../../../assets/themes/functions/borderDefault';
import { colorDefault } from '../../../assets/themes/functions/colorDefault';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { heightDefault } from '../../../assets/themes/functions/heightDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const Container = styled.fieldset<TypeDefault>`
  ${({ theme, ...props }) => css`
  display: flex;

  ${
    props.flexDefault
      ? flexDefault.flexDefault(props.flexDefault)
      : theme.flexDefault({
          flexDefault: 'flex',
          flexAlignItemsDefault: 'center',
          flexGrowDefault: 1,
        })
  }

  width: 100%;
  gap: 1rem;
  border: none;
  `};
`;

export const InputDefaultContainer = styled.input<TypeDefault>`
  ${({ theme, ...props }) => css`
  width: 100%;
  height: 4rem;


    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='number'] {
      /* FLEX DEFAULT */
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({})
    }

       /*HEIGHT DEFAULT  */
      ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
      /*WIDTH DEFAULT  */
      ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}
      padding: 1rem 2rem;
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
      };

      ${
        props.colorDefault
          ? colorDefault.colorDefault(props.colorDefault)
          : theme.colorDefault({
              backgroundColorDefalut: { index: 'default', value: 'white' },
              colorDefalut: { index: 'gray', value: 'v500' },
            })
      };

      ${
        props.hasError &&
        css`


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
                      color: { index: 'red', value: 'v500' },
                    },
                  },
                },
              })
        };

            `
      }
      /*BORDER RADIUS DEFAULT */
      ${
        props.borderRadiusDefault
          ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
          : theme.borderRadiusDefault.borderRadiusDefault({
              borderRadiusDefault: {
                width: 0.5,
                unit: 'rem',
              },
            })
      };





      :focus {
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
                      color: { index: 'green', value: 'v400' },
                    },
                  },
                },
              })
        };

        /*BORDER RADIUS DEFAULT */
        ${
          props.borderRadiusDefault
            ? borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
            : theme.borderRadiusDefault.borderRadiusDefault({
                borderRadiusDefault: {
                  width: 0.5,
                  unit: 'rem',
                  colorDefault: {
                    borderColorDefalut: {
                      color: { index: 'red', value: 'v500' },
                    },
                  },
                },
              })
        };

      }

      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }

      ${
        props.disabled &&
        css`
          &:disabled {
            cursor: not-allowed;
            opacity: 0.7;
          }
        `
      }

      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;


       /*HEIGHT DEFAULT  */
    ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}

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


    & [type='submit'],
    & [type='select'],
    & [type='reset'] {
      flex-grow: 1;
      /* width: 100%; */
      padding: 1rem 2rem;
      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;
      ${
        props.colorDefault
          ? colorDefault.colorDefault(props.colorDefault)
          : theme.colorDefault({
              focusColorDefalut: { color: { index: 'gray', value: 'v100' } },
              placeholderColorDefalut: {
                background: { index: 'default', value: 'transparent' },
                color: { index: 'gray', value: 'v500' },
              },
              borderColorDefalut: { color: { index: 'blue', value: 'v500' } },
              backgroundColorDefalut: {
                index: 'default',
                value: 'transparent',
              },
              colorDefalut: { index: 'gray', value: 'v100' },
            })
      };

      border-radius: 0.5rem;
      /* outline: none; *

       /*HEIGHT DEFAULT  */
      ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
      /*WIDTH DEFAULT  */
      ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}

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
          : theme.borderDefault.borderDefault({
              borderDefault: {
                width: 3,
                colorDefault: {
                  borderColorDefalut: {
                    color: { index: 'red', value: 'v500' },
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
                width: 3,
                colorDefault: {
                  borderColorDefalut: {
                    color: { index: 'red', value: 'v500' },
                  },
                },
              },
            })
      };

    `}
`;

export const LabelDefaultContainer = styled.label<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
    ${
      props.colorDefault
        ? colorDefault.colorDefault(props.colorDefault)
        : theme.colorDefault({
            focusColorDefalut: { color: { index: 'gray', value: 'v100' } },
            placeholderColorDefalut: {
              background: { index: 'default', value: 'transparent' },
              color: { index: 'gray', value: 'v500' },
            },
            borderColorDefalut: { color: { index: 'blue', value: 'v500' } },
            backgroundColorDefalut: { index: 'default', value: 'transparent' },
            colorDefalut: { index: 'gray', value: 'v100' },
          })
    };

  `}
`;
