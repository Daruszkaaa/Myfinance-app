import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Password } from 'primereact/password';
import photo from '../assets/AdobeStock_509395296.jpeg'

export default function Signin() {

    const navigate = useNavigate();

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
                    <form className='signin-form'>
                <span className="p-input-icon-right">
                    <InputText placeholder="Email"/>
                </span>
                        <br/>
                        <span className="p-input-icon-left">
                  <Password placeholder="Password" toggleMask feedback={false}/>
                    </span>
                        <br/>
                        <br />
                        <Button type={"submit"}  label="Zaloguj" />
                        <br />
                        <p>Nie masz jeszcze konta?</p>
                        <Button onClick={() => navigate('/signup')} label="Zarejestruj się" severity="info" text raised />
                    </form>
                </div>
            </div>
            </section>
        )
    }
