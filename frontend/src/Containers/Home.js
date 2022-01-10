import React from 'react';
import Info from './Info';
import {
    dataOne,
    dataTwo
} from '../Components/Data/HomeData';

const Home = () => {
    return (
        <>
            <Info {...dataOne}/>
            <Info {...dataTwo}/>
        </>
    )
}

export default Home
