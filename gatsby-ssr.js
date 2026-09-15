import React from 'react';
import { CookiesProvider  } from 'react-cookie';
import { ThemeProvider } from './src/styles/themeContext';

export const wrapRootElement = ({ element }) => (
  <CookiesProvider>
    <ThemeProvider>
      {element}
    </ThemeProvider>
  </CookiesProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta key="robots" name="robots" content="noindex, nofollow" />,
  ]);
};
