import { books, movieList } from '../data/mock.data';

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: {
    books: () => books,
    movies: () => movieList,
  },
};
