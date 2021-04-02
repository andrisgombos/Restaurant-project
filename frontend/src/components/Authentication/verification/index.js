import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg} from "../registration/style"
import { VerificationCont, InputHolder, RegButton, VerInput } from "./style"
import { Link } from 'react-router-dom';
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { Background } from "../../../globalStyle/globalStyle";

const Verification = () => {

    const history = useHistory()
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")
    // const [location, setLocation] = useState("")
    const [password_repeat, setPassword_repeat] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")


    const veriHandler = (e) => {
        e.preventDefault();
        const veriCredentials = {
            email : email,
            username: username,
            password: password,
            code: code,
            // location: location,
            password_repeat: password_repeat,
            first_name: first_name,
            last_name: last_name    
        }
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/auth/registration/validation/";
        const config = {
            method: "PATCH",
            body: JSON.stringify(veriCredentials),
            headers: { "Content-Type": "application/json"}
        }
        fetch(url,config)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            history.push('/sign-in')
    }

    return  <>
                <Header/>
                
                    <VerificationCont>
                        <RegisterMsg>Verification</RegisterMsg>
                        <InputHolder><span><VerInput name='code' type='text' placeholder='Validation code' value={code} onChange ={(e)=> setCode(e.target.value)}></VerInput></span></InputHolder>
                            <InputHolder>
                            <div>
                                <VerInput name='email' type='text' placeholder='E-mail address' value={email} onChange ={(e)=> setEmail(e.target.value)}></VerInput>
                                <VerInput name='password' type='password' placeholder='Password' value={password} onChange ={(e)=> setPassword(e.target.value)}></VerInput>
                                <VerInput name='first_name' type='text' placeholder='First name' value={first_name} onChange ={(e)=> setFirst_name(e.target.value)}></VerInput>
                            </div>
                            <div>
                                <VerInput name='password_repeat' type='password' placeholder='Password repeat' value={password_repeat} onChange ={(e)=> setPassword_repeat(e.target.value)}></VerInput>
                                <VerInput name='last_name' type='text' placeholder='Last name' value={last_name} onChange ={(e)=> setLast_name(e.target.value)}></VerInput>
                                <VerInput name='user' type='text' placeholder='Username' value={username} onChange ={(e)=> setUsername(e.target.value)}></VerInput>
                            </div>
                        </InputHolder>
                        <RegButton type='submit' onClick={veriHandler}>Finish registration</RegButton>
                    </VerificationCont>
                    
                <Footer/>
            </>
}

export default (Verification)

// correct version v2