import React from 'react'
import  styled  from 'styled-components';
import { Button } from '../globalStyles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize'

const InfoSec = styled.div`
    color: #fff;
    padding: 160px 0;
    background: #101522;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const InfoSec2 = styled(InfoSec)`
    background: #000;
`;

const Form = styled.form`
    border-radius: 50px;
    padding: 25px;
    background: #2D4263;
    height: 40%;
    display: flex;
    // justify-content: center;
    // align-items: center;
    flex-direction: column;
    width: 40%;
    @media screen and (max-width: 820px) {
        flex-direction: column;
        width: 80%;
    }
`;

const BigForm = styled(Form)`
    width:60%;
    justify-content: left;
    align-items: left;
    flex-direction: column;
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
    box-sizing: border-box;

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

const Text = styled.text`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 16px;
`;

const SideText = styled(Text)`
    justify-content: left;
    align-items: left;
`

const Resume = () => {

    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [grade, setGrade] = useState('');
    const [intro, setIntro] = useState('');
    const [research, setResearch] = useState('');
    const [work, setWork] = useState('');
    const [side, setSide] = useState('');
    const [others, setOthers] = useState('');

    // info of department can be fetched from the email address?
    
    const submit = () =>{
        console.log(name)
        console.log(userName)
        console.log(major)
        console.log(grade)
    }

    return (
        <>
            <InfoSec>
                <Form>
                    <Wrapper> <Text> Step 1. Personal Info </Text> </Wrapper>
                    <Wrapper>
                        <Text>Name</Text>
                        <FormInput placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </Wrapper>
                    <Wrapper>
                        <Text>UserName</Text>
                        <FormInput placeholder="UserName" onChange={e => setUserName(e.target.value)}/>
                    </Wrapper>
                    <Wrapper>
                        <Text>Major</Text>
                        <FormInput placeholder="Major" onChange={e => setMajor(e.target.value)}/>
                    </Wrapper>
                    <Wrapper>
                        <Text>Grade</Text>
                        <FormInput placeholder="Grade" onChange={e => setGrade(e.target.value)}/>
                    </Wrapper>                         
                </Form>
            </InfoSec>
            <InfoSec2>
                <BigForm>
                     <Text> Step 2. CV</Text>
                    <SideText>Introduction</SideText>
                    <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Brief introduction of yourself..." onChange={e => setIntro(e.target.value)}/>          
                    <SideText>Research Experience</SideText>
                    <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Research experiences?" onChange={e => setResearch(e.target.value)}/>
                    <SideText>Work Experience</SideText>
                    <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Tell me about the jobs you have done..." onChange={e => setWork(e.target.value)}/>
                    <SideText>Side Projects</SideText>
                    <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Any side projects?" onChange={e => setSide(e.target.value)}/>
                    <SideText>Others</SideText>
                    <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Anything that makes your CV more competitive..." onChange={e => setOthers(e.target.value)}/>
                    <Wrapper>
                        <Link to="/resume">
                            <Button onClick={submit} primary fontBig big> Submit </Button>
                        </Link>
                    </Wrapper>
                </BigForm>
            </InfoSec2>
        </>
    )
}


export default Resume