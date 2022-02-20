import { objectType } from 'nexus';

export const ProductType = objectType({
  name: 'Product',
  definition: (t) => {
    t.nonNull.id('id');
    t.nonNull.string('title');
    t.nonNull.string('description');
    t.nonNull.int('price');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
  },
});
