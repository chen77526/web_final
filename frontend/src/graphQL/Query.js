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

export const INTEREST_QUERY = gql`
    query queryInterested($id: String) {
        queryInterested (id: $id) {
            id,
            title
        }
    }
`;

export const APPLIED_QUERY = gql`
    query queryApplied($id: String) {
        queryApplied (id: $id) {
            id,
            title
        }
    }
`;

export const APPLICANT_QUERY = gql`
    query queryApplicants($id: String) {
        queryApplicants (id: $id) {
            id,
            title
        }
    }
`;

export const OWNPOST_QUERY = gql`
    query queryOwnPost($id: String) {
        queryOwnPost (id: $id) {
            id,
            title
        }
    }
`;