import { arg, extendType, nonNull } from 'nexus';

export const UserMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    // createUser: create a new user
    t.nonNull.field('createUser', {
      type: 'User',
      args: {
        data: nonNull(arg({ type: 'CreateUserInput' })),
      },
      resolve: async (_root, { data }, ctx) => {
        const user = await ctx.prisma.user.findUnique({
          where: { email: data.email },
        });

        if (user) throw new Error('User already exists');

        return ctx.prisma.user.create({ data });
      },
    });
  },
});
