import styled from 'styled-components'
import Footer from "../footer";
import Header from "../header";
import { RegisterMsg } from "./Registration"
import { Inputfield } from "./Registration"
import { Button } from "./Registration"
import React, { useState } from 'react'

const SignInCont = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`

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
