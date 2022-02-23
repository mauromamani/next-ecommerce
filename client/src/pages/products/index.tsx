import { Box, Grid } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { withUrqlClient } from 'next-urql';

import { ProductCard } from '@/components/products/productCard';
import { useAllProductsQuery } from '@/graphql/@types';
import { ALL_PRODUCTS } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

const ProductsPage = () => {
  const [{ data }] = useAllProductsQuery();

  return (
    <Box paddingX="6">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data?.getAllProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </Grid>
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
