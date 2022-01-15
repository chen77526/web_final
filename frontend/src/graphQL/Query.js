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
    query resume($id: String) {
        resume (id: $id) {
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

export const CHECK_ACCOUNT_QUERY = gql`
    query checkaccount ($email: String) {
        checkaccount (email: $email) {
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

export const RESUME_QUERY = gql`
    query resume($id: String) {
        resume (id: $id) {
            name
            username
            major
            grade     
            cv {
                owner
                introduction
                research
                work_experience
                side_project
                others
            }
        }
    }
`;