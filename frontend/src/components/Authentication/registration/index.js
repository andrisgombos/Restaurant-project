import Footer from "../../footer";
import Header from "../../header";
import React, {useState} from 'react';
import { RegisterCont, RegisterMsg, Inputfield, Button} from "./style"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
//import registerAction from "../../../store/actions/registerAction"

export const Register = () => {

    const [regEmail,setEmail] = useState("");

    const dispatch = useDispatch();
    const history = useHistory()

    // <Link to='/sucess'> </Link>

    const regHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/auth/registration/";
        const regConfig =  {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json'}       
        };
        fetch(url, regConfig)
        .then(result => result.json())
        .then(data => {
            console.log(data);
        })
        // dispatch(registerAction(credentials))
        history.push("/sucess")
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
