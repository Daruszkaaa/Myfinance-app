/* eslint-disable no-unused-vars */
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// @ts-ignore
import { useNavigate } from 'react-router-dom';
import photo from '../assets/AdobeStock_509395296.jpeg';
import { Password } from 'primereact/password';


export default function SignUp() {
    
    const navigate = useNavigate();


        return(

     <div className="signup">
         <div className='signup-menu'>
         <h1 className= "logo"><span>My</span>Finances</h1>
     </div>
         <div className="signup-container">
<img src={photo}/>

         <div className="signup-form-container">
             <h2>REJESTRACJA</h2>
             <br />
             <form className='signup-form'>
                 {/*IMIĘ*/}
                 <span className="p-input-icon-right">
                    <i className="pi pi-user" />
                    <InputText placeholder="Imię" />
                </span>
                 {/*EMAIL*/}
                 <span className="p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText placeholder="Email" required/>
                 </span>
                 <br />
                 {/*HASŁO*/}
                 <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                  <Password placeholder="Hasło" toggleMask feedback={false} required/>
                 </span>
                 {/*POWTÓRZ HASŁO */}
                 <span className="p-input-icon-left">
                    <i className="pi pi-lock" />
                     <Password placeholder="Powtórz hasło" toggleMask feedback={false} required/>
                 </span>
                 <br/>
                 <Button type={"submit"} label="Załóż konto" />
                 <br />
                 <Button onClick={() => navigate('/signin')} label="Masz już konto?" className="p-button-link" />
             </form>
         </div>
         </div>
     </div>
    )
}