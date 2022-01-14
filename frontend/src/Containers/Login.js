import React from 'react'
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLazyQuery } from "@apollo/client";
import { ACCOUNT_QUERY } from "../graphql";
import { 
    SignUpSec,
    SignUpFormInput,
    SignUpForm,
    SignUpTitle,
    SignUpSubtitle,
    SignUpWrapper
} from '../Components/Format_ele';


const Login = ({setLogin, displayStatus}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const [checkLogin, { data }] = useLazyQuery(ACCOUNT_QUERY, {
        variables: {
            email: email,
            password: password    
        },
    });
    

    const loginHandler = () => {
        checkLogin({ variables: {email: email, password: password}});
        console.log(data);
        if(!data) {
            displayStatus({
                type: "error",
                msg: "Error username or password, try again!!.",
            });
            setLogin(false);
        } else {
            setLogin(true);
        } 
    }

    // useEffect(() => {
    // }, [data]);

    

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
                    <Link to="/" style={{padding: "10px 20px"}}> {/*userpage*/}
                        <Button onClick={loginHandler} primary fontBig big>Login</Button>
                    </Link>
                </SignUpForm>
            </SignUpSec>
        </>
    )
}


export default Login