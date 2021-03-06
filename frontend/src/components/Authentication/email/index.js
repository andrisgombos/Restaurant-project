import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg } from "../registration/style"
import { EmailCont, Message , Button} from "./style"
import { Link } from 'react-router-dom';
import { Background } from "../../../globalStyle/globalStyle";


 const Email = () => {

    return  <>
                <Header/>
                <Background>
                <EmailCont>
                    <RegisterMsg>Registration</RegisterMsg>
                    <Message>Thanks for your registration.</Message>
                    <Message>Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for</Message>
                    <Link to='/verification'><Button>Continue</Button></Link>
                </EmailCont>
                </Background>
                <Footer/>
            </>
}

export default (Email)