import React, {useState, useEffect} from 'react';
import {BackgroundColor, UserCard, UserInfoContainer, UserImage, UserInfo, UserReviewsAmount, UserInfoTextContainer, RestaurantInfo, TopContainer, Button, LatestComments, LatestCommentsContainer, CommentName, Comment, ButtonContainer, LikeButton, CommentButton} from './style'
import { RestaurantGridContainer } from '../restaurant/style';
import Header from '../../header';
import Footer from '../../footer';
import {Mainsection} from '../../../globalStyle/globalStyle'
import { Link } from 'react-router-dom';
import Navbar from '../navbar'

const Users = () => {
    
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(false);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser();
    }, []);
    const token = localStorage.getItem('token');

    const fetchUser = () => {
        const usersURL = "https://luna-taurus.propulsion-learn.ch/backend/api/userprofiles/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(usersURL, config)
            .then(res=> res.json())
            .then(res => setUsers(res))
            .catch(err => setErrors(err));
    }
console.log(users);
// onClick={passUserIdToState(user.id)}
    // const passUserIdToState = (id) => {

    //         setUserId(id)
    // }
    console.log(userId);

    return (
        <BackgroundColor>
            <Header/>
            <Navbar/>
            <Mainsection>
                <RestaurantGridContainer>
                {users.map((user) =>
                    <UserCard key={user.id}>
                        <UserInfoContainer>
                            <UserImage src={user.profile_picture}/>
                            <UserInfoTextContainer>
                            <Link to="/user"><UserInfo>{user.first_name} {user.last_name}</UserInfo></Link>
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