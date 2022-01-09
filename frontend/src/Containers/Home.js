import React from 'react';
import Info from './Info';
import { homeDataOne } from '../Components/Data';

const Home = () => {
    return (
        <>
            <Info {...homeDataOne}/>
        </>
    )
}

export default Home
