// apply 按下去後要記錄他投過了所以APPLY要變成APPLIED然後不給點

import React, { useState } from 'react'
// import styled from "styled-components"
// import { useQuery } from "@apollo/client"
// import { Link, useSearchParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import { useQuery, useMutation } from "@apollo/client";
import { useLocation, useSearchParams} from 'react-router-dom';
import { POST_QUERY, UPDATE_POST, UPDATE_INTEREST } from "../graphql";
import { useEffect } from 'react';
import {
    PostDivSec,
    PostTitle,
    PostBox,
    PostCompany,
    PostHeader,
    PostText
} from '../Components/post_ele';

const Post = (token) => {
    const [interested, setInterested] = useState(false);
    const [addApplicants] = useMutation(UPDATE_POST)
    const [addInterest] = useMutation(UPDATE_INTEREST)

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id")
    const appid = token.token
    console.log(appid)

    const { loading, data, subscribeToMore } = useQuery(POST_QUERY, {
        variables: {
            id: id
        }
    });
    console.log(data);

    const handleLike = () =>{
        // setInterested(!interested)
        addInterest({
            variables:{
                postid: id,
                appid: appid
            }
        })
        //if(interested)  useMutation to put postID to interested list
    }

    const handlebtn = () => {
        addApplicants({
            variables:{
                postid: id,
                appid: appid
            }
        })
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
                            </PostHeader>
                            {/* <Content> */}
                            <PostCompany>company: {data.post.company}</PostCompany>
                            <PostText>{data.post.description}</PostText>
                            {/* </Content> */}
                            {/* <Tags>#win</Tags> */}
                        </PostBox>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{height: 'inherit', margin:'10px 10px'}}>
                                <Button variant="contained" endIcon={<SendIcon />} onClick={handlebtn}>
                                    Apply
                                </Button>
                            </div>
                            <div>
                                <Fab aria-label="like">
                                    <FavoriteIcon onClick={handleLike}/>
                                </Fab>
                            </div>
                        </div>
                    </PostDivSec>
            }
        </>
    )
}

export default Post