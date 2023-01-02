import styled, { css } from 'styled-components';
import ImgBg from '../../assets/images/background.svg';
import { backgroundImgDefault } from '../../assets/themes/functions/backgroundImgDefault';
import { marginDefault } from '../../assets/themes/functions/marginDefault';
import { paddingDefault } from '../../assets/themes/functions/paddingDefault';
import { utilsDefault } from '../../assets/themes/functions/utilsDefault';
import { TypeDefault } from '../../assets/themes/TypeDefault';
export const HomeDefaultStyle = styled.div<TypeDefault>`
  ${({ theme, ...props }) => css`
    /* z-index: -30; */
    /* height: 100%; */
    position: relative;
    /* width: 100%; */
    /* height: 100vh; */

    ${
      props.backgroundImgDefault
        ? backgroundImgDefault.backgroundImgDefault(props.backgroundImgDefault)
        : theme.backgroundImgDefault({
            url: ImgBg,
            backgroundPosition: 'top',
            backgroundSize: 'contain',
            defaultColor: {
              backgroundColorDefalut: { index: 'gray', value: 'v200' },
            },
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


    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */


    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {

    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {

    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {

    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {

    }
  `}
`;
