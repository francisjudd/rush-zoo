import React from 'react';
import '@client';
import '../styles/globals.scss';

import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default App;
