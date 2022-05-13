import { gql } from "@apollo/client";



export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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