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

const Login = ({setLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');

    const loginHandler = () =>{
        setUser()
        setLogin(true);
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
                    <Link to="/:piyan" style={{padding: "10px 20px"}}> {/*userpage*/}
                        <Button onClick={loginHandler} primary fontBig big>Login</Button>
                    </Link>
                </SignUpForm>
            </SignUpSec>
        </>
    )
}


export default Login