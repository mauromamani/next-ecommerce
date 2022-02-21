import { Box, GridItem, Heading, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface IProps {
  img: string;
  title: string;
  price: number;
}

export const ProductCard: FC<IProps> = ({ img, title, price }) => {
  return (
    <GridItem w="100%" h="10">
      <Box rounded={'md'} cursor="pointer" _hover={{ scale: '2' }}>
        <Box>
          <Image objectFit={'fill'} width="100%" src={img} />
        </Box>
        <Box paddingX={'4'} paddingY={'2'}>
          <Heading fontSize={'lg'} fontWeight="medium">
            {title}
          </Heading>
          <Heading fontSize={'md'} fontWeight="bold">
            ${price}
          </Heading>
        </Box>
      </Box>
    </GridItem>
  );
};
