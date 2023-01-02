import styled, { css } from 'styled-components';
import { flexDefault } from '../../../assets/themes/functions/flexDefault';
import { marginDefault } from '../../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../../assets/themes/functions/paddingDefault';
import { utilsDefault } from '../../../assets/themes/functions/utilsDefault';
import { widthDefault } from '../../../assets/themes/functions/widthDefault';
import { TypeDefault } from '../../../assets/themes/TypeDefault';

export const ListDefaultContainer = styled.ul<TypeDefault>`
  ${({ theme, ...props }) => css`
    list-style-type: none;

    ${
      props.widthDefault
        ? widthDefault.widthDefault(props.widthDefault)
        : theme.widthDefault({ widthDefault: { value: 10, unit: '%' } })
    }
    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({
            flexDefault: 'flex',
            flexDirectionDefault: 'column',
            flexGapDefault: { column: 0, row: 2, unit: 'rem' },
          })
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
  `}
`;

export const ItenListDefaultContainer = styled.li<TypeDefault>`
  ${({ theme, ...props }) => css`
    list-style-type: none;
    ${
      props.widthDefault
        ? widthDefault.widthDefault(props.widthDefault)
        : theme.widthDefault({ widthDefault: { value: 10, unit: '%' } })
    }

    ${
      props.flexDefault
        ? flexDefault.flexDefault(props.flexDefault)
        : theme.flexDefault({
            flexDefault: 'flex',
            flexGapDefault: { column: 0.1, row: 0.1, unit: 'rem' },
            flexDirectionDefault: 'column',
            flexWrapDefault: 'wrap',
          })
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
  `}
`;
