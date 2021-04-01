import React, {useEffect, useState} from "react"
import Header from '../header'
import Footer from '../footer'
import {
    InputField,
    InputFieldContainer,
    NewReviewContainer,
    ReviewTitleImage,
    // RestaurantImage,
    SelectRating, SelectRatingContainer, StarImage,
    SubmitReviewButton, RestaurantName,
} from './style'
import AsianFood from "../../assets/pictures/asian_food.jpeg"
import Star from "../../assets/icon/star.svg"
import StarRating from "../starrating";




const CreateNewReview = () => {

    // GET restaurant info: name, image, rating, etc.
    const [restaurant, setRestaurant] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        const restaurantsURL = "https://luna-taurus.propulsion-learn.ch/backend/api/restaurants/7/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3Mzg3MDA1LCJqdGkiOiI0ZDFlZmM4MGFlMjc0MzZmYjkyMjcxYjAwMTIzMGE0NyIsInVzZXJfaWQiOjF9.Wmz8rmox2nvDrFC4zBzAU_X_iEC-t7LbuCzak0D3nTE`,
                "Content-Type": "application/json"
            })
        }
        fetch(restaurantsURL,config)
            .then(res=> res.json())
            .then(res => setRestaurant(res))
            .catch(err => setErrors(err));

    }, []);


    // POST review
    const [text_content, setText_content] = useState("");
    const newReviewHandler = (event) => {
        event.preventDefault();
        // need restaurant id for url? how can this be automated? currently manual
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/reviews/create/restaurant/7/";

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
        console.log(restaurant)


    return <>
        <Header/>
        <ReviewTitleImage>
            <img src={AsianFood} alt="unsername-titleimage"/>
        </ReviewTitleImage>
        {/* use restaurant image as ReviewTitleImage?*/}
        {/*<RestaurantImage src={restaurant.image}/>*/}
        <RestaurantName>{restaurant.name}</RestaurantName>
        <StarRating rating={restaurant.average_rating}/>
        <NewReviewContainer>
            <InputFieldContainer>
                <SelectRatingContainer>
                    <StarImage>
                        <img src={Star} alt={"star rating"}/>
                    </StarImage>
                    <StarImage>
                        <img src={Star} alt={"star rating"}/>
                    </StarImage>
                    <StarImage>
                        <img src={Star} alt={"star rating"}/>
                    </StarImage>
                    <StarImage>
                        <img src={Star} alt={"star rating"}/>
                    </StarImage>
                    <StarImage>
                        <img src={Star} alt={"star rating"}/>
                    </StarImage>
                    <SelectRating>Select your rating</SelectRating>
                </SelectRatingContainer>
                <InputField
                    name='text_content'
                    type='text'
                    required
                    placeholder={"Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review or if you're connected in any way to the owner or employees."}
                    value= {undefined} onChange={(e)=>setText_content(e.target.value)}/>
                <SubmitReviewButton  type='submit' onClick={newReviewHandler}>Submit</SubmitReviewButton>
            </InputFieldContainer>
        </NewReviewContainer>
        <Footer/>
    </>
}

export default CreateNewReview;
