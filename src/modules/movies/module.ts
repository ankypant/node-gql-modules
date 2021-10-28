import { createModule } from 'graphql-modules';
import { moviesResolver } from './resolvers';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

export const moviesModule = createModule({
  id: 'movies-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(path.join(__dirname, './*.graphql')),
  resolvers: moviesResolver,
});
