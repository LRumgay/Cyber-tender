import { gql } from "@apollo/client";

export const GET_OPTIONS = gql`
  mutation getOptions($selectedOptions: [SelectedOptions]!, $nextKey: String) {
    getOptions(selectedOptions: $selectedOptions, nextKey: $nextKey) {
      data {
        name
        style
        liquor
        flavor
        strong
        ingredients
        directions
        image
      }
      options
    }
  }
`;
