import { gql } from '@apollo/client'

export const CREATE_ACCOUNT = gql`
    mutation createAccount(
        $username: String!, 
        $password: String!
    ){
        createAccount(
            username: $username,
            password: $password
        ){
            userdata{   #創帳號實存的user資料
                name
                grade
                #待補
            }
        }
    }
`

export const CREATE_JOB = gql`      #工作機會
    mutation createJob(
        $from: String!,     
        $to: Identity!,     #表示要給那些身分的人看到 
        $content: String!
    ){
        createJob(
            from: $from, 
            to: $to, 
            content: $content
        ){
            jobPost{

            }
        }
    }
`

export const CREATE_CV = gql`
    
`