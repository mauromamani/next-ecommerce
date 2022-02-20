import { makeSchema, fieldAuthorizePlugin } from 'nexus';
import { join } from 'path';

import * as user from './user';
import * as product from './product';
import * as auth from './auth';
import * as scalars from './scalars/scalars';

export const schema = makeSchema({
  types: [scalars, user, auth, product],
  outputs: {
    schema: join(__dirname, '..', '..', 'nexus', 'schema.graphql'),
    typegen: join(__dirname, '..', '..', 'nexus', 'nexus.gen.ts'),
  },
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  plugins: [fieldAuthorizePlugin()],
});
