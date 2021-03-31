import styled from 'styled-components'
import { Button } from "../registration/style"

export const VerificationCont = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
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
        margin: 2em;
    }
`

export const RegButton = styled(Button)`
    width: 25rem;
`
