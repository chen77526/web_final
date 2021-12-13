import React from 'react';
import './HomePage.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import HomePageLayout from './HomePageLayout';
import LoginLayout from './LoginLayout';
import InfoLayout from './InfoLayout';

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={ <HomePageLayout navigate={navigate} />} />
            <Route path="/Login" element={ <LoginLayout navigate={navigate} />} />
            <Route path="/About%20us" element={ <InfoLayout />} />
        </Routes>
    )

}

export default HomePage;