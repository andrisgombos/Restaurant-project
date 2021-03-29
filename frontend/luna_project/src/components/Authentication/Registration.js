import styled from 'styled-components'
// eslint-disable-next-line
const RegisterCont = styled.div`
    background-color: #F8F8FF;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`
const RegisterMsg = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 80px;
    text-transform: uppercase;
    border-bottom: 6px solid orange;
    border-bottom-style: solid;
    padding-bottom: 0.3em;
    margin-top: 2em;
    font-weight: bold;
`

const Inputfield = styled.input`
    padding: 0.7em 1em;
    width: 20em;
    margin-top: 2em;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1.5px solid #e5e5e5;
`
const RegButton = styled.button`
    width: 10em;
    align-self: center;
    border-radius: 100px;
    color: #F8F8FF;
    border: none;
    background-color: orange;
    font-size: 1rem;
    padding: 1em 1.5em;
    margin-top: 3em;
`

const Register = () => {



    return  <>
        <RegisterCont>
            <RegisterMsg>Registration</RegisterMsg>
            <Inputfield name='email' type='text' placeholder='E-mail address'></Inputfield>
            <RegButton type='submit'>Register</RegButton>
        </RegisterCont>
    </>
}

export default (Register)