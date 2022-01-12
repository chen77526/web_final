import React from 'react'
import { dataOne } from '../Components/Data/SignUpData'
import Info from './Info'
import { Input } from 'antd';
import  styled  from 'styled-components';
import { Container, Button } from '../globalStyles';
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TopLine,
    Subtitle,
    Head,
    TextWrapper,
    ImgWrapper,
    Img
} from '../Components/Info_ele';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CREATE_ACCOUNT_MUTATION } from "../graphql"
import { useMutation } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";

// const Wrapper = styled.div`
//     background = white
// `

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const SignUp = ({
    primary,            // true -> primary button theme
    lightBg,            // true -> light background theme
    imgStart,           // true -> row start with images
    lightTopLine,       // true -> light theme of top-line text 
    lightText,          // true -> light theme of head-line text
    lightTextDesc,      // true -> light theme of subtitle text
    buttonLabel,        // button text
    topLine,            // top-line text
    description,        // subtitle text
    headline,           // headline text
    img,                // image source
    alt,                // alternative text if image not show up
    start               // true ->     

}) => {

    // const [] = useState('');
    const [addAccount] = useMutation(CREATE_ACCOUNT_MUTATION);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [nickname, setNickname] = useState("");

    const handleCreateAccount = () => {
        console.log("sadad");
        addAccount({
            variables: {
                input: {
                    id: uuidv4(),
                    email: email,
                    password: password,   
                    nickname: nickname, 
                    gender: gender, 
                },
            },
        });
        console.log("saasddad");

    };


    return (
        <>
            <InfoSec light={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <Form>
                                email <Input placeholder="Basic usage" onChange={e => setEmail(e.target.value)}/>
                                password <Input placeholder="Basic usage" onChange={e => setPassword(e.target.value)}/>
                                nickname <Input placeholder="Basic usage" onChange={e => setNickname(e.target.value)}/>
                                gender <Input placeholder="Basic usage" onChange={e => setGender(e.target.value)}/>
                                <Button onClick={handleCreateAccount}> Submit </Button>
                            </Form>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}
// const SignUp = () => {
//     return (
//         <>
//             {/* <Info {...dataOne} /> */}
//             <InputNumber min = {1} max = {10} 
//         </>
//     )
// }

export default SignUp
