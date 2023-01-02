import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*----------*----------*----------*----------*---------- Reset */

  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html {
      ${theme.fontDefault({ fontFamily: 'Roboto' })};
      font-weight: 600;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
      font-size: 62.5%;
      ${theme.colorDefault({
        backgroundColorDefalut: { index: 'gray', value: 'v200' },
        colorDefalut: { index: 'gray', value: 'v400' },
      })};
      min-height: 100vh;
    }
    body {
      font-size: 1.6rem;
      font-weight: 400;
      min-height: 100vh;
    }

    /* #root {
      height: 100vh;
    } */

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      ${theme.fontDefault({ fontFamily: 'Roboto' })};
      ${theme.colorDefault({
        colorDefalut: { index: 'gray', value: 'v400' },
      })};
      font-weight: 900;
      line-height: 160%;
    }
    img,
    figure {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      ${theme.fontDefault({ fontFamily: 'Roboto' })};
      width: 100%;
      text-decoration: none;
      color: inherit;
      align-self: center;
      /* cursor: pointer; */
      a:hover {
        filter: brightness(0.9);
        /* cursor: pointer; */
        color: red;
      }
    }
    p {
      line-height: 160%;
      ${theme.fontDefault({ fontFamily: 'Roboto' })};
    }

    &:focus {
      outline: transparent;
      /* box-shadow: 0 0 0 2px red; */
      /* border-radius: 0.5rem; */
      /* border: 1px solid red; */

      ${theme.borderRadiusDefault.borderRadiusDefault({
        borderRadiusDefault: {
          width: 0.1,
          unit: 'rem',
        },
      })};
    }

    main {
      display: flex;
      flex: 1 1;
      flex-direction: column;
      height: 100vh;
    }

    ol,
    ul {
      list-style-position: inside;
      list-style-type: none;
    }

    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      min-width: 60rem;
    }
    span {
      display: block;
    }
    pre {
      ${theme.colorDefault({
        colorDefalut: { index: 'gray', value: 'v400' },
      })};
    }
  `}
`;
