import { arg, extendType, nonNull } from 'nexus';

export const ProductMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    // createProduct: Create a product
    t.nonNull.field('createProduct', {
      type: 'Product',
      args: {
        data: nonNull(arg({ type: 'CreateProductInput' })),
      },
      resolve: (_root, { data }, ctx) => {
        return ctx.prisma.product.create({ data });
      },
    });
  },
});
