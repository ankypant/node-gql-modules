import { gql } from 'apollo-server-core';

export const bookTypeDefs = [
  gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `,
];
