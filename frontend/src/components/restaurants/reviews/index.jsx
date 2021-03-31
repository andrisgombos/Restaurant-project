import React from 'react';
import {Mainsection} from '../../../globalStyle/globalStyle';
import RestaurantGrid from '../../restaurants/restaurantGrid/index'
import Restaurants from '..';
import {BackgroundColor} from './style'


const Reviews = () => {
    return (
        <BackgroundColor>
            <Restaurants/>
            <RestaurantGrid/>
        </BackgroundColor> 
        )
}

export default Reviews;