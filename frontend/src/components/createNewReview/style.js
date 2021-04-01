
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
`

export const ReviewTitleImage = styled.div`
    height:300px;
    width:100%;
    display:flex;
    background: rgba(0, 0, 0, 0.5);
    img{
        height:100%;
        width:100%;
    }
`;


export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
`



export const SelectRatingContainer = styled.div`
    display: flex;
    align-self: flex-start;
    justify-self: center;
    font-size: 1.5em;
    margin-top: 1em;  
`


export const StarImage = styled.div`
    height:50px;
    //display:flex;
    align-self: flex-start;
    justify-self: center;
    font-size: 0.5em;
    margin-top: 1em;
    img{
        height:100%;
        width:100%;
    }
`;


export const SelectRating = styled.div`
    align-self: flex-start;
    justify-self: center;
    font-size: 1em;
    margin-top: 1em;
    margin-left: 0.5em;
    color: grey;
    font-weight: lighter;
`


export const InputField = styled.textarea`
    padding: 0.7em 1em;
    width: 35em;
    height: 12em;
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 1.5rem;
    font-weight: normal;
    border: 1.5px solid #e5e5e5;
    border-radius: 5px;
    input:focus::placeholder {
      color: transparent;
    }
`


export const SubmitReviewButton = styled(OrangeButton)`
    align-self: flex-end;
    color: #F8F8FF;
    border: none;
    font-size: 1.5rem;
    margin-top: 1em;
    width: 15rem;
    cursor: pointer;
`
