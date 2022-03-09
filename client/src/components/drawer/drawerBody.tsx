import { DrawerBody as DB, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { Link } from '@/components/navbar/Link';

interface Props {
  onClose: () => void;
}

export const DrawerBody: FC<Props> = ({ onClose }) => {
  return (
    <DB>
      <Stack direction={['column']} spacing="4" mt={'4'}>
        <Link href="/">
          <Heading size={'sm'} fontWeight="semibold" onClick={onClose}>
            Inicio
          </Heading>
        </Link>
        <Link href="/products">
          <Heading size={'sm'} fontWeight="semibold" onClick={onClose}>
            Hombres
          </Heading>
        </Link>
        <Link href="/cart">
          <Heading size={'sm'} fontWeight="semibold" onClick={onClose}>
            Carrito
          </Heading>
        </Link>
      </Stack>
    </DB>
  );
};
