import React from 'react';
import  styled  from 'styled-components';
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CREATE_ACCOUNT_MUTATION } from "../graphql"
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";


const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    border-radius: 50px;
    padding: 25px;
    background: #2D4263;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    flex-direction: column;
    width: 40%;
    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const FormInput = styled.input`
    padding: 10px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    color: #000;
    font-size: 16px;
    border: 1px solid #fff;

    &::placeholder{
        color: #242424;
        opacity: 0.5;
    }

    @media screen and (max-width: 820px) {
        margin: 0 0 16px 0;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row; 
    justify-content: center;
    // align-items: center;
    padding: 10px 20px;
    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`

const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 16px;
`;


const SignUp = () => {

    // const [] = useState('');
    const [addAccount] = useMutation(CREATE_ACCOUNT_MUTATION);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleCreateAccount = () => {
        addAccount({
            variables: {
                input: {
                    id: uuidv4(),
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
            <InfoSec>
                <Form>
                    <Wrapper> <Text> Sign Up </Text> </Wrapper>
                    <Wrapper>
                        <Text>UserName</Text>
                        <FormInput name="email" type="email" placeholder="Email Address" onChange={e => setEmail(e.target.value)}/>
                    </Wrapper>
                    <Wrapper>
                        <Text>Password</Text>
                        <FormInput placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </Wrapper>                                 
                    <Wrapper> 
                        <Link to="/resume" state={{ email: email }}>
                            <Button  onClick={handleCreateAccount} primary fontBig big> Submit </Button>
                        </Link>
                    </Wrapper>
                </Form>
            </InfoSec>
        </>
    )
}


export default SignUp
