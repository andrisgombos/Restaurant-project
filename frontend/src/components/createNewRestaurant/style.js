
import styled from "styled-components"
import {OrangeButton} from "../../globalStyle/globalStyle";


export const NewRestaurantContainer = styled.form`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-weight: bold;
`


export const InputFieldsContainer = styled.div`
    display: flex;
    flex-direction: row;

    div {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
        margin-right: 1em;
      
      text {
        font-weight: bold;
        padding-top: 10px;
      }
    }
`


export const CreateRestaurantButton = styled(OrangeButton)`
    align-self: center;
    color: #F8F8FF;
    border: none;
    font-size: 1.5rem;
    margin-top: 3em;
    width: 20rem;
    cursor: pointer;
`


export const InputField = styled.input`
    padding: 0.7em 1em;
    width: 20em;
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 1.5rem;
    font-weight: normal;
    border: 1.5px solid #e5e5e5;
    border-radius: 5px;
`


export const SelectField = styled.select`
    padding: 0.7em 1em;
    width: 20em;
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 1.5rem;
    font-weight: normal;
    border: 1.5px solid #e5e5e5;
    border-radius: 5px;
`


export const CreateRestaurantHeader = styled.h1`
    color: #4C4C4C;
    font-size: 2.5rem;
    margin-bottom: 80px;
    text-transform: uppercase;
    border-bottom: 6px solid orange;
    border-bottom: solid;
    padding-bottom: 0.3em;
    margin-top: 2em;
    font-weight: bold;
    border-color: #E47D31;
`


export const InvisibleText = styled.text`
  color: #F2F2F2;
`


export const GreyText = styled.text`
  color: grey;
`


export const UploadImageButton = styled(OrangeButton)`
    align-self: center;
    color: #F8F8FF;
    border: none;
    font-size: 1.5rem;
    margin-top: 3em;
    width: 20rem;
`

