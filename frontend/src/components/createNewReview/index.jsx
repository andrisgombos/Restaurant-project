import React, { useState } from "react"
import Header from '../header'
import Footer from '../footer'
import {InputField, InputFieldContainer, NewReviewContainer, ReviewTitleImage, SubmitReviewButton,} from './style'
import AsianFood from "../../assets/pictures/asian_food.jpeg"



const CreateNewReview = () => {

    const [text_content, setText_content] = useState("");

    const newReviewHandler = (event) => {
        event.preventDefault();
        // need restaurant id for url? how can this be automated? currently manual
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/reviews/create/restaurant/1/";

            let reviewDetails = {
                text_content: text_content,
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
        <ReviewTitleImage>
            <img src={AsianFood} alt="unsername-titleimage"/>
        </ReviewTitleImage>
        <NewReviewContainer>
            <InputFieldContainer>
                <InputField
                    name='text_content'
                    type='text'
                    placeholder={"Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review or if you're connected in any way to the owner or employees."}
                    onfocus={"this.placeholder = ''"}
                    value= {undefined} onChange={(e)=>setText_content(e.target.value)}/>
                <SubmitReviewButton  type='submit' onClick={newReviewHandler}>Submit</SubmitReviewButton>
            </InputFieldContainer>
        </NewReviewContainer>
        <Footer/>
    </>
}

export default CreateNewReview;
