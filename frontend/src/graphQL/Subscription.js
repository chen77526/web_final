import { gql } from "@apollo/client";

export const POST_CREATED_SUBSCRIPTION = gql`
  subscription OnPostCreated {
    postCreated {
      title
      company
      description
      tags
      required
    }
  }
`;

export const POST_UPDATED_SUBSCRIPTION = gql`
  subscription OnPostUpdated {
    postUpdated {
      title
      company
      description
      tags
      required
    }
  }
`;