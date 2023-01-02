import { css } from 'styled-components';

export type TypeDisplayPropsDefault = {
  value?:
    | 'flex'
    | 'grid'
    | 'block'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'none'
    | 'initial'
    | 'inherit'
    | 'unset';
};

export const displayDefault = ({ value }: TypeDisplayPropsDefault) =>
  css`
    display: ${value && value};
  `;
