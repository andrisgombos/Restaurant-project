import styled from 'styled-components'
import { OrangeButton } from '../../../globalStyle/globalStyle'
import { Button } from "../registration/style"

export const VerificationCont = styled.div`
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height:auto;
    width: 100vw;
    font-weight: bold;
`

export const InputHolder = styled.div`
    background-color:transparent;
    display: flex;
    flex-direction: row;
    height:80%;
    

    div {
        flex-direction: column;
        display: flex;
        margin-bottom:1em;
        margin: 2em;
    }
`

export const RegButton = styled(OrangeButton)`
    margin:25px;
    width:300px;
`
