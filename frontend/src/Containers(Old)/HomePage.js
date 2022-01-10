import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import HomePageLayout from './HomePageLayout';
import LoginLayout from './LoginLayout';
import InfoLayout from './InfoLayout';
import SignUpLayout from './SignUpLayout';

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={ <HomePageLayout navigate={navigate} />} />
            <Route path="/Login" element={ <LoginLayout navigate={navigate} />} />
            <Route path="/About%20us" element={ <InfoLayout navigate={navigate} />} />
            <Route path="/Signup" element={ <SignUpLayout navigate={navigate} />} />
        </Routes>
    )

}

export default HomePage;