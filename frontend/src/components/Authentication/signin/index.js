import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg, Inputfield, Button } from "../registration/style"
import React, { useState } from 'react'
import { SignInCont } from "./style"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password
        }
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/auth/token/";
        const signInConfig = {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json'}       
        };
        fetch(url, signInConfig)
        .then(result => result.json())
        .then(data => {
            console.log(data);
            // dispatch + move to homepage
            localStorage.setItem('token', data.access);
        })
    }

    return  <>
                <Header/>
                <SignInCont>
                    <RegisterMsg>Login</RegisterMsg>
                    <Inputfield name='email' type='text' placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}></Inputfield>
                    <Inputfield name='password' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Inputfield>
                    <Button type='submit' onClick={signInHandler}><Link to='/home'>Login</Link></Button>
                </SignInCont>
                <Footer/>
            </>
}

export default (SignIn)
