import React, {useState, useEffect} from 'react';
import {BackgroundColor, ReviewCard, UserInfoContainer, UserImage, UserInfo, UserReviewsAmount, UserInfoTextContainer, RestaurantInfo, TopContainer, Button, LatestComments, LatestCommentsContainer, CommentName, Comment, ButtonContainer, LikeButton, CommentButton} from './style'

import { RestaurantGridContainer } from '../restaurant/style';

import {CategoriesContainer, CategoriesUnderline, Categories} from '../../restaurants/style'
import {ButtonSignIn, ButtonSignUp} from '../../header/index'

import Header from '../../header';
import Footer from '../../footer';
import {Mainsection} from '../../../globalStyle/globalStyle'
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar'


const Reviews = () => {
    
    const [reviews, setReviews] = useState([]);
    const [likes, setLikes] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        fetchReviews();
        toggleLike();  
    }, []);

    const fetchReviews = () => {
        const token = localStorage.getItem('token');

        const usersURL = "https://luna-taurus.propulsion-learn.ch/backend/api/reviews/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(usersURL, config)
            .then(res=> res.json())
            .then(res => setReviews(res))
            .catch(err => setErrors(err));
    }

    const toggleLike = (id) => {
        const likeURL = `https://luna-taurus.propulsion-learn.ch/backend/api/reviews/like/${id}/`;
        const config = {
            method: "PATCH",
            headers: new Headers({
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3Mzg3MDA1LCJqdGkiOiI0ZDFlZmM4MGFlMjc0MzZmYjkyMjcxYjAwMTIzMGE0NyIsInVzZXJfaWQiOjF9.Wmz8rmox2nvDrFC4zBzAU_X_iEC-t7LbuCzak0D3nTE`,
                "Content-Type": "application/json"
            })
        }
        fetch(likeURL, config)
            .then(res=> res.json())
            .then(res => console.log("in setlikes", res))
            .catch(err => setErrors(err));
    }

    return (
        <BackgroundColor>
            <Header/>
            <Navbar/>
            <Mainsection>
                <RestaurantGridContainer>
                {reviews.map((review) =>
                    <ReviewCard key={review.id}>
                        <UserInfoContainer>
                            <UserImage src={review.profile_picture}/>
                            <UserInfoTextContainer>
                                <UserInfo>{review.user_profile.first_name} {review.user_profile.last_name}</UserInfo>
                                {review.user_profile.sent_reviews.length === 1
                                ? <UserReviewsAmount>{review.user_profile.sent_reviews.length} Review</UserReviewsAmount>
                                : <UserReviewsAmount>{review.user_profile.sent_reviews.length} Reviews</UserReviewsAmount>
                            }
                            </UserInfoTextContainer>
                        </UserInfoContainer>
                            <TopContainer>
                                <RestaurantInfo>{review.restaurant.name}</RestaurantInfo>
                                <UserReviewsAmount>{review.text_content}</UserReviewsAmount>
                            </TopContainer>
                            <ButtonContainer>
                                <LikeButton key={review.id} onClick={() => toggleLike(review.id)}>Like {review.liked_by.length}</LikeButton>
                                <CommentButton>Comment</CommentButton>
                            </ButtonContainer>
                            <LatestCommentsContainer>
                                <LatestComments>Latest Comments</LatestComments>
                                <CommentName>My Name</CommentName>
                                <Comment>{review.comment}</Comment>
                                <CommentName>My Name</CommentName>
                                <Comment>Lorem ipsum dolor sit amet this is a placeholder halle hallo</Comment>
                            </LatestCommentsContainer>
                    </ReviewCard>
                )};
                </RestaurantGridContainer>
            </Mainsection>
            <Footer/>
        </BackgroundColor> 
        )
}

export default Reviews;