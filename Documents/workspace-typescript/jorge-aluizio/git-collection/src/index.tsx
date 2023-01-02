import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/GlobalStyle';
import { ThemeDefault } from './assets/themes/themeDefault';
import { Main } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeDefault}>
      <Main />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
