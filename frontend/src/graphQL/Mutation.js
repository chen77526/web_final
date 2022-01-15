import { gql } from '@apollo/client';

export const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount($input: createAccountInput!) {
        createAccount(input: $input) {
            id
            email
            password   
            resume {
                name
                username
                major
                grade
            }
        }
    }
`;

export const CREATE_RESUME_MUTATION = gql`
    mutation createResume($id: String! $input: createResumeInput!) {
        createResume(id: $id input: $input) {
            name
            username
            major
            grade
        }
    }
`;

export const CREATE_CV_MUTATION = gql`
    mutation createCv($id: String! $input: createCvInput!) {
        createCv(id: $id input: $input) {
            introduction
            research
            work_experience
            side_project
            others
        }
    }
`;

export const UPDATE_POST = gql`
    mutation updatePostApps($postid: String!, $appid: String!) {
        updatePostApps(postid: $postid, appid: $appid) {
            id
        }
    }
`

export const UPDATE_CONFIRMATION = gql`
    mutation setConfirm($id: String!) {
        setConfirm(id: $id) {
            id
            email
            password   
            resume {
                name
                username
                major
                grade
            }
        }
    }
`

export const  CREATE_POST_MUTATION = gql`
    mutation createPost($id: String! $input: createPostInput!) {
        createPost(id: $id input: $input) {
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
`
export const  SET_ONLINE_MUTATION = gql`
    mutation updateOnline($email: String! $password: createPostInput!) {
        updateOnline(email: $email password: $password) {
            id
            email
            password   
            resume {
                name
                username
                major
                grade
            }
            online
        }
    }
`