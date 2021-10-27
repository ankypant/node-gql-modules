import { createModule } from 'graphql-modules';
import { moviesResolver } from './resolvers';
import { moviesTypeDefs } from './type-defs';

export const moviesModule = createModule({
  id: 'movies-module',
  dirname: __dirname,
  typeDefs: moviesTypeDefs,
  resolvers: moviesResolver,
});
