import { Box, Heading, Icon, Image, Stack, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';
import { MdFavorite } from 'react-icons/md';

interface IProps {
  img: string;
  title: string;
  price: number;
}

export const ProductCard: FC<IProps> = ({ img, title, price }) => {
  return (
    <Box border={'1px'} borderColor="gray.300" rounded={'md'} backgroundColor="white">
      <Box>
        <Image src={img} alt={title} draggable="false" roundedTop={'md'} />
      </Box>

      <Box paddingX={'4'} paddingY={'2'} display="flex" justifyContent={'space-between'}>
        <Stack direction={'column'} spacing="2">
          <Heading fontSize={'lg'} fontWeight="medium" textColor={'gray.800'}>
            {title}
          </Heading>
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
