import { useState } from "react";

export const useToken = () =>{


    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        // console.log(tokenString)
        const userToken = JSON.parse(tokenString)
<<<<<<< HEAD
=======
        
>>>>>>> 477d13bd2d0e03d21243a4fe58134a560b1a7d74
        return userToken
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