import { objectType } from 'nexus';

export const ProductType = objectType({
  name: 'Product',
  definition: (t) => {
    t.nonNull.id('id');
    t.nonNull.string('title');
    t.nonNull.string('description');
    t.nonNull.float('price');
    t.nonNull.string('img');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
  },
});
