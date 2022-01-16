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
import { APPLICANT_QUERY  } from "../graphql"
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
    const id = token.token
    const { loading: loading1, data: data1, error} = useQuery(APPLICANT_QUERY, {
        variables: {
            id: id 
        },
    });

    return(

        <>               
            <PostMenu>
                { loading1 ? 
                    <h1>loading posts...</h1>
                : data1 ? 
                    data1.queryOwnPost.map(po => (
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
        </>
    )
}

export default ViewApp