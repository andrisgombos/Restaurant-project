
import styled from "styled-components"
import {OrangeButton} from "../../globalStyle/globalStyle";



export const NewReviewContainer = styled.form`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`


export const InputField = styled.textarea`
    padding: 0.7em 1em;
    width: 30em;
    height: 15em;
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 1.5rem;
    font-weight: normal;
    border: 1.5px solid #e5e5e5;
    border-radius: 5px;
`


export const SubmitReviewButton = styled(OrangeButton)`
    align-self: center;
    color: #F8F8FF;
    border: none;
    font-size: 1.5rem;
    margin-top: 1em;
    width: 15rem;
    cursor: pointer;
`
