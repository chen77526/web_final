import { gql } from "@apollo/client";

export const POST_CREATED_SUBSCRIPTION = gql`
  subscription OnPostCreated {
    postCreated {
      id
      owner
      title
      company
      description
      tags
      limitations
      duedate
    }
  }
`;

export const POST_UPDATED_SUBSCRIPTION = gql`
  subscription OnPostUpdated {
    postUpdated {
      id
      owner
      title
      company
      description
      tags
      limitations
      duedate
    }
  }
`;