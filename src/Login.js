import React from 'react'
import './Login.css'
import { Button } from "@material-ui/core";
import {auth, provider} from "./configuration/firebase";

function Login() {

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => console.log(result))
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src={process.env.PUBLIC_URL +'/img/logo.png'}
                    alt=""
                />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
