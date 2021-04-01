import React, {useState, useEffect} from 'react';
import {BackgroundColor, ReviewCard, UserInfoContainer, UserImage, UserInfo, UserReviewsAmount, UserInfoTextContainer, RestaurantInfo, TopContainer, Button, LatestComments, LatestCommentsContainer, CommentName, Comment, ButtonContainer, LikeButton, CommentButton} from './style'
import { RestaurantGridContainer } from '../restaurant/style';
import {ButtonSignIn, ButtonSignUp} from '../../header/index'
import Header from '../../header';
import Footer from '../../footer';
import {Mainsection} from '../../../globalStyle/globalStyle'

const Reviews = () => {
    
    const [users, setUsers] = useState([]);
    const [likes, setLikes] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        fetchUser();
        toggleLike();  
    }, []);

    const fetchUser = () => {
        const usersURL = "https://luna-taurus.propulsion-learn.ch/backend/api/userprofiles/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3Mzg3MDA1LCJqdGkiOiI0ZDFlZmM4MGFlMjc0MzZmYjkyMjcxYjAwMTIzMGE0NyIsInVzZXJfaWQiOjF9.Wmz8rmox2nvDrFC4zBzAU_X_iEC-t7LbuCzak0D3nTE`,
                "Content-Type": "application/json"
            })
        }
        fetch(usersURL, config)
            .then(res=> res.json())
            .then(res => setUsers(res))
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

    console.log(users);

    return (
        <BackgroundColor>
            <Header/>
            <Mainsection>
                <RestaurantGridContainer>
                {users.map((user) =>
                    <ReviewCard key={user.id}>
                        <UserInfoContainer>
                            <UserImage src={user.profile_picture}/>
                            <UserInfoTextContainer>
                                <UserInfo>{user.first_name} {user.last_name}</UserInfo>
                                {user.sent_reviews.length === 1
                                ? <UserReviewsAmount>{user.sent_reviews.length} Review</UserReviewsAmount>
                                : <UserReviewsAmount>{user.sent_reviews.length} Reviews</UserReviewsAmount>
                            }
                            </UserInfoTextContainer>
                        </UserInfoContainer>
                            <TopContainer>
                                <RestaurantInfo>XY Bar</RestaurantInfo>
                                <UserReviewsAmount>This is a review</UserReviewsAmount>
                            </TopContainer>
                            <ButtonContainer>
                            {likes.map ((like) => 
                                {(like.liked_by)
                                    
                                ? <LikeButton key={like.id} onClick={() => toggleLike(like.id)}>Like</LikeButton>
                                : <LikeButton key={like.id} onClick={() => toggleLike(like.id)}>Like 1</LikeButton>
                            }
                            )};
                                <CommentButton>Comment</CommentButton>

                            </ButtonContainer>
                            <LatestCommentsContainer>
                                <LatestComments>Latest Comments</LatestComments>
                                <CommentName>My Name</CommentName>
                                <Comment>Lorem ipsum dolor sit amet this is a placeholder halle hallo</Comment>
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