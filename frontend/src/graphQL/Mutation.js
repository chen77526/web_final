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
            nickname 
            gender 
        }
    }
`;
