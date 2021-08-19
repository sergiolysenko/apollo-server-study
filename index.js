const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    book: [Books]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
