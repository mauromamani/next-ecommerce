import { extendType, nonNull, stringArg } from 'nexus';

export const UserQuery = extendType({
  type: 'Query',
  definition: (t) => {
    // getAllUsers: return an array of users
    t.nonNull.list.nonNull.field('getAllUsers', {
      type: 'User',
      resolve: (_root, _args, ctx) => {
        return ctx.prisma.user.findMany();
      },
    });
    // getUserById: return a user given an provided id
    t.nonNull.field('getUserById', {
      type: 'User',
      args: {
        id: nonNull(stringArg()),
      },
      resolve: async (_root, args, ctx) => {
        const user = await ctx.prisma.user.findUnique({
          where: { id: args.id || undefined },
        });

        if (!user) throw new Error('User not found');

        return user;
      },
    });
    // getMe: return authenticated user
    t.field('getMe', {
      type: 'User',
      authorize: (_root, _args, ctx) => (ctx.uid ? true : false),
      resolve: async (_root, _args, ctx) => {
        return ctx.prisma.user.findUnique({
          where: { id: ctx.uid || undefined },
        });
      },
    });
  },
});
