import React from 'react';
import {BackgroundColor, ReviewCard, UserInfoContainer, UserImage, UserInfo, UserReviewsAmount, UserInfoTextContainer, RestaurantInfo} from './style'
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
                        <RestaurantInfo>XY Bar</RestaurantInfo>
                        <UserReviewsAmount>This is a comment</UserReviewsAmount>
                    </ReviewCard>
                    
                </RestaurantGridContainer>
            </Mainsection>
            <Footer/>
        </BackgroundColor> 
        )
}

export default Reviews;