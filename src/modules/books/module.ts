import { createModule } from 'graphql-modules';
import { booksResolver } from './resolvers';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

export const booksModule = createModule({
  id: 'book-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(path.join(__dirname, './*.graphql')),
  resolvers: booksResolver
});
