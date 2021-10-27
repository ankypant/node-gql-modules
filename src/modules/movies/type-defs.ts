import { gql } from 'apollo-server-core';

export const moviesTypeDefs = [
  gql`
    type Movies {
      title: String
      rating: String
    }

    extend type Query {
      movies: [Movies]
    }
  `,
];
