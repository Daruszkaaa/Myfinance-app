/* eslint-disable no-unused-vars */
import React, {useRef, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import photo from '../assets/AdobeStock_509395296.jpeg';
import { auth, app } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp(){
    
 const navigate = useNavigate();
 const errorToast = useRef(null);

 const [email, setEmail] =useState("")
 const [password, setPassword] =useState("");
 
 const signupUser = async (e) => {
    e.preventDefault();
    
    if (password.length < 6) {
        errorToast.current.show({severity: 'error', summary: 'Error', detail:"Błąd rejestracji: Hasło powinno mieć co najmniej 6 znaków."});
        return; 
        }
    
        
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Użytkownik zarejestrowany:", user);
            navigate('/finance');


        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
        }


    };

        return(
        
        <section className="signup">
            <div className='signup-menu'>
                <h1 className= "logo"><span>My</span>Finances</h1>
            </div>
            
            <div className="signup-container">
            <img src={photo}/>
            
            <div className="signup-form-container">
                <h2>REJESTRACJA</h2>
                <Toast ref={errorToast} position="top-center"/>

             <form onSubmit={signupUser} className='signup-form'>

                 {/*IMIĘ*/}
                 
                 <span className="p-input-icon-right">
                    <InputText placeholder="Imię" name="imie" />
                </span>

                 {/*EMAIL*/}
                 <span className="p-input-icon-right">
                    <InputText placeholder="Email" 
                    name="email"
                     value={email} 
                     type="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={(e) => setEmail(e.target.value)} required/>
                 </span>
                 
                 {/*HASŁO*/}
                 <span className="p-input-icon-left">
                  <Password placeholder="Hasło"
                  name="haslo" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}  toggleMask feedback={false} required/>
                 </span>
                 <br/>
                 <Button type="submit" 
                 label="Załóż konto" />

                 <p>Masz już konto?</p>
                 
                 <Button onClick={() => navigate('/signin')} label="Zaloguj się" severity="info" text raised />
             </form>
         </div>
         </div>
     </section>
    );
}

