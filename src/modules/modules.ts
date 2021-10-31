import { createApplication } from 'graphql-modules';
import { booksModule } from './books/module';
import { moviesModule } from './movies/module';

// This is your application, it contains your GraphQL schema and the implementation of it.
export const applicationGQLModules = createApplication({
  modules: [booksModule, moviesModule]
});
