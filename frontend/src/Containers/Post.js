// apply 按下去後要記錄他投過了所以APPLY要變成APPLIED然後不給點

import React, { useState } from 'react'
// import styled from "styled-components"
// import { useQuery } from "@apollo/client"
// import { Link, useSearchParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useQuery } from "@apollo/client";
import { useLocation, useSearchParams} from 'react-router-dom';
import { POST_QUERY } from "../graphql";
import { useEffect } from 'react';
import {
    PostDivSec,
    PostTitle,
    PostBox,
    PostCompany,
    PostHeader,
    PostText
} from '../Components/post_ele';

const Post = () => {
    const [btnstate, setBtnstate] = useState(true);
    const [interested, setInterested] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")

    const { loading, data, subscribeToMore } = useQuery(POST_QUERY, {
        variables: {
            id: id
        }
    });
    console.log(data);

    const handleLike = () =>{
        setInterested(!interested)
        //if(interested)  useMutation to put postID to interested list
    }

    const handlebtn = () => {
        setBtnstate(false)

        //這邊要mutate 加進 user 的 applied posts 
    }

    useEffect(() => {

    }, [data]);
    
    // useEffect to fetch data?

    // const handlePost = query()
    return(
        <>  
            { loading ? <h1>loading posts...</h1>
                    :<PostDivSec>
                        <PostBox>
                            <PostHeader>
                                <PostTitle>{data.post.title}</PostTitle>
                                <PostCompany>{data.post.company}</PostCompany>
                                <Button onClick={handleLike}>Follow</Button>
                            </PostHeader>
                            {/* <Content> */}
                                <PostText>{data.post.description}</PostText>
                            {/* </Content> */}
                            {/* <Tags>#win</Tags> */}
                        </PostBox>
                        {btnstate?
                            <Button variant="contained" endIcon={<SendIcon />} onClick={handlebtn}>
                                Apply
                            </Button>  :
                            <Button variant="contained" endIcon={<SendIcon />} onClick={handlebtn} disabled={!btnstate}>
                                Applied
                            </Button>}
                    </PostDivSec>
            }
        </>
    )
}

export default Post