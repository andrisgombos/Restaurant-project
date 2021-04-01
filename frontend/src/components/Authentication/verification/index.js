import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg, Inputfield } from "../Registration"
import { VerificationCont, InputHolder, RegButton } from "./style"
import { Link } from 'react-router-dom';

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