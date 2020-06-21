import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

export default new GraphQLModule({
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Ola mundo'
    }
  }
});
