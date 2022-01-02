import { useState } from "react";

export const useLogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const send_login = ( username, password) => {
        console.log(username)
        console.log(password)
    }

    return {
        username,
        setUsername,
        password,
        setPassword,
        send_login
    }
}