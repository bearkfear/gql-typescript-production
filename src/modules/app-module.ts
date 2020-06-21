import { GraphQLModule } from '@graphql-modules/core';
import HelloModule from './hello-module';

export default new GraphQLModule({
  imports: [
    HelloModule
  ]
});
