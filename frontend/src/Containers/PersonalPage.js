//todo: 做tab

import React, { useState } from 'react'
import styled from "styled-components"
import { Button } from '../globalStyles';
import { Link, useLocation} from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize'
// import { GET_USER_INFO ,UPDATE_USER_CONTENT } from "../graphql"
import { useQuery , useMutation } from "@apollo/client";
import { 
    SignUpSec,
    SignUpFormInput,
    SignUpForm,
    SignUpTitle,
    SignUpSubtitle,
    SignUpWrapper,
    SideText,
    CvForm
} from '../Components/Format_ele';
import { useEffect } from 'react';

const Personalpage = () =>{

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [grade, setGrade] = useState('');
    const [intro, setIntro] = useState('');
    const [research, setResearch] = useState('');
    const [work, setWork] = useState('');
    const [side, setSide] = useState('');
    const [others, setOthers] = useState('');

    //GET_USER_INFO: TODO: QUERY
    
    const handleModify = () =>{
        // MODIFY_CV_MUTATION TODO: UPDATE_USER_CONTENT 然後把值丟進上面的 變數裡面
    }

    return(
        <>
        <SignUpSec>
            <CvForm>
                <SignUpTitle> Personal Info </SignUpTitle>
                <SignUpWrapper>
                    <SignUpSubtitle>Name</SignUpSubtitle>
                    <SignUpFormInput value={name} name="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    <SignUpSubtitle>Username</SignUpSubtitle>
                    <SignUpFormInput value={username} name="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                </SignUpWrapper>
                <SignUpWrapper>
                    <SignUpSubtitle>Major</SignUpSubtitle>
                    <SignUpFormInput value={major} name="major" type="text" placeholder="Major" onChange={e => setMajor(e.target.value)}/>
                    <SignUpSubtitle>Grade</SignUpSubtitle>
                    <SignUpFormInput value={grade} name="grade" type="text" placeholder="Grade" onChange={e => setGrade(e.target.value)}/>
                </SignUpWrapper>                         
                <SignUpTitle>CV</SignUpTitle>
                <SideText>Introduction</SideText>
                <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Brief introduction of yourself..." onChange={e => setIntro(e.target.value)}
                    style={{borderRadius: "5px"}}
                    value={intro}
                />          
                <SideText>Research Experience</SideText>
                <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Research experiences?" onChange={e => setResearch(e.target.value)}
                    style={{borderRadius: "5px"}}
                    value={research}
                />
                <SideText>Work Experience</SideText>
                <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Tell me about the jobs you have done..." onChange={e => setWork(e.target.value)}
                    style={{borderRadius: "5px"}}
                    value={work}
                />
                <SideText>Side Projects</SideText>
                <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Any side projects?" onChange={e => setSide(e.target.value)}
                    style={{borderRadius: "5px"}}
                    value={side}
                />
                <SideText>Others</SideText>
                <TextareaAutosize 
                    minRows={3}
                    style={{width: "100%"}}
                    placeholder="Anything that makes your CV more competitive..." onChange={e => setOthers(e.target.value)}
                    style={{borderRadius: "5px"}}
                    value={others}
                />
                <Link to="/resume" style={{padding: "20px", alignSelf: "center"}}>
                    <Button onClick={handleModify} primary fontBig big>Modify</Button>
                </Link>
            </CvForm>
        </SignUpSec>
    </>
    )
}

export default Personalpage