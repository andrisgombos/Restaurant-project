import React, { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import {
    InputField, CreateRestaurantButton, CreateRestaurantHeader, NewRestaurantContainer, InputFieldsContainer,
    InvisibleText, GreyText, SelectField,
} from './style'


const CreateNewReview = () => {

    const newReviewHandler = (event) => {
        event.preventDefault();
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/restaurants/";

            let reviewDetails = {
                // content: content,
            }

            const config = {
                method: "POST",
                body: JSON.stringify(reviewDetails),

                headers: new Headers ({
                    // "Authorization": `Bearer ${token}`,
                    "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3Mzg4NDA4LCJqdGkiOiIyMDI0M2RlNDk2MjE0N2I5YjFjNjU2MTdhNDg5MDNiMiIsInVzZXJfaWQiOjF9.s2BCrO0ezAl3j77MH8BNTvXwdxgDfgtVLOmY4n8wX-4`,
                    "Content-Type": "application/json"
                })
            }
            fetch(url, config)
            .then(res => res.json())
            .then(data => console.log(data))
        }

    return <>
        <Header/>

        <Footer/>
    </>
}

export default CreateNewReview;
