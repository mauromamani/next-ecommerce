import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

interface ICartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface INavbarCtx {
  cart: ICartProduct[];
  setCart: Dispatch<SetStateAction<ICartProduct[]>>;
}

export const NavbarCtx = createContext<INavbarCtx>({ cart: [], setCart: () => {} });

export const NavbarProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  return <NavbarCtx.Provider value={{ cart, setCart }}>{children}</NavbarCtx.Provider>;
};
