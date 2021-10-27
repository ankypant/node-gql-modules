import { createApplication } from 'graphql-modules';
import { booksModule } from './modules/books/module';
import { moviesModule } from './modules/movies/module';

// This is your application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
  modules: [booksModule, moviesModule],
});

// This is your actual GraphQL schema
const mySchema = application.schema;
