// apply 按下去後要記錄他投過了所以APPLY要變成APPLIED然後不給點

import React, { useState } from 'react'
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { Link, useSearchParams } from 'react-router-dom'

//CP company and position

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

const Text = styled.h4`
    color: #fff;
`;

const Tags = styled.h5`
    color: #FFFEEE;
`;

const Button = styled.button`
    border-radius: 4px;
    background: #1e8ef7;
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#1e8ef7' : '#0467fb')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;


const Post = () => {

    const [btnstate, setBtnstate] = useState(true);

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
                    </Header>
                    <Text>Text Here max Well
                    </Text>
                    <Tags>#win</Tags>
                </Box>
                {btnstate?
                <Button onClick={handlebtn} disabled={!btnstate}> Apply! </Button>  :
                <Button onClick={handlebtn} disabled={!btnstate}> Applied! </Button>}
            </Wrapper>
        </>
    )
}

export default Post