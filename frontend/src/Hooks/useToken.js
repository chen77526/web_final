import { useState } from "react";

export const useToken = () =>{


    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        // console.log(tokenString)
        const userToken = JSON.parse(tokenString)
        
        return userToken.id
    }

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken)
        console.log(token)
    }
    
    return {
        setToken: saveToken,
        token
    }
}