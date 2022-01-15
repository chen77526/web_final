// apply 按下去後要記錄他投過了所以APPLY要變成APPLIED然後不給點

import React, { useState } from 'react'
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { Link, useSearchParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Wrapper = styled.div`
    flex-direction: column;
    background: #151515;
    padding: 50px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h2`
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

const CP = styled.h3`
    font-size: 18px;
    display: flex;
    justify-content: right;
    align-items: center;
    color: #fff;
    height: inherit;
`;

const Box = styled.div`
    flex-direction: column;
    width: 80%;
    height: 80vh;
    padding: 10px 10px;
    border: 5px solid gray;
    margin: 20px;

`

const Text = styled.div`
    font-size: 16px;
    color: #fff;
`;

const Tags = styled.h5`
    font-size: 14px;
    color: #FFFEEE;
`;

const LikeButton = styled(Button)`
    justify-content: right;
    align-items: right;
`


const Post = () => {

    const [btnstate, setBtnstate] = useState(true);
    const [interested, setInterested] = useState(false);

    const handleLike = () =>{
        setInterested(!interested)
        //if(interested)  useMutation to put postID to interested list
    }

    const handlebtn = () => {
        setBtnstate(false)

        //這邊要mutate 加進 user 的 applied posts 
    }
    // const [searchParams, setSearchParams] = useSearchParams();
    // const id = searchParams.get("id")  //can fetch the post id for you
    
    // useEffect to fetch data?

    // const handlePost = query()
    return(
        <>
            <Wrapper>
                <Box>
                    <Header>
                        <Title>Title here</Title>
                        <CP>Wo Jia Neo Pie</CP>
                        <LikeButton onClick={handleLike}>Follow</LikeButton>
                    </Header>
                    {/* <Content> */}
                        <Text>Text Here max Well</Text>
                    {/* </Content> */}
                    <Tags>#win</Tags>
                </Box>
                {btnstate?
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handlebtn}>
                    Apply
                    </Button>  :
                    <Button variant="contained" endIcon={<SendIcon />} onClick={handlebtn} disabled={!btnstate}>
                    Applied
                    </Button>}
            </Wrapper>
        </>
    )
}

export default Post