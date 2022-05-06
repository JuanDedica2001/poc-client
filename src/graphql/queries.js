import { gql } from "@apollo/client";



export const GET_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query character($ids: ID!) {
    charactersByIds(ids: [$ids]) {
        id
        name
        image
        species
        status
        gender
    }
  }
`