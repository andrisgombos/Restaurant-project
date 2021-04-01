import React, {useState, useEffect} from 'react';
import {BackgroundColor, UserCard, UserInfoContainer, UserImage, UserInfo, UserReviewsAmount, UserInfoTextContainer, RestaurantInfo, TopContainer, Button, LatestComments, LatestCommentsContainer, CommentName, Comment, ButtonContainer, LikeButton, CommentButton} from './style'
import { RestaurantGridContainer } from '../restaurant/style';
import Header from '../../header';
import Footer from '../../footer';
import {Mainsection} from '../../../globalStyle/globalStyle'

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        fetchUser();
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
console.log(users);

    return (
        <BackgroundColor>
            <Header/>
            <Mainsection>
                <RestaurantGridContainer>
                {users.map((user) =>
                    <UserCard key={user.id}>
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
                        <Comment>{user.description}</Comment>
                    </UserCard>
                )};
                </RestaurantGridContainer>
            </Mainsection>
            <Footer/>
        </BackgroundColor> 
        )
}

export default Users;