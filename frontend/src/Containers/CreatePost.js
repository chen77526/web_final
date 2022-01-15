import React from 'react'
import { CREATE_POST_MUTATION } from "../graphql"
import { Link, useSearchParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import TextareaAutosize from '@mui/material/TextareaAutosize'   
import { Button } from '../globalStyles';
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

const CreatePost = () => {
    const [addPost] = useMutation(CREATE_POST_MUTATION);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [limitations, setLimitations] = useState("");


    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    const navigate = useNavigate();

    const handleCreatePost = () => {
        addPost({
            variables: {
                id: id,
                input: {    
                    title: title,
                    company: company,
                    description: description,
                    tags: tags,
                    limitations: limitations
                },
            },
        });
    };

    return (
        <>
            {/* <SignUpSec light={true}>
                <CvForm light={false}>
                    <SignUpTitle>New Post</SignUpTitle>
                    <SideText>Title</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Brief introduction of yourself..." onChange={e => setTitle(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />          
                    <SideText>Company</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Research experiences?" onChange={e => setCompany(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>description</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Tell me about the jobs you have done..." onChange={e => setDescription(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>tags</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Any side projects?" onChange={e => setTags(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <SideText>limitations</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Anything that makes your CV more competitive..." onChange={e => setLimitations(e.target.value)}
                        style={{borderRadius: "5px"}}
                    />
                    <Link to={`/allpost/?id=${id}`} style={{padding: "20px", alignSelf: "center"}}>
                        <Button onClick={handleCreatePost} primary fontBig big>Create</Button>
                    </Link>
                    
                </CvForm>
            </SignUpSec> */}
        </>
    )
}

export default CreatePost
