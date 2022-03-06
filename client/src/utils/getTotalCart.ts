import { ICartProduct } from '@/context/navbar/NavbarCtx';

export const getTotalCart = (cart: ICartProduct[]): number => {
  let total: number = 0;
  cart.forEach((p) => {
    total += p.price * p.quantity;
  });

  return total;
};
