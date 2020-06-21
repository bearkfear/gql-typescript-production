import AppModule from './modules/app-module';
import { ApolloServer } from 'apollo-server';
import CONST from '@/constants';
const { schema, context } = AppModule;

class Server {
  createServer () {
    const server = new ApolloServer({
      schema,
      context,
      playground: true
    });
    server.listen({
      port: CONST.PORT
    });
    console.debug(`RODANDO SERVIDOR EM ${CONST.ENV} NA PORTA ${CONST.PORT}`);
  }
}

// Rodando o servidor

new Server().createServer();
