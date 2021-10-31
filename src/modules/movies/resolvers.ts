import { movieList } from '../../mocks/mock.data';

export const moviesResolver = {
  Query: {
    movies: () => movieList
  }
};
