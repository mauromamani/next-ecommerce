import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { withUrqlClient } from 'next-urql';

import { Home } from '@/components/home';
import { AlertMessage } from '@/components/ui/alertMessage';
import { useAllProductsQuery } from '@/graphql/@types';
import { ALL_PRODUCTS } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

function HomePage() {
  const [{ data, error }] = useAllProductsQuery();

  if (error) {
    return (
      <AlertMessage
        status="error"
        title="Ocurrió un Error!"
        description="Contacte con el administrador del sitio"
      />
    );
  }
  return (
    <Box padding="12" paddingTop={{ base: '0', md: '8' }} backgroundColor="gray.100">
      <Home products={data?.getAllProducts as []} />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client?.query(ALL_PRODUCTS).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(
  () => ({
    url: 'http://localhost:3000',
  }),
  { ssr: false, neverSuspend: true },
)(HomePage);
