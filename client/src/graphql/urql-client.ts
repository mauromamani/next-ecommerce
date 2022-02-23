import { initUrqlClient } from 'next-urql';
import { cacheExchange, dedupExchange, fetchExchange, ssrExchange } from 'urql';

const isServer = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServer });
export const client = initUrqlClient(
  {
    url: process.env.NEXT_PUBLIC_GQL_URI!,
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  },
  false,
);
