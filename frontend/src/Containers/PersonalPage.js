import React, { useState } from 'react'
import { Button } from '../globalStyles';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { Link, useSearchParams } from 'react-router-dom';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
// import { GET_USER_INFO ,UPDATE_USER_CONTENT } from "../graphql"
import { useQuery , useMutation } from "@apollo/client";
import { RESUME_QUERY } from "../graphql"
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
import {
    PostBloc,
    PostLink,
    PostSec,
    PostMenu
} from '../Components/posts_ele';
import { useEffect } from 'react';
import { RESUME_QUERY } from '../graphql';
import { PostHeader, PostText } from '../Components/post_ele';

const Personalpage = (token) =>{
    const [value, setValue] = useState('1');
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
    // const id = token.token;
    // console.log(id)
    const [searchParams, setSearchParams] = useSearchParams();
    const id = token.token

    const { loading, data, error} = useQuery(RESUME_QUERY, {
        variables: {
            id: id 
        },
    });

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    };
    if(!loading) console.log(id, data.resume.cv)

    const handleModify = () =>{
        // MODIFY_CV_MUTATION TODO: UPDATE_USER_CONTENT 然後把值丟進上面的 變數裡面
    }

    const id = token.token;

    const { loading, data, subscribeToMore } = useQuery(RESUME_QUERY, {
        variables: {
            id: id
        }
    });

    console.log(data);


    return(
        <>
            <PostSec>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    background: '#2D4263',
                    width: '80%',
                    minHeight: '500px',
                    maxHeight: '1000px',
                    borderRadius: '10px',
                    borderColor: 'divider',
                    typography: 'body1',
                    display: 'flex',
                    flexDirection: 'column',
                    color:'fff',
                }}>
                    <TabContext value={value}>
                        <Box sx={{
                            borderBottom: 1,
                            borderColor: 'divider'
                        }}>
                            <TabList onChange={changeHandler} aria-label="lab API tabs example" textColor='#fff' sx={{justifyContent: 'space-between'}}>
                                <Tab label="My_CV" value='1' />
                                <Tab label="Owned" value='2' />
                                <Tab label="Applied" value='3' />
                                <Tab label="Inerested" value='4' />
                                {/* <Tab label={<AddIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />} value='5'/> */}
                                {/* <IconButton color='primary' aria-label='Add'>
                                    <Link to='/createPost' style={{height: 'inherit', padding: '0', margin: '0'}}>
                                        <AddIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />
                                    </Link>
                                </IconButton> */}
                                <Fab color="primary" aria-label="edit">
                                    <Link component="button" to={`/modifyCV/?id=${id}`} style={{height: '65%'}}>
                                        <EditIcon fontSize='large' sx={{fill: 'white', margin: '0'}} />
                                    </Link>
                                </Fab>
                            </TabList>
                        </Box>
                        <TabPanel value="1" alignitems='center' sx={{overflow: 'auto'}}>
                            <PostMenu>
                                { loading ? 
                                    <h1>loading cv...</h1>
                                : (data ? 
                                <>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Name : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data.resume.name}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Username : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data.resume.username}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Major : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data.resume.major}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Grade : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data.resume.grade}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>introduction</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.resume.cv.introduction}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>research</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.resume.cv.research}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>work experience</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.resume.cv.work_experience}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>side project</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.resume.cv.side_project}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>others</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.resume.cv.others}</PostText>
                                    </PostMenu>
                                </> : ' ')}
                                            {/* <CvForm light={true}>
                                    //         <SignUpWrapper>
                                    //             <SignUpSubtitle>Name : </SignUpSubtitle>
                                    //             <SideText>{ele.name}</SideText>
                                    //         </SignUpWrapper> */}
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="2" align='center'>
                            <PostMenu>
                                <PostBloc>
                                    <PostLink to='/post' limited={true}><h1>limited</h1></PostLink>
                                </PostBloc>
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="3" align='center'>Ongoing</TabPanel>
                        <TabPanel value="4" align='center'>
                            <PostMenu>
                                <PostBloc>
                                    <PostLink to='/post' closed={true}><h1>Closed</h1></PostLink>
                                </PostBloc>
                            </PostMenu>
                        </TabPanel>
                        {/* <Pagination count={10} color="primary" sx={{alignSelf: 'center', bottom: '5px', position: 'relative'}} /> */}
                    </TabContext>
                </Box>
                {/* <CvForm>
                    <SignUpTitle> Personal Info </SignUpTitle>
                    <SignUpWrapper>
                        <SignUpSubtitle>Name</SignUpSubtitle>
                        <SignUpFormInput value={name} name="name" type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Username</SignUpSubtitle>
                        <SignUpFormInput value={username} name="username" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Major</SignUpSubtitle>
                        <SignUpFormInput value={major} name="major" type="text" placeholder="Major" onChange={e => setMajor(e.target.value)}/>
                    </SignUpWrapper>
                    <SignUpWrapper>
                        <SignUpSubtitle>Grade</SignUpSubtitle>
                        <SignUpFormInput value={grade} name="grade" type="text" placeholder="Grade" onChange={e => setGrade(e.target.value)}/>
                    </SignUpWrapper>                         
                    <SignUpTitle>CV</SignUpTitle>
                    <SideText>Introduction</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Brief introduction of yourself..." onChange={e => setIntro(e.target.value)}
                        style={{borderRadius: "5px", width: '95%'}}
                        value={intro}
                    />          
                    <SideText>Research Experience</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Research experiences?" onChange={e => setResearch(e.target.value)}
                        style={{borderRadius: "5px", width: '95%'}}
                        value={research}
                    />
                    <SideText>Work Experience</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Tell me about the jobs you have done..." onChange={e => setWork(e.target.value)}
                        style={{borderRadius: "5px", width: '95%'}}
                        value={work}
                    />
                    <SideText>Side Projects</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Any side projects?" onChange={e => setSide(e.target.value)}
                        style={{borderRadius: "5px", width: '95%'}}
                        value={side}
                    />
                    <SideText>Others</SideText>
                    <TextareaAutosize 
                        minRows={3}
                        style={{width: "100%"}}
                        placeholder="Anything that makes your CV more competitive..." onChange={e => setOthers(e.target.value)}
                        style={{borderRadius: "5px", width: '95%'}}
                        value={others}
                    />
                    <Link to="/resume" style={{padding: "20px", alignSelf: "center"}}>
                        <Button onClick={handleModify} primary fontBig big>Modify</Button>
                    </Link>
                </CvForm> */}
            </PostSec>
        </>
    )
}

export default Personalpage