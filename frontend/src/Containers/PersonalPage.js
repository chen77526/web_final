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
import { RESUME_QUERY, RESUME_UPDATED_SUBSCRIPTION, INTEREST_QUERY, APPLIED_QUERY, OWNPOST_QUERY  } from "../graphql"
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

const Personalpage = (token) =>{
    const [value, setValue] = useState('1');

    //GET_USER_INFO: TODO: QUERY
    // const id = token.token;
    // console.log(id)
    const id = token.token

    const { loading, data: data1, subscribeToMore} = useQuery(RESUME_QUERY, {
        variables: {
            id: id 
        },
    });
    const { loading: loading2, data:data2, errorIn} = useQuery(INTEREST_QUERY, {
        variables: {
            id: id 
        },
    });
    
    const { loading: loadingAp, data, errorAp} = useQuery(APPLIED_QUERY, {
        variables: {
            id: id 
        },
    });

    const { loading: loading4, data: data4, error4} = useQuery(OWNPOST_QUERY, {
        variables: {
            id: id 
        },
    });

    useEffect(() => {
        try {
            subscribeToMore({
                document: RESUME_UPDATED_SUBSCRIPTION,
                updateQuery: (prev, {subscriptionData}) => {
                    if (!subscriptionData.data) return prev;
                    console.log(subscriptionData)
                }
            })
        } catch(e){}
    }, [subscribeToMore])

    
    // useEffect(()=>{},[dataAp])

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    };

    const handleModify = () =>{
        // MODIFY_CV_MUTATION TODO: UPDATE_USER_CONTENT 然後把值丟進上面的 變數裡面
    }
    // if(data){
    //     console.log(data.queryApplied)
    // }
    // console.log(data1);
    if(data2)console.log(data2)


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
                            </TabList>
                        </Box>
                        <TabPanel value="1" alignitems='center' sx={{overflow: 'auto'}}>
                            <PostMenu>
                                { loading ? 
                                    <h1>loading cv...</h1>
                                : (data1 ? 
                                <>  
                                    {console.log(data1.resume)}
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Name : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data1.resume.name}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Username : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data1.resume.username}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Major : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data1.resume.major}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <CvForm light={true} style={{margin: '5px 0'}}>
                                        <ul style={{display:'flex', flexDirection:'row', maxHeight: '10%'}}>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>Grade : </SignUpSubtitle>
                                            <SignUpSubtitle style={{margin: '0 16px'}}>{data1.resume.grade}</SignUpSubtitle>
                                        </ul>
                                    </CvForm>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>introduction</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data1.resume.cv.introduction}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>research</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data1.resume.cv.research}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>work experience</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data1.resume.cv.work_experience}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>side project</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data1.resume.cv.side_project}</PostText>
                                    </PostMenu>
                                    <PostMenu style={{width: '80%', paddingBottom: '5px'}}>
                                        <PostHeader>others</PostHeader>
                                        <PostText style={{border: "2px solid #fff", width: '100%'}}>{data1.resume.cv.others}</PostText>
                                    </PostMenu>
                                </> : ' ')}
                            </PostMenu>
                        </TabPanel>
                        <TabPanel value="2" align='center' sx={{overflow: 'auto'}}>
                        <PostMenu>
                            { loading4 ? 
                                <h1>loading posts...</h1>
                            : data4 ? 
                                data4.queryOwnPost.map(po => (
                                    <PostBloc key={po.id}>
                                        <PostLink to={`/viewapp/?id=${po.id}`}>
                                            <ul>
                                                <h1 style={{marginTop:'16px', color: '#fff'}}>{po.title}</h1>
                                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                                                    <AccessTimeIcon fontSize="small" style={{margin:'0 4px'}}/>
                                                    {moment(po.duedate).fromNow()}
                                                </div>
                                            </ul>
                                        </PostLink>
                                    </PostBloc>
                                )) : <h1>no posts yet</h1>
                            }
                            </PostMenu>
                        </TabPanel>
                        
                        <TabPanel value="3" align='center' sx={{overflow: 'auto'}}>
                            <PostMenu>
                                    { loadingAp ? 
                                        <h1>loading posts...</h1>
                                    : data ? 
                                        data.queryApplied.map(po => (
                                            <PostBloc key={po.id}>
                                                    <ul>
                                                        <h1 style={{marginTop:'16px', color: '#fff'}}>{po.title}</h1>
                                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                                                            <AccessTimeIcon fontSize="small" style={{margin:'0 4px'}}/>
                                                            {moment(po.duedate).fromNow()}
                                                        </div>
                                                    </ul>
                                            </PostBloc>
                                        )) : <h1>no posts yet</h1>
                                    }
                                </PostMenu>
                        </TabPanel>

                        <TabPanel value="4" align='center' sx={{overflow: 'auto'}}>
                            <PostMenu>
                                    { loading2 ? 
                                        <h1>loading posts...</h1>
                                    : data2 ? 
                                        data2.queryInterested.map(po => (
                                            <PostBloc key={po.id}>
                                                    <ul>
                                                        <h1 style={{marginTop:'16px', color: '#fff'}}>{po.title}</h1>
                                                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                                                            <AccessTimeIcon fontSize="small" style={{margin:'0 4px'}}/>
                                                            {moment(po.duedate).fromNow()}
                                                        </div>
                                                    </ul>
                                            </PostBloc>
                                        )) : <h1>no posts yet</h1>
                                    }
                            </PostMenu>
                        </TabPanel>
                    </TabContext>
                </Box>
            </PostSec>
        </>
    )
}

export default Personalpage