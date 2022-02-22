import { Box, Grid } from '@chakra-ui/react';

import { ProductCard } from '@/components/products/productCard';
import { useGetAllProductsQuery } from '@/graphql/@types';

const ProductsPage = () => {
  const [query] = useGetAllProductsQuery();

  if (query.fetching) {
    return <Box textAlign={'center'}>Fetching...</Box>;
  }

  if (query.error) {
    return <Box>Error</Box>;
  }

  console.log(query.data?.getAllProducts);

  return (
    <Box paddingX="6">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {query.data?.getAllProducts.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default ProductsPage;
