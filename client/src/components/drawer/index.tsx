import {
  Drawer as D,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';

export const Drawer: FC = () => {
  const { onClose, isOpen } = useContext(NavbarCtx);

  return (
    <D placement={'right'} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </D>
  );
};
