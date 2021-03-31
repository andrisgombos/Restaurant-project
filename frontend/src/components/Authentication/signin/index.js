import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg, Inputfield, Button } from "../registration/style"
import React, { useState } from 'react'
import { SignInCont } from "./style"


const SignIn = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return  <>
                <Header/>
                <SignInCont>
                    <RegisterMsg>Login</RegisterMsg>
                    <Inputfield name='user' type='text' placeholder='Username' value={user} onChange={(e)=>setUser(e.target.value)}></Inputfield>
                    <Inputfield name='password' type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Inputfield>
                    <Button type='submit'>Login</Button>
                </SignInCont>
                <Footer/>
            </>
}

export default (SignIn)
