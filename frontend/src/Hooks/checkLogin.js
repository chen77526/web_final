import { useState } from "react";

exprot const checkLogin = ( nextState, replace, next ) =>{
    if(!loggedin){
        replace({
            pathname: "/login",
            state: {nextPathname: nextState.location.pathname}
        })
    }
    next()
}