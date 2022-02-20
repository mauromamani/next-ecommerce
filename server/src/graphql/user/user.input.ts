import { inputObjectType } from 'nexus';

export const CreateUserInput = inputObjectType({
  name: 'CreateUserInput',
  definition: (t) => {
    t.nonNull.string('email');
    t.nonNull.string('password');
  },
});
