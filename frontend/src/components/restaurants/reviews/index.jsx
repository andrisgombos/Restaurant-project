import React from 'react';
import Restaurants from '..';
import {BackgroundColor, ReviewCard} from './style'
import { RestaurantGridContainer } from '../restaurantGrid/style';
import Header from '../../header';
import Footer from '../../footer';
import {Mainsection} from '../../../globalStyle/globalStyle'

const Reviews = () => {
    return (
        <BackgroundColor>
            <Header/>
            <Mainsection>
                <RestaurantGridContainer>
                    <ReviewCard></ReviewCard>
                    
                </RestaurantGridContainer>
            </Mainsection>
            <Footer/>
        </BackgroundColor> 
        )
}

export default Reviews;