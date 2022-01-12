import React from 'react';
import { Button } from '../globalStyles';
import { Link, useLocation} from 'react-router-dom';
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

// const InfoSec = styled.div`
//     color: #fff;
//     padding: 160px 0;
//     background: #101522;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `;

// const InfoSec2 = styled(InfoSec)`
//     background: #000;
// `;

// const Form = styled.form`
//     border-radius: 50px;
//     padding: 25px;
//     background: #2D4263;
//     height: 40%;
//     display: flex;
//     // justify-content: center;
//     // align-items: center;
//     flex-direction: column;
//     width: 40%;
//     @media screen and (max-width: 820px) {
//         flex-direction: column;
//         width: 80%;
//     }
// `;

// const BigForm = styled(Form)`
//     width:60%;
//     justify-content: left;
//     align-items: left;
//     flex-direction: column;
// `;

// const FormInput = styled.input`
//     padding: 10px 20px;
//     border-radius: 2px;
//     margin-right: 10px;
//     outline: none;
//     border: none;
//     color: #000;
//     font-size: 16px;
//     border: 1px solid #fff;
//     box-sizing: border-box;

//     &::placeholder{
//         color: #242424;
//         opacity: 0.5;
//     }

//     @media screen and (max-width: 820px) {
//         margin: 0 0 16px 0;
//     }
// `;

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: row; 
//     justify-content: center;
//     // align-items: center;
//     padding: 10px 20px;
//     @media screen and (max-width: 820px) {
//         flex-direction: column;
//         width: 80%;
//     }
// `

// const Text = styled.text`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-right: 10px;
//     font-size: 16px;
// `;

// const SideText = styled(Text)`
//     justify-content: left;
//     align-items: left;
// `

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

    const location = useLocation();
    const accountData  = location.state;

    // info of department can be fetched from the email address?

    const [addResume] = useMutation(CREATE_RESUME_MUTATION);
    const [addCv] = useMutation(CREATE_CV_MUTATION);

    const handleCreateResume = () => {
        addResume({
            variables: {
                email: accountData.email,
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
                email: accountData.email,
                input: {
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
                        <SignUpFormInput placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Username</SignUpSubtitle>
                        <SignUpFormInput placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Major</SignUpSubtitle>
                        <SignUpFormInput placeholder="Major" onChange={e => setMajor(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Grade</SignUpSubtitle>
                        <SignUpFormInput placeholder="Grade" onChange={e => setGrade(e.target.value)}/>
                    </SignUpWrapper>                         
                </SignUpForm>
            </SignUpSec>
            <SignUpSec light={true}>
                <CvForm light={true}>
                    <SignUpTitle> Step 2. CV</SignUpTitle>
                    <SideText>Introduction</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Brief introduction of yourself..." onChange={e => setIntro(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />          
                    <SideText>Research Experience</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Research experiences?" onChange={e => setResearch(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>Work Experience</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Tell me about the jobs you have done..." onChange={e => setWork(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>Side Projects</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Any side projects?" onChange={e => setSide(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>Others</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Anything that makes your CV more competitive..." onChange={e => setOthers(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <Link to="/resume" style={{padding: "20px", alignSelf: "center"}}>
                        <Button onClick={handleCreateResume} primary fontBig big>Submit</Button>
                    </Link>
                </CvForm>
            </SignUpSec>
        </>
    )
}


export default Resume