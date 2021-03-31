
import styled from "styled-components"


export const VerificationCont = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`


export const InputHolder = styled.div`
    display: flex;
    flex-direction: row;

    div {
        display: flex;
        flex-direction: column;
        margin-top: 0;
        margin-left: 1em;
        margin-right: 1em;
    }
`


export const RegButton = styled.button`
    align-self: center;
    border-radius: 100px;
    color: #F8F8FF;
    border: none;
    background-color: orange;
    font-size: 1.5rem;
    padding: 1em 1.5em;
    margin-top: 3em;
    width: 25rem;
`


export const PlainText = styled.div`
    padding-bottom: 0;
    margin-bottom: 0;
    font-weight: normal;
`


export const InputField = styled.input`
    padding: 0.7em 1em;
    width: 20em;
    margin-top: 2em;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1.5px solid #e5e5e5;
`


export const RegisterMsg = styled.h1`
    color: #4C4C4C;
    font-size: 2.5rem;
    margin-bottom: 80px;
    text-transform: uppercase;
    border-bottom: 6px solid orange;
    border-bottom: solid;
    padding-bottom: 0.3em;
    margin-top: 2em;
    font-weight: bold;
`

