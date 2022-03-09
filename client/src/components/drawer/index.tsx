import {
  CloseButton,
  Drawer as D,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';

import { DrawerBody } from './drawerBody';

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
        <DrawerBody onClose={onClose} />
      </DrawerContent>
    </D>
  );
};
