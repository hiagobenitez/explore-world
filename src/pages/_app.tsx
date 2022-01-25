import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
