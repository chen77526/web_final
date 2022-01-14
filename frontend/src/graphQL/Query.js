<<<<<<< HEAD
import { gql } from "@apollo/client";

export const ACCOUNT_QUERY = gql`
    query account($email: String $password: String) {
        account (email: $email password: $password) {
            id
            email
            password
            resume {
                name
                username
                major
                grade
            }
            confirm
            posts {
                title
                company
                description
                tags
                required
            }
        }
    }
`;

export const POSTS_QUERY = gql`
    query posts($email: String) {
        posts {
            title
            company
            description
            tags
            required
        }
    }
=======
import { gql } from "@apollo/client";

export const ACCOUNT_QUERY = gql`
    query account($email: String $password: String) {
        account (email: $email password: $password) {
            id
            email
            password
            resume {
                name
                username
                major
                grade
            }
            confirm
            posts {
                title
                company
                description
                tags
                required
            }
        }
    }
`;

export const POSTS_QUERY = gql`
    query posts($email: String) {
        posts {
            title
            company
            description
            tags
            required
        }
    }
>>>>>>> origin/master
`;