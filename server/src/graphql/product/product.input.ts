import { inputObjectType } from 'nexus';

export const CreateProductInput = inputObjectType({
  name: 'CreateProductInput',
  definition: (t) => {
    t.nonNull.string('title');
    t.nonNull.string('description');
    t.nonNull.int('price');
  },
});
