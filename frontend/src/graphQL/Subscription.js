<<<<<<< HEAD
import { gql } from "@apollo/client";

export const POSTT_CREATED_SUBSCRIPTION = gql`
  subscription OnPostCreated {
    postCreated {
      title
      company
      description
      tags
      requireds
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
=======
import { gql } from "@apollo/client";

export const POSTT_CREATED_SUBSCRIPTION = gql`
  subscription OnPostCreated {
    postCreated {
      title
      company
      description
      tags
      requireds
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
>>>>>>> origin/master
`;