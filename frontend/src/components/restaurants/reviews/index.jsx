import React from 'react';
import {BackgroundColor, ReviewCard, UserInfoContainer, UserImage, UserInfo, UserReviewsAmount, UserInfoTextContainer, RestaurantInfo, TopContainer, Button, LatestComments, LatestCommentsContainer, CommentName, Comment, ButtonContainer} from './style'
import { RestaurantGridContainer } from '../restaurant/style';
import Header from '../../header';
import Footer from '../../footer';
import {Mainsection} from '../../../globalStyle/globalStyle'
import Face from '../../../assets/pictures/userFace.JPG'

const Reviews = () => {
    return (
        <BackgroundColor>
            <Header/>
            <Mainsection>
                <RestaurantGridContainer>
                    <ReviewCard>
                        <UserInfoContainer>
                            <UserImage src={Face}/>
                            <UserInfoTextContainer>
                                <UserInfo>Cindy Reber</UserInfo>
                                <UserReviewsAmount>6 Reviews in Total</UserReviewsAmount>
                            </UserInfoTextContainer>
                        </UserInfoContainer>
                            <TopContainer>
                                <RestaurantInfo>XY Bar</RestaurantInfo>
                                <UserReviewsAmount>This is a comment</UserReviewsAmount>
                            </TopContainer>
                            <ButtonContainer>
                                <Button>Like / Comment</Button>
                            </ButtonContainer>
                            <LatestCommentsContainer>
                                <LatestComments>Latest Comments</LatestComments>
                                <CommentName>My Name</CommentName>
                                <Comment>Lorem ipsum dolor sit amet this is a placeholder halle hallo</Comment>
                                <CommentName>My Name</CommentName>
                                <Comment>Lorem ipsum dolor sit amet this is a placeholder halle hallo</Comment>
                            </LatestCommentsContainer>
                    </ReviewCard>
                    
                </RestaurantGridContainer>
            </Mainsection>
            <Footer/>
        </BackgroundColor> 
        )
}

export default Reviews;