import moment from "moment";
import React from 'react'
import { CREATE_POST_MUTATION } from "../graphql"
import { Link, useSearchParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useMutation } from "@apollo/client";
import TextareaAutosize from '@mui/material/TextareaAutosize'   
import { Button } from '../globalStyles';
import DateTimePicker from "@mui/lab/DateTimePicker"; 
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterMoment from "@mui/lab/AdapterMoment";
import { v4 as uuidv4 } from "uuid";
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

const CreatePost = (token) => {
    const [addPost] = useMutation(CREATE_POST_MUTATION);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [limitations, setLimitations] = useState("");
    const [duedate, setDuedate] = useState("");

    const Id = uuidv4()
    const id = token.token

    const navigate = useNavigate();

    const handleCreatePost = () => {
        addPost({
            variables: {
                id: id,
                input: {   
                    id: Id,
                    owner: id,
                    title: title,
                    company: company,
                    description: description,
                    tags: tags,
                    limitations: limitations,
                    duedate: parseInt(duedate.format("x")),
                },
            },
        });
    };

    return (
        <>
            <SignUpSec light={true}>
                <CvForm light={false}>
                    <SignUpTitle>New Post</SignUpTitle>
                    <SideText>Title</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Brief introduction of yourself..." onChange={e => setTitle(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />          
                    <SideText>Company</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Research experiences?" onChange={e => setCompany(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SideText>description</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Tell me about the jobs you have done..." onChange={e => setDescription(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SideText>tags</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Any side projects?" onChange={e => setTags(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SideText>limitations</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Anything that makes your CV more competitive..." onChange={e => setLimitations(e.target.value)}
                        style={{borderRadius: "5px", width: "95%"}}
                    />
                    <SignUpWrapper>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DateTimePicker
                                label="Due Date"
                                value={duedate}
                                style={{color: 'fff'}}
                                onChange={(v) => setDuedate(v)}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    fullWidth
                                    margin="dense"
                                />
                                )}
                            />
                        </LocalizationProvider>
                    </SignUpWrapper>
                   
                    <Link to={`/allpost/?id=${id}`} style={{padding: "20px", alignSelf: "center"}}>

                        <Button onClick={handleCreatePost} primary fontBig big>Create</Button>
                    </Link>
                    
                </CvForm>
            </SignUpSec>
        </>
    )
}

export default CreatePost
