import { SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

import { Product } from '@/graphql/@types';

import { ProductCard } from './productCard';

interface IProps {
  products: Product[];
}

export const ProductGrid: FC<IProps> = ({ products }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, null, 4]} gap={6}>
      {products?.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </SimpleGrid>
  );
};
