import React from 'react';
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CREATE_ACCOUNT_MUTATION } from "../graphql"
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { 
    SignUpSec,
    SignUpFormInput,
    SignUpForm,
    SignUpTitle,
    SignUpSubtitle,
    SignUpWrapper
} from '../Components/Format_ele';

const SignUp = () => {
    const [addAccount] = useMutation(CREATE_ACCOUNT_MUTATION);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateAccount = () => {
        const id = uuidv4()
        addAccount({
            variables: {
                input: {
                    id: id,
                    email: email,
                    password: password,
                    resume: {
                        name: "",
                        username: "",
                        major: "",
                        grade: "",
                    }
                },
            },
        });
    };

    return (
        <>
            <SignUpSec>
                <SignUpForm>
                    <SignUpTitle> Sign Up </SignUpTitle>
                    <SignUpWrapper>
                        <SignUpSubtitle>Email</SignUpSubtitle>
                        <SignUpFormInput name="email" type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Password</SignUpSubtitle>
                        <SignUpFormInput name="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </SignUpWrapper>                                 
                    <Link to="/resume" state={{ email: email }} style={{padding: "10px 20px"}}>
                        <Button onClick={handleCreateAccount} primary fontBig big>Submit</Button>
                    </Link>
                </SignUpForm>
            </SignUpSec>
        </>
    )
}


export default SignUp
