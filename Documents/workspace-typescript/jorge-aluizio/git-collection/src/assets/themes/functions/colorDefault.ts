import { css } from 'styled-components';
import { TypeThemeNumberDefault } from '../ThemeType';
import { TypeBorderDefault } from './borderDefault';

export const VariantObjDefault = {
  primary: {
    v50: '#e6e7ee',
    v100: '#b3b5c9',
    v200: '#8e92af',
    v300: '#5a608b',
    v400: '#3a4175',
    v500: '#091152',
    v600: '#080f4b',
    v700: '#060c3a',
    v800: '#05092d',
    v900: '#040722',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  secondary: {
    v50: '#fef6e7',
    v100: '#fce3b5',
    v200: '#fad591',
    v300: '#f8c25f',
    v400: '#f7b640',
    v500: '#f5a410',
    v600: '#df950f',
    v700: '#ae740b',
    v800: '#875a09',
    v900: '#674507',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  dark: {
    v50: '#ebebec',
    v100: '#c0c2c4',
    v200: '#a2a4a7',
    v300: '#777b7f',
    v400: '#5d6166',
    v500: '#343a40',
    v600: '#2f353a',
    v700: '#25292d',
    v800: '#1d2023',
    v900: '#16181b',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  light: {
    v50: '#ffffff',
    v100: '#ffffff',
    v200: '#ffffff',
    v300: '#ffffff',
    v400: '#ffffff',
    v500: '#ffffff',
    v600: '#e8e8e8',
    v700: '#b5b5b5',
    v800: '#8c8c8c',
    v900: '#6b6b6b',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  danger: {
    v50: '#fcebec',
    v100: '#f4c0c5',
    v200: '#efa2a9',
    v300: '#e87882',
    v400: '#e35d6a',
    v500: '#dc3545',
    v600: '#c8303f',
    v700: '#9c2631',
    v800: '#791d26',
    v900: '#5c161d',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  success: {
    v50: '#eaf6ec',
    v100: '#bce4c5',
    v200: '#9cd7a9',
    v300: '#e87882',
    v400: '#53b96a',
    v500: '#28a745',
    v600: '#24983f',
    v700: '#1c7731',
    v800: '#165c26',
    v900: '#11461d',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  info: {
    v50: '#e6f2ff',
    v100: '#b0d6ff',
    v200: '#8ac2ff',
    v300: '#54a7ff',
    v400: '#3395ff',
    v500: '#007bff',
    v600: '#0070e8',
    v700: '#0057b5',
    v800: '#00448c',
    v900: '#00346b',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  warning: {
    v50: '#fef6e7',
    v100: '#fce3b5',
    v200: '#fad591',
    v300: '#f8c25f',
    v400: '#f7b640',
    v500: '#f5a410',
    v600: '#df950f',
    v700: '#ae740b',
    v800: '#875a09',
    v900: '#674507',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  gray: {
    v50: '#FFFFFF',
    v100: '#e1e1e6',
    v200: '#F0F0F5',
    v300: '#3a3a3a',
    v400: '#C4C4CC',
    v500: '#8D8D99',
    v600: '#7C7C8A',
    v700: '#323238',
    v800: '#202024',
    v900: '#121214',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  green: {
    v50: '#2f8f9d',
    v100: '#1d5c63',
    v200: '#3bacb6',
    v300: '#3bacb6',
    v400: '#04d361',
    v500: '#00875F',
    v600: '#3bacb6',
    v700: '#3bacb6',
    v800: '#3bacb6',
    v900: '#3bacb6',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  blue: {
    v50: '#2155cd',
    v100: '#242f9b',
    v200: '#dbdffd',
    v300: '#dbdffd',
    v400: '#dbdffd',
    v500: '#dbdffd',
    v600: '#dbdffd',
    v700: '#dbdffd',
    v800: '#dbdffd',
    v900: '#dbdffd',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  red: {
    v50: 'red',
    v100: '#FFFFFF',
    v200: '#eb5353',
    v300: '#eb5353',
    v400: '#eb5353',
    v500: '#F75A68',
    v600: '#c53030',
    v700: '#eb5353',
    v800: '#eb5353',
    v900: '#eb5353',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  yellow: {
    v50: '#DBAC2C',
    v100: '#C47F17',
    v200: '#F1E9C9',
    v300: '#F1E9C9',
    v400: '#F1E9C9',
    v500: '#FBA94C',
    v600: '#F1E9C9',
    v700: '#F1E9C9',
    v800: '#F1E9C9',
    v900: '#F1E9C9',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  purple: {
    v50: '#8047F8',
    v100: '#4B2995',
    v200: '#EBE5F9',
    v300: '#EBE5F9',
    v400: '#EBE5F9',
    v500: '#EBE5F9',
    v600: '#EBE5F9',
    v700: '#EBE5F9',
    v800: '#EBE5F9',
    v900: '#EBE5F9',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  pink: {
    v50: '#8047F8',
    v100: '#4B2995',
    v200: '#EBE5F9',
    v300: '#EBE5F9',
    v400: '#EBE5F9',
    v500: '#fb5974',
    v600: '#EBE5F9',
    v700: '#EBE5F9',
    v800: '#EBE5F9',
    v900: '#EBE5F9',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  default: {
    v50: '#8047F8',
    v100: '#4B2995',
    v200: '#EBE5F9',
    v300: '#EBE5F9',
    v400: '#EBE5F9',
    v500: '#fb5974',
    v600: '#EBE5F9',
    v700: '#EBE5F9',
    v800: '#EBE5F9',
    v900: '#EBE5F9',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
} as const;

// export type Index = keyof typeof VariantObjDefault;

export type Index =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'light'
  | 'danger'
  | 'success'
  | 'info'
  | 'warning'
  | 'gray'
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'default';

export type Value =
  | 'v50'
  | 'v100'
  | 'v200'
  | 'v300'
  | 'v400'
  | 'v500'
  | 'v600'
  | 'v700'
  | 'v800'
  | 'v900'
  | 'black'
  | 'white'
  | 'transparent';

export type TypeVariant = {
  activeColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  backgroundColorDefalut?: {
    index: Index;
    value: Value;
  };
  colorDefalut?: {
    index: Index;
    value: Value;
  };
  buttomColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  disabledColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  hoverColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  outlineColorDefalut?: {
    color: {
      index: Index;
      value: Value;
    };
  };
  borderColorDefalut?: {
    color: {
      index: Index;
      value: Value;
    };
  };
  hasErrorDefalut?: {
    index: Index;
    value: Value;
  };
  placeholderColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  iconColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  focusColorDefalut?: {
    color: {
      index: Index;
      value: Value;
    };
  };
  linkColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
  inputColorDefalut?: {
    background: {
      index: Index;
      value: Value;
    };
    color: {
      index: Index;
      value: Value;
    };
  };
};

export type TypeColorPropsDefault = {
  variant?: TypeVariant;
  size?: TypeThemeNumberDefault;
  color?: {
    index: Index;
    value: Value;
  };
  urlImg?: string;
  offsetY?: TypeThemeNumberDefault;
  offsetX?: TypeThemeNumberDefault;
  blurRadius?: TypeThemeNumberDefault;
  spreadRadius?: TypeThemeNumberDefault;
  border?: TypeBorderDefault;
};

export const colorDefault = {
  colorDefault: ({
    activeColorDefalut,
    backgroundColorDefalut,
    borderColorDefalut,
    colorDefalut,
    disabledColorDefalut,
    focusColorDefalut,
    hoverColorDefalut,
    iconColorDefalut,
    outlineColorDefalut,
    placeholderColorDefalut,
    hasErrorDefalut,
    buttomColorDefalut,
    inputColorDefalut,
    linkColorDefalut,
  }: TypeVariant) => css`
    ${
      activeColorDefalut &&
      css`
      background-color: ${
        VariantObjDefault[activeColorDefalut.background.index][
          activeColorDefalut.background.value
        ]
      };
      color: ${
        VariantObjDefault[activeColorDefalut.color.index][
          activeColorDefalut.color.value
        ]
      };
    `
    };
    ${
      backgroundColorDefalut &&
      css`
    background-color: ${
      VariantObjDefault[backgroundColorDefalut.index][
        backgroundColorDefalut.value
      ]
    };

    `
    };
    ${
      borderColorDefalut &&
      css`
        /* border: 1px solid red !important; */
        border-color: ${
          VariantObjDefault[borderColorDefalut.color.index][
            borderColorDefalut.color.value
          ]
        };
        `
    };
    ${
      hasErrorDefalut &&
      css`
        /* border: 1px solid red; */
        border-color: ${
          VariantObjDefault[hasErrorDefalut.index][hasErrorDefalut.value]
        };
        `
    };

    ${
      colorDefalut &&
      css`
      color: ${VariantObjDefault[colorDefalut.index][colorDefalut?.value]};
    `
    };
    ${
      buttomColorDefalut &&
      css`
      background-color: ${
        VariantObjDefault[buttomColorDefalut.background.index][
          buttomColorDefalut.background.value
        ]
      };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
      &:hover {
        filter: brightness(0.9);
        cursor: pointer;
        background-color: ${
          VariantObjDefault[buttomColorDefalut.background.index][
            buttomColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
       }
      &:disabled {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[buttomColorDefalut.background.index][
            buttomColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      &:not(:disabled):hover {
        /* opacity: 1; */
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[buttomColorDefalut.background.index][
            buttomColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[buttomColorDefalut.color.index][
            buttomColorDefalut.color.value
          ]
        };
      }
    `
    };
    ${
      inputColorDefalut &&
      css`
      background-color: ${
        VariantObjDefault[inputColorDefalut.background.index][
          inputColorDefalut.background.value
        ]
      };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
      &:hover {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[inputColorDefalut.background.index][
            inputColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
       }
      &:disabled {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[inputColorDefalut.background.index][
            inputColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      &:not(:disabled):hover {
        /* opacity: 1; */
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[inputColorDefalut.background.index][
            inputColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[inputColorDefalut.color.index][
            inputColorDefalut.color.value
          ]
        };
      }
    `
    };
    ${
      linkColorDefalut &&
      css`
      div a {
        background-color: ${
          VariantObjDefault[linkColorDefalut.background.index][
            linkColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[linkColorDefalut.color.index][
            linkColorDefalut.color.value
          ]
        };
        &:hover {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[linkColorDefalut.background.index][
            linkColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[linkColorDefalut.color.index][
            linkColorDefalut.color.value
          ]
        };
       }
       &:disabled {
         filter: brightness(0.9);
         background-color: ${
           VariantObjDefault[linkColorDefalut.background.index][
             linkColorDefalut.background.value
           ]
         };
         color: ${
           VariantObjDefault[linkColorDefalut.color.index][
             linkColorDefalut.color.value
           ]
         };
         cursor: not-allowed;
         opacity: 0.7;
        }
       &:not(:disabled):hover {
         /* opacity: 1; */
         filter: brightness(0.9);
         background-color: ${
           VariantObjDefault[linkColorDefalut.background.index][
             linkColorDefalut.background.value
           ]
         };
         color: ${
           VariantObjDefault[linkColorDefalut.color.index][
             linkColorDefalut.color.value
           ]
         };
       }
      }

    `
    };
    ${
      disabledColorDefalut &&
      css`
       :disabled {
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[disabledColorDefalut.background.index][
            disabledColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[disabledColorDefalut.color.index][
            disabledColorDefalut.color.value
          ]
        };
        cursor: not-allowed;
        opacity: 0.7;
       }
      :not(:disabled):hover {
        /* opacity: 1; */
        filter: brightness(0.9);
        background-color: ${
          VariantObjDefault[disabledColorDefalut.background.index][
            disabledColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[disabledColorDefalut.color.index][
            disabledColorDefalut.color.value
          ]
        };
      }
    };
    `
    };
     ${
       focusColorDefalut &&
       css`
        &:focus {
          border-color: ${
            VariantObjDefault[focusColorDefalut.color.index][
              focusColorDefalut.color.value
            ]
          };
        `
     };
    ${
      hoverColorDefalut &&
      css`
        &:hover {
          filter: brightness(0.6);
          background-color: ${
            VariantObjDefault[hoverColorDefalut.background.index][
              hoverColorDefalut.background.value
            ]
          };
          color: ${
            VariantObjDefault[hoverColorDefalut.color.index][
              hoverColorDefalut.color.value
            ]
          };
        }
      `
    }
      ${
        iconColorDefalut &&
        css`
        & svg {
          background-color: ${
            VariantObjDefault[iconColorDefalut.background.index][
              iconColorDefalut.background.value
            ]
          };
          color: ${
            VariantObjDefault[iconColorDefalut.color.index][
              iconColorDefalut.color.value
            ]
          };
        }
      `
      };
    ${
      outlineColorDefalut &&
      css`
      &:focus {

        outline-color: ${
          VariantObjDefault[outlineColorDefalut.color.index][
            outlineColorDefalut.color.value
          ]
        };
      `
    }
    ${
      placeholderColorDefalut &&
      css`
      &::placeholder {
        background-color: ${
          VariantObjDefault[placeholderColorDefalut.background.index][
            placeholderColorDefalut.background.value
          ]
        };
        color: ${
          VariantObjDefault[placeholderColorDefalut.color.index][
            placeholderColorDefalut.color.value
          ]
        };
      `
    };
  `,
};
