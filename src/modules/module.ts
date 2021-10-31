import { createModule } from 'graphql-modules';
import { tvSeriesResolver } from './resolvers';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

export const tvSeriesModule = createModule({
  id: 'tvSeries-module',
  dirname: __dirname,
  typeDefs: loadFilesSync(path.join(__dirname, './*.graphql')),
  resolvers: tvSeriesResolver
});
