import { arg, extendType, nonNull } from 'nexus';
import { generateJwt } from '../../utils/jsonwebtoken';

export const AuthMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    // login: sign in a user
    t.nonNull.field('login', {
      type: 'AuthPayload',
      args: {
        data: nonNull(arg({ type: 'LoginInput' })),
      },
      resolve: async (_root, { data }, ctx) => {
        const user = await ctx.prisma.user.findUnique({
          where: { email: data.email },
        });

        if (!user) throw new Error('User not exists!');

        if (user.password != data.password) throw new Error('Bad password');

        const jwt = (await generateJwt(user.id)) as string;

        return { user, token: jwt };
      },
    });
  },
});
