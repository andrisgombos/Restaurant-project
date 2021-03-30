import styled from 'styled-components'
import Footer from "../footer";
import Header from "../header";
import { Button, RegisterMsg } from "./Registration"
import { Inputfield } from "./Registration"

const VerificationCont = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`

const InputHolder = styled.div`
    display: flex;
    flex-direction: row;

    div {
        display: flex;
        flex-direction: column;
        margin: 2em;
    }
`

const RegButton = styled(Button)`
    width: 25rem;
`

const Verification = () => {
    return  <>
                <Header/>
                    <VerificationCont>
                        <RegisterMsg>Verification</RegisterMsg>
                        <InputHolder>
                            <div>
                                <Inputfield name='email' type='text' placeholder='E-mail address'></Inputfield>
                                <Inputfield name='user' type='text' placeholder='Username'></Inputfield>
                                <Inputfield name='password' type='password' placeholder='Password'></Inputfield>
                            </div>
                            <div>
                                <Inputfield name='code' type='text' placeholder='Validation code'></Inputfield>
                                <Inputfield name='location' type='text' placeholder='Location'></Inputfield>
                                <Inputfield name='password' type='password' placeholder='Password repeat'></Inputfield>
                            </div>
                        </InputHolder>
                        <RegButton type='submit'>Finish registration</RegButton>
                    </VerificationCont>
                <Footer/>
            </>
}

export default (Verification)