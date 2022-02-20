import { objectType } from 'nexus';

export const UserType = objectType({
  name: 'User',
  definition: (t) => {
    t.nonNull.id('id');
    t.nonNull.string('email');
    t.nonNull.string('password');
    t.nonNull.date('createdAt');
    t.nonNull.date('updatedAt');
  },
});
