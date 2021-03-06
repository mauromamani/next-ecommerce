import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { withUrqlClient } from 'next-urql';

import { ProductGrid } from '@/components/products/productGrid';
import { AlertMessage } from '@/components/ui/alertMessage';
import { useAllProductsQuery } from '@/graphql/@types';
import { ALL_PRODUCTS } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

const ProductsPage = () => {
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
    <Box paddingX="6" paddingY="10" backgroundColor={'gray.100'}>
      <ProductGrid products={data?.getAllProducts as []} />
    </Box>
  );
};

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
)(ProductsPage);
