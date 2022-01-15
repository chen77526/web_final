import React from 'react'
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';
import { useQuery } from "@apollo/client";
import { ACCOUNT_QUERY } from "../graphql";
import { 
    SignUpSec,
    SignUpFormInput,
    SignUpForm,
    SignUpTitle,
    SignUpSubtitle,
    SignUpWrapper
} from '../Components/Format_ele';


const Login = ({ setToken, displayStatus}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

 

    const { loading, data, refetch} = useQuery(ACCOUNT_QUERY, {
        variables: {
            email: email,
            password: password   
        },
    });
    

    const loginHandler = () => {
        if(data.account === null) {
            displayStatus({
                type: "error",
                msg: "Error username or password, try again!!.",
            });
        } else {
            setToken({email: email,password: password})
        } 
        
    }

    

    return (
        <>
            <SignUpSec>
                <SignUpForm>
                    <SignUpTitle> Login </SignUpTitle>
                    <SignUpWrapper>
                        <SignUpSubtitle>Email</SignUpSubtitle>
                        <SignUpFormInput name="email" type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Password</SignUpSubtitle>
                        <SignUpFormInput name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </SignUpWrapper>                                
                    <Link to={(!data)? '#': ((!data.account)? "#": `/allpost/?id=${data.account.id}`)} style={{padding: "10px 20px"}} > {}
                        <Button onClick={loginHandler} primary fontBig big>Login</Button>
                    </Link>
                </SignUpForm>
            </SignUpSec>
        </>
    )
}


export default Login