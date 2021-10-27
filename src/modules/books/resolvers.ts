import { books } from '../../mocks/mock.data';

export const booksResolver = {
  Query: {
    books: () => books,
  },
};
