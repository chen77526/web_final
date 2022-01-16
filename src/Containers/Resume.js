import React from 'react';
import { Button } from '../globalStyles';
import { Link, useLocation, useSearchParams} from 'react-router-dom';
import { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { CREATE_RESUME_MUTATION, CREATE_CV_MUTATION} from "../graphql"
import { useMutation } from "@apollo/client";
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

const Resume = () => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [major, setMajor] = useState('');
    const [grade, setGrade] = useState('');
    const [intro, setIntro] = useState('');
    const [research, setResearch] = useState('');
    const [work, setWork] = useState('');
    const [side, setSide] = useState('');
    const [others, setOthers] = useState('');

    // const location = useLocation();
    // const accountData  = location.state;

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    // info of department can be fetched from the email address?

    const [addResume] = useMutation(CREATE_RESUME_MUTATION);
    const [addCv] = useMutation(CREATE_CV_MUTATION);

    const handleCreateResume = () => {
        addResume({
            variables: {
                id: id,
                input: {
                    name: name,
                    username: username,
                    major: major,
                    grade: grade
                },
            },
        });
        addCv({
            variables: {
                id: id,
                input: {
                    owner: id,
                    introduction: intro,
                    research: research,
                    work_experience: work,
                    side_project: side,
                    others: others
                },
            },
        });

    };

    
   

    return (
        <>
            <SignUpSec>
                <SignUpForm>
                    <SignUpTitle> Step 1. Personal Info </SignUpTitle>
                    <SignUpWrapper>
                        <SignUpSubtitle>Name</SignUpSubtitle>
                        <SignUpFormInput name="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Username</SignUpSubtitle>
                        <SignUpFormInput name="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Major</SignUpSubtitle>
                        <SignUpFormInput name="major" type="text" placeholder="Major" onChange={e => setMajor(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Grade</SignUpSubtitle>
                        <SignUpFormInput name="grade" type="text" placeholder="Grade" onChange={e => setGrade(e.target.value)}/>
                    </SignUpWrapper>                         
                </SignUpForm>
            </SignUpSec>
            <SignUpSec light={true}>
                <CvForm light={true}>
                    <SignUpTitle> Step 2. CV</SignUpTitle>
                    <SideText>Introduction</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        placeholder="Brief introduction of yourself..." onChange={e => setIntro(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />          
                    <SideText>Research Experience</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        placeholder="Research experiences?" onChange={e => setResearch(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SideText>Work Experience</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        placeholder="Tell me about the jobs you have done..." onChange={e => setWork(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SideText>Side Projects</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        placeholder="Any side projects?" onChange={e => setSide(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SideText>Others</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        placeholder="Anything that makes your CV more competitive..." onChange={e => setOthers(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <Link to={`/allpost/?id=${id}`} style={{padding: "20px", alignSelf: "center"}}>
                        <Button onClick={handleCreateResume} primary fontBig big>Submit</Button>
                    </Link>
                </CvForm>
            </SignUpSec>
        </>
    )
}


export default Resume