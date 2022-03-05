import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { Layout } from '@/components/layout';
import { NavbarProvider } from '@/context/navbar/NavbarCtx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavbarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NavbarProvider>
    </ChakraProvider>
  );
}

export default MyApp;
