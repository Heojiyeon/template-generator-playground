import '@/styles/globals.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import Layout from '@/components/layout';

const theme = extendTheme({
  fonts: {
    body: 'SUIT-Regular',
    heading: 'SUIT-Regular',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
