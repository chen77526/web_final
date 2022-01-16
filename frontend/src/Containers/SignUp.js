import React from 'react';
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { CREATE_ACCOUNT_MUTATION } from "../graphql"
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import { CHECK_ACCOUNT_QUERY } from "../graphql";
import { useQuery } from "@apollo/client";
import { 
    SignUpSec,
    SignUpFormInput,
    SignUpForm,
    SignUpTitle,
    SignUpSubtitle,
    SignUpWrapper
} from '../Components/Format_ele';

const SignUp = ({ setToken, displayStatus }) => {
    const [addAccount] = useMutation(CREATE_ACCOUNT_MUTATION);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inputcorrect, setInputcorrect] = useState(false);

    useEffect(() => {
        setInputcorrect(email && password);
    })

    const { loading, data, refetch} = useQuery(CHECK_ACCOUNT_QUERY, {
        variables: {
            email: email  
        },
    });

    const handleCreateAccount = () => {
        const id = uuidv4()
        console.log(data);
        if (data.checkaccount !== null) {
            displayStatus({
                type: "error",
                msg: "Existed account!!",
            });
        } else {
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
        }
        setToken(id)
    }   

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
                    {
                        (!loading)?
                            (!data.checkaccount)?
                                (email.substring(email.length-13) === "@g.ntu.edu.tw")?
                                    <Link to={(inputcorrect)? "/verify": "#"} state={{ email: email }} style={{padding: "10px 20px"}}>
                                        <Button onClick={()=>{
                                            if(!email || !password) {
                                                displayStatus({
                                                    type: "error",
                                                    msg: "Missing email or password, try again!!.",
                                                });
                                            } else {
                                                handleCreateAccount();
                                            }
                                            }} primary fontBig big>Submit</Button>
                                    </Link>
                                :<Link to="#" state={{ email: email }} style={{padding: "10px 20px"}}>
                                    <Button onClick={()=>{
                                        displayStatus({
                                            type: "error",
                                            msg: "invalid email, try again!!.",
                                        });
                                        }} primary fontBig big>Submit</Button>
                                </Link>
                            
                            :<Link to="#" state={{ email: email }} style={{padding: "10px 20px"}}>
                                <Button onClick={()=>{
                                    displayStatus({
                                        type: "error",
                                        msg: "Existed account!!",
                                    });
                                    }} primary fontBig big>Submit</Button>
                            </Link>:
                        <Link to="#" state={{ email: email }} style={{padding: "10px 20px"}}>
                            <Button onClick={()=>{}} primary fontBig big>Submit</Button>
                        </Link>
                    }                              
                </SignUpForm>
            </SignUpSec>
        </>
    )
}


export default SignUp
