import Footer from "../../footer";
import Header from "../../header";
import { RegisterMsg, Button } from "../registration/style"
import { EmailCont, Message} from "./style"
import { Link } from 'react-router-dom';


 const Email = () => {

    return  <>
                <Header/>
                <EmailCont>
                    <RegisterMsg>Registration</RegisterMsg>
                    <Message>Thanks for your registration.</Message>
                    <Message>Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for</Message>
                    <Button><Link to='/verification'>Continue</Link></Button>
                </EmailCont>
                <Footer/>
            </>
}

export default (Email)