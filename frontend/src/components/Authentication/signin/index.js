import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg, Inputfield, Button } from "../registration/style"
import React, { useState } from 'react'
import { SignInCont } from "./style"
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';
import {signInAction} from "../../../store/actions/signInAction"


const SignIn = (props) => {

    const dispatch = useDispatch();
    const history = useHistory()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signInHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password
        }
        dispatch(signInAction(credentials, history))
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
