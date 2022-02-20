import { extendType } from 'nexus';

export const ProductQuery = extendType({
  type: 'Query',
  definition: (t) => {
    // getAllProducts: returns all products
    t.nonNull.list.nonNull.field('getAllProducts', {
      type: 'Product',
      resolve: (_root, _data, ctx) => {
        return ctx.prisma.product.findMany();
      },
    });
  },
});
