import { gql } from "@apollo/client";

export const QUERY_DRINKS = gql`
  query Query {
    drinks {
      name
      liquor
      style
      flavor
      strong
      ingredients
      directions
      image
    }
  }
`;

export const QUERY_QUESTIONS = gql`
  query Query {
    questions {
      order
      question
      key
    }
  }
`;
