import Footer from "../../footer";
import Header from "../../header";
import React, {useState} from 'react';
import { RegisterCont, RegisterMsg, Inputfield, Button} from "./style"

export const Register = () => {

    const [regEmail,setEmail] = useState("");

    const regHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }
        const url = "TBD";
        const regConfig =  {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json'}       
        };
        fetch(url, regConfig)
        .then(result => {return result.json})
        .then(data => {
            console.log(data);
            // move to next page
        })
    }

    return  <>
                <Header/>
                <RegisterCont>
                    <RegisterMsg>Registration</RegisterMsg>
                    <Inputfield name='email' type='text' placeholder='E-mail address' value={regEmail} onChange={(e)=>setEmail(e.target.value)}></Inputfield>
                    <Button type='submit' onClick={regHandler}>Register</Button>
                </RegisterCont>
                <Footer/>
            </>
}
