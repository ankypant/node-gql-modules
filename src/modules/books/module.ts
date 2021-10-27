import { createModule } from 'graphql-modules';
import { booksResolver } from './resolvers';
import { bookTypeDefs } from './type-defs';

export const booksModule = createModule({
  id: 'book-module',
  dirname: __dirname,
  typeDefs: bookTypeDefs,
  resolvers: booksResolver,
});
