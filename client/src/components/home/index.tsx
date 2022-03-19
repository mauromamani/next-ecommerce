import 'swiper/css';
import 'swiper/css/navigation';

import { Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Product } from '@/graphql/@types';

import { ProductCard } from '../products/productCard';
import { ImageHeader } from './imageHeader';

interface Props {
  products: Product[];
}

export const Home: FC<Props> = ({ products }) => {
  return (
    <>
      <Stack direction={['row']} spacing="10" padding={10}>
        <ImageHeader
          href="/products"
          title="Hombres"
          image="https://cdn.shopify.com/s/files/1/0046/2452/t/7/assets/promo1.jpg?v=17771038893842288667"
        />
        <ImageHeader
          href="/products"
          title="Mujeres"
          image="https://cdn.shopify.com/s/files/1/0046/2452/t/7/assets/promo2.jpg?v=8958659307121583012"
        />
      </Stack>

      <Swiper
        spaceBetween={20}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          500: {
            width: 500,
            slidesPerView: 1,
          },
          800: {
            width: 800,
            slidesPerView: 2,
          },
        }}>
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
