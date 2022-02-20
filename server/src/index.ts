import { ApolloServer } from 'apollo-server';
import { schema } from './graphql/schema';
import { context } from './context';

const server = new ApolloServer({
  schema,
  context,
});

server.listen().then(({ url }) => {
  console.log('Server ready at port: ' + url);
});
