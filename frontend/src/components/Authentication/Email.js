import styled from 'styled-components'
import Footer from "../footer";
import Header from "../header";
import { RegisterMsg } from "./Registration"

const EmailCont = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`
const Message = styled.div`
    font-weight: 400;
    text-align: center;
    color: #4C4C4C;
    width: 25em;
`


const Email = () => {

    return  <>
                <Header/>
                <EmailCont>
                    <RegisterMsg>Registration</RegisterMsg>
                    <Message>Thanks for your registration.</Message>
                    <Message>Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for</Message>
                </EmailCont>
                <Footer/>
            </>
}

export default (Email)