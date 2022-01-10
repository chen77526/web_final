import React from 'react'
import { dataOne } from '../Components/Data/SignUpData'
import Info from './Info'

const SignUp = () => {
    return (
        <>
            <Info {...dataOne} />
        </>
    )
}

export default SignUp
