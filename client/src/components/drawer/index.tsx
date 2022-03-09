import {
  CloseButton,
  Drawer as D,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { Link } from '@/components/navbar/Link';
import { NavbarCtx } from '@/context/navbar/NavbarCtx';

export const Drawer: FC = () => {
  const { onClose, isOpen } = useContext(NavbarCtx);

  return (
    <D placement={'right'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          borderBottomWidth="1px"
          display={'flex'}
          justifyContent="space-between">
          <Text>Ecommerce</Text>
          <CloseButton onClick={onClose} />
        </DrawerHeader>
        <DrawerBody>
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
        </DrawerBody>
      </DrawerContent>
    </D>
  );
};
