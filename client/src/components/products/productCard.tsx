import { Box, Heading, Icon, Image, Link as L, Stack, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { MdFavorite } from 'react-icons/md';

interface IProps {
  id: string;
  img: string;
  title: string;
  price: number;
}

export const ProductCard: FC<IProps> = ({ img, title, price, id }) => {
  return (
    <Box border={'1px'} borderColor="gray.300" rounded={'md'} backgroundColor="white">
      <Box>
        <Image src={img} alt={title} draggable="false" roundedTop={'md'} />
      </Box>

      <Box paddingX={'4'} paddingY={'2'} display="flex" justifyContent={'space-between'}>
        <Stack direction={'column'} spacing="2">
          <Link href={`/products/${id}`}>
            <L>
              <Heading fontSize={'lg'} fontWeight="medium" textColor={'gray.800'}>
                {title}
              </Heading>
            </L>
          </Link>
          <Heading fontSize={'sm'} fontWeight="semibold" textColor={'gray.600'}>
            ${price}
          </Heading>
        </Stack>
        <Box>
          <Tooltip label="Agregar a favoritos">
            <Box>
              <Icon
                as={MdFavorite}
                w={6}
                h={6}
                _hover={{ color: 'red.900', cursor: 'pointer' }}
              />
            </Box>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
