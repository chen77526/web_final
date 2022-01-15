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
                limitations
            }
        }
    }
`;

export const POSTS_QUERY = gql`
    query posts($id: String) {
        posts (id: $id) {
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

export const POST_QUERY = gql`
    query post($id: String) {
        post (id: $id) {
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