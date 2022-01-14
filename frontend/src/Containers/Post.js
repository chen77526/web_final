import React, { useState } from 'react'
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { Link, useSearchParams } from 'react-router-dom'
import Button from '../globalStyles'

//CP company and position

const Wrapper = styled.div`
    background: #151515;
    padding: 50px 100px;
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
    padding: 10px;
    border: 5px solid gray;
    margin: 0;
`

const Text = styled.h4`
    color: #fff;
`;

const Tags = styled.h5`
    color: #FFFEEE;
`;


const post = () => {
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
                <Button> Apply! </Button>
            </Wrapper>
        </>
    )
}

export default post