/* eslint-disable no-unused-vars */
import { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

interface ICartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface INavbarCtx {
  cart: ICartProduct[];
  setCartProduct: (product: ICartProduct) => void;
}

export const NavbarCtx = createContext<INavbarCtx>({
  cart: [],
  setCartProduct: () => {},
});

export const NavbarProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  const setCartProduct = (product: ICartProduct) => {
    // check if product exists in cart
    const exists = cart.find((p) => p.id === product.id);

    if (exists) {
      // if it exists, increment quantity
      exists.quantity += product.quantity;
      setCart((prev) => prev.filter((p) => (p.id === product.id ? { ...exists } : p)));
    } else {
      // if it does not exist, add to cart
      setCart((prev) => [...prev, product]);
    }
  };

  return (
    <NavbarCtx.Provider value={{ cart, setCartProduct }}>{children}</NavbarCtx.Provider>
  );
};