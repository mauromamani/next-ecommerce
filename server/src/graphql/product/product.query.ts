import { extendType, idArg, nonNull } from 'nexus';

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
    // getProductById: return a product given id
    t.nonNull.field('getProductById', {
      type: 'Product',
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_root, { id }, ctx) => {
        const product = await ctx.prisma.product.findUnique({ where: { id } });

        if (!product) {
          throw new Error('Product not found');
        }

        return product;
      },
    });
  },
});
