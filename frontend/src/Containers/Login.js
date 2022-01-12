import React from 'react'
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
    SignUpSec,
    SignUpFormInput,
    SignUpForm,
    SignUpTitle,
    SignUpSubtitle,
    SignUpWrapper
} from '../Components/Format_ele';

const Login = () => {
    const [emailAddr, setEmailAddr] = useState('');
    const [password, setPassword] = useState('');

    const submit = () =>{
        console.log(emailAddr)
        console.log(password)
    }

    return (
        <>
            <SignUpSec>
                <SignUpForm>
                    <SignUpTitle> Login </SignUpTitle>
                    <SignUpWrapper>
                        <SignUpSubtitle>Email</SignUpSubtitle>
                        <SignUpFormInput name="email" type="email" placeholder="Email Address" onChange={e => setEmailAddr(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Password</SignUpSubtitle>
                        <SignUpFormInput placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </SignUpWrapper>                                
                    <Link to="/" style={{padding: "10px 20px"}}> {/*userpage*/}
                        <Button onClick={submit} primary fontBig big>Login</Button>
                    </Link>
                </SignUpForm>
            </SignUpSec>
        </>
    )
}


export default Login