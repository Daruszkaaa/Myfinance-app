/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';

import photo from '../assets/AdobeStock_509395296.jpeg';

import { auth, app } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn= ()=> {
 const navigate = useNavigate();

    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");

    const signinUser = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate('/finance');

        })
        .catch ((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }
    return (
    
    <section className="signin">
        <div className='signin-menu'>
                    <h1 className= "logo"><span>My</span>Finances</h1>
                </div>
                <div className="signin-container">
                    <img src={photo}/>

                    <div className="signin-form-container">
                        <h2>LOGOWANIE</h2>
                    <br/>
                    <form onSubmit={signinUser}className='signin-form'>
                <span className="p-input-icon-right">
                    <InputText placeholder="Email" 
                    type="email"
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                    />
                </span>
                        <br/>
                        <span className="p-input-icon-left">
                  <Password placeholder="Hasło" 
                   type="password"
                   value={password}
                   onChange={(e) =>setPassword(e.target.value)}
                   toggleMask feedback={false}/>
                    </span>
                        <br/>
                        <br />
                        <Button type="submit" name="submit" value="Sign In" label="Zaloguj" />
                        <br />
                        <p>Nie masz jeszcze konta?</p>
                        <Button onClick={() => navigate('/signup')} label="Zarejestruj się" severity="info" text raised />
                    </form>
                </div>
            </div>
            </section>
        );
    };

    export default SignIn