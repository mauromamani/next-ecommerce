import { objectType } from 'nexus';

export const AuthPayloadType = objectType({
  name: 'AuthPayload',
  definition: (t) => {
    t.nonNull.field('user', { type: 'User' });
    t.nonNull.string('token');
  },
});
