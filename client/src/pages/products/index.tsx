import { Box, SimpleGrid } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { withUrqlClient } from 'next-urql';

import { ProductCard } from '@/components/products/productCard';
import { useAllProductsQuery } from '@/graphql/@types';
import { ALL_PRODUCTS } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

const ProductsPage = () => {
  const [{ data }] = useAllProductsQuery();

  return (
    <Box paddingX="6" paddingY="10" backgroundColor={'gray.100'}>
      <SimpleGrid columns={[1, 2, 3, 4]} gap={6}>
        {data?.getAllProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </SimpleGrid>
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
