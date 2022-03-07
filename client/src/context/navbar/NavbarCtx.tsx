/* eslint-disable no-unused-vars */
import { createContext, FC, useEffect, useState } from 'react';

export interface ICartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

interface INavbarCtx {
  cart: ICartProduct[];
  setCartProduct: (product: ICartProduct) => void;
  removeCartProduct: (id: string) => void;
}

export const NavbarCtx = createContext<INavbarCtx>({
  cart: [],
  setCartProduct: () => {},
  removeCartProduct: () => {},
});

export const NavbarProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<ICartProduct[]>([]);

  useEffect(() => {
    const cartJson = localStorage.getItem('cart');
    if (cartJson) {
      const cartParsed = JSON.parse(cartJson);
      setCart(cartParsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  const removeCartProduct = (id: string) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <NavbarCtx.Provider value={{ cart, setCartProduct, removeCartProduct }}>
      {children}
    </NavbarCtx.Provider>
  );
};
