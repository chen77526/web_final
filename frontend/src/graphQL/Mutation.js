import { gql } from '@apollo/client';

// export const CREATE_ACCOUNT = gql`
//     mutation createAccount(
//         $username: String!, 
//         $password: String!
//     ){
//         createAccount(
//             username: $username,
//             password: $password
//         ){
//             userdata{   #創帳號實存的user資料
//                 name
//                 grade
//                 #待補
//             }
//         }
//     }
// `;

// export const CREATE_JOB = gql`      #工作機會
//     mutation createJob(
//         $from: String!,     
//         $to: Identity!,     #表示要給那些身分的人看到 
//         $content: String!
//     ){
//         createJob(
//             from: $from, 
//             to: $to, 
//             content: $content
//         ){
//             jobPost{

//             }
//         }
//     }
// `;

// export const CREATE_CV = gql`
    
// `;

// export const CREATE_USER_MUTATION = gql`
//     mutation createMessage($input: createUserInput!) {
//         createMessage($input: input) {
//             id: ID!
//             name: String!
//             username: String!   #應該會設成跟email一樣?
//             password: String!   #要經過bcrypt
//             department: String! #系所
//             grade: String!      #年級 
//         }
//     }
// `;

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
            owner
            introduction
            research
            work_experience
            side_project
            others
        }
    }
`;

export const UPDATE_ONLINE = gql`
    mutation setOnline($email: String!) {
        setOnline(email: $email) {
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