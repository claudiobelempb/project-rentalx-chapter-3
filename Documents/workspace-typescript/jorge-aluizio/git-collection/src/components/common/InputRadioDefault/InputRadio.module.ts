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

export const Container = styled.fieldset`
  display: flex;
  align-items: flex-end;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  gap: 1rem;
  border: none;
`;

export const InputDefaultContainer = styled.input<TypeDefault>`
  border: none;
  ${({ theme, ...props }) => css`
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
      /* border: 2px solid transparent; */
      /*BORDER DEFAULT */

      /*BORDER DEFAULT */
    ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };

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





        border-radius: 0.5rem;





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

      &:focus {
        /*BORDER DEFAULT */
    ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };

        border-radius: 0.5rem;
        /* outline: none; */

      }

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
    ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };
    `}
`;

export const InputCheckboxDefaultContainer = styled(InputDefaultContainer)`
  ${({ theme, ...props }) => css`
    &[type='checkbox'] {
      flex-grow: 0 !important;
    }

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

export const InputRadioDefaultContainer = styled(InputDefaultContainer)`
  ${({ theme, ...props }) => css`
    &[type='radio'] {
      flex-grow: 0 !important;
    }
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

export const SelectDefaultContainer = styled.select<TypeDefault>`
  ${({ theme, ...props }) => css`
    border: none;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    flex-grow: 1;
    /* width: 100%; */
    outline: none;

    outline: none;
    padding: 1rem 2rem;

    border: 1px solid hsla(0, 0%, 40%, 0.4);
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
    ${props.borderDefault && borderDefault.borderDefault(props.borderDefault)}
    /*BORDER RADIUS DEFAULT */
    ${
      props.borderRadiusDefault &&
      borderRadiusDefault.borderRadiusDefault(props.borderRadiusDefault)
    };
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
  `}
`;

export const TextAreaDefaultContainer = styled.textarea<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    outline: none;

    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid hsla(0, 0%, 40%, 0.4);

    /*HEIGHT DEFAULT  */
    ${props.heightDefault && heightDefault.heightDefault(props.heightDefault)}
    /*WIDTH DEFAULT  */
    ${props.widthDefault && widthDefault.widthDefault(props.widthDefault)}

    /*UTILS DEFAULT */
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
  `}
`;

export const LabelDefaultContainer = styled.label<TypeDefault>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
    ${theme.colorDefault({
      backgroundColorDefalut: { index: 'default', value: 'transparent' },
      colorDefalut: { index: 'gray', value: 'v100' },
    })};

  `}
`;
