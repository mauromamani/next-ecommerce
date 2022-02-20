import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';

import { client } from '@/graphql/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider value={client}>
        <Component {...pageProps} />;
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
