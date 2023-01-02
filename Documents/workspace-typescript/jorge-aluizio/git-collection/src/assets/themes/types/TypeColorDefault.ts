export const TYPE_COLOR_VARIANT_DEFAULT = {
  primary: {
    50: '#e6e7ee',
    100: '#b3b5c9',
    200: '#8e92af',
    300: '#5a608b',
    400: '#3a4175',
    500: '#091152',
    600: '#080f4b',
    700: '#060c3a',
    800: '#05092d',
    900: '#040722'
  },
  secondary: {
    50: '#fef6e7',
    100: '#fce3b5',
    200: '#fad591',
    300: '#f8c25f',
    400: '#f7b640',
    500: '#f5a410',
    600: '#df950f',
    700: '#ae740b',
    800: '#875a09',
    900: '#674507'
  },
  dark: {
    50: '#ebebec',
    100: '#c0c2c4',
    200: '#a2a4a7',
    300: '#777b7f',
    400: '#5d6166',
    500: '#343a40',
    600: '#2f353a',
    700: '#25292d',
    800: '#1d2023',
    900: '#16181b'
  },
  light: {
    50: '#ffffff',
    100: '#ffffff',
    200: '#ffffff',
    300: '#ffffff',
    400: '#ffffff',
    500: '#ffffff',
    600: '#e8e8e8',
    700: '#b5b5b5',
    800: '#8c8c8c',
    900: '#6b6b6b'
  },
  danger: {
    50: '#fcebec',
    100: '#f4c0c5',
    200: '#efa2a9',
    300: '#e87882',
    400: '#e35d6a',
    500: '#dc3545',
    600: '#c8303f',
    700: '#9c2631',
    800: '#791d26',
    900: '#5c161d'
  },
  success: {
    50: '#eaf6ec',
    100: '#bce4c5',
    200: '#9cd7a9',
    300: '#e87882',
    400: '#53b96a',
    500: '#28a745',
    600: '#24983f',
    700: '#1c7731',
    800: '#165c26',
    900: '#11461d'
  },
  info: {
    50: '#e6f2ff',
    100: '#b0d6ff',
    200: '#8ac2ff',
    300: '#54a7ff',
    400: '#3395ff',
    500: '#007bff',
    600: '#0070e8',
    700: '#0057b5',
    800: '#00448c',
    900: '#00346b'
  },
  warning: {
    50: '#fef6e7',
    100: '#fce3b5',
    200: '#fad591',
    300: '#f8c25f',
    400: '#f7b640',
    500: '#f5a410',
    600: '#df950f',
    700: '#ae740b',
    800: '#875a09',
    900: '#674507'
  },
  gray: {
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#E1E1E6',
    400: '#C4C4CC',
    500: '#8D8D99',
    600: '#7C7C8A',
    700: '#323238',
    800: '#202024',
    900: '#121214'
  },
  green: {
    50: '#2f8f9d',
    100: '#1d5c63',
    200: '#3bacb6',
    300: '#3bacb6',
    400: '#00B37E',
    500: '#00875F',
    600: '#015F43',
    700: '#3bacb6',
    800: '#3bacb6',
    900: '#3bacb6'
  },
  blue: {
    50: '#2155cd',
    100: '#242f9b',
    200: '#dbdffd',
    300: '#dbdffd',
    400: '#dbdffd',
    500: '#dbdffd',
    600: '#dbdffd',
    700: '#dbdffd',
    800: '#dbdffd',
    900: '#dbdffd'
  },
  red: {
    50: 'red',
    100: '#FFFFFF',
    200: '#eb5353',
    300: '#eb5353',
    400: '#eb5353',
    500: '#F03847',
    600: '#00875F',
    700: '#eb5353',
    800: '#eb5353',
    900: '#eb5353'
  },
  yellow: {
    50: '#DBAC2C',
    100: '#C47F17',
    200: '#F1E9C9',
    300: '#F1E9C9',
    400: '#F1E9C9',
    500: '#F1E9C9',
    600: '#F1E9C9',
    700: '#F1E9C9',
    800: '#F1E9C9',
    900: '#F1E9C9'
  },
  purple: {
    50: '#8047F8',
    100: '#4B2995',
    200: '#EBE5F9',
    300: '#EBE5F9',
    400: '#EBE5F9',
    500: '#EBE5F9',
    600: '#EBE5F9',
    700: '#EBE5F9',
    800: '#EBE5F9',
    900: '#EBE5F9'
  },
  pink: {
    50: '#8047F8',
    100: '#4B2995',
    200: '#EBE5F9',
    300: '#EBE5F9',
    400: '#EBE5F9',
    500: '#fb5974',
    600: '#EBE5F9',
    700: '#EBE5F9',
    800: '#EBE5F9',
    900: '#EBE5F9'
  },
  default: {
    none: 'none',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  }
};

export type TypeVariantDefault = typeof TYPE_COLOR_VARIANT_DEFAULT;

export const VariantIndex = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
  light: 'light',
  danger: 'danger',
  success: 'success',
  info: 'info',
  warning: 'warning',
  gray: 'gray',
  green: 'green',
  blue: 'blue',
  red: 'red',
  yellow: 'yellow',
  purple: 'purple',
  default: 'default'
};

export type TypeVariantIndexDefault = typeof VariantIndex;

export const VariantValue = {
  50: '50',
  100: '100',
  200: '200',
  300: '300',
  400: '400',
  500: '500',
  600: '600',
  700: '700',
  800: '800',
  900: '900',
  transparent: 'transparent'
};

export type TypeVariantValueDefault = typeof VariantValue;

export type VariantType =
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
  | 'icon'
  | 'outline'
  | 'default';

export type ColorIndex =
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
  | 'icon'
  | 'outline'
  | 'default';
export type ColorValue =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'transparent';
