import React, { useState, useEffect } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { Link, useSearchParams } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
// import { GET_USER_INFO ,UPDATE_USER_CONTENT } from "../graphql"
import { useQuery , useMutation } from "@apollo/client";
import moment from "moment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { APPLICANT_QUERY, RESUME_QUERY  } from "../graphql"
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
import { PostHeader, PostText } from '../Components/post_ele';
import { stringify } from 'uuid';

const ViewApp = (token) => {
    const [value, setValue] = useState('1');
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    console.log(id)
    
    const { loading, data, error} = useQuery(APPLICANT_QUERY, {
        variables: {
            id: id 
        },
    });

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    };

    // if(!loading1 & !data1){
    //     console.log(data1)
    // }
    if(error) console.log(error)
    console.log(data)

    return(
        
        <>   
            { loading ?
            <PostSec><h1>loading applicants...</h1></PostSec> 
            :  data ?
                (data.queryApplicants.map((app, index) => (
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
                                    <Tab label="Name" value='1'/>
                                </TabList>
                            </Box>
                       
                    <TabPanel value="1" alignitems='center' sx={{overflow: 'auto'}}>
                        <PostMenu>
                            <>  
                                <CvForm light={true} style={{margin: '5px 0'}}>
                                    <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                        <SignUpSubtitle style={{margin: '0 16px'}}>Name : </SignUpSubtitle>
                                        <SignUpSubtitle style={{margin: '0 16px'}}>{data.queryApplicants[index].resume.name}</SignUpSubtitle>
                                    </ul>
                                </CvForm>
                                <CvForm light={true} style={{margin: '5px 0'}}>
                                    <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                        <SignUpSubtitle style={{margin: '0 16px'}}>Email : </SignUpSubtitle>
                                        <SignUpSubtitle style={{margin: '0 16px'}}>{data.queryApplicants[index].email}</SignUpSubtitle>
                                    </ul>
                                </CvForm>
                                <CvForm light={true} style={{margin: '5px 0'}}>
                                    <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                        <SignUpSubtitle style={{margin: '0 16px'}}>Major : </SignUpSubtitle>
                                        <SignUpSubtitle style={{margin: '0 16px'}}>{data.queryApplicants[index].resume.major}</SignUpSubtitle>
                                    </ul>
                                </CvForm>
                                <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                    <PostHeader>introduction</PostHeader>
                                    <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.queryApplicants[index].resume.cv.introduction}</PostText>
                                </PostMenu>
                                <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                    <PostHeader>research</PostHeader>
                                    <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.queryApplicants[index].resume.cv.research}</PostText>
                                </PostMenu>
                                <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                    <PostHeader>work experience</PostHeader>
                                    <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.queryApplicants[index].resume.cv.work_experience}</PostText>
                                </PostMenu>
                                <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                    <PostHeader>side project</PostHeader>
                                    <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.queryApplicants[index].resume.cv.side_project}</PostText>
                                </PostMenu>
                                <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                    <PostHeader>others</PostHeader>
                                    <PostText style={{border: "2px solid #fff", width: '100%'}}>{data.queryApplicants[index].resume.cv.others}</PostText>
                                </PostMenu>
                            </>
                        </PostMenu>
                    </TabPanel>
                
                    </TabContext>
                </Box>
            </PostSec>))): <h1> No applicants</h1>
            }
        </>
    )
}

export default ViewApp