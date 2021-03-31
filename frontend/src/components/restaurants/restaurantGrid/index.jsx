import React from 'react';
import Restaurant from '../../../assets/pictures/restaurant1.jpeg'
import StarRating from '../../starrating/index'
import {Mainsection} from '../../../globalStyle/globalStyle';
import {RestaurantGridContainer,
        RestaurantCard,
        RestaurantName,
        RestaurantAddress,
        RestaurantImage} from './style';


const RestaurantGrid = () => {
    return (
        <Mainsection>
            <RestaurantGridContainer>
                <RestaurantCard>
                    <RestaurantName>Example Rest</RestaurantName>
                    <RestaurantAddress>Bahnhofstrasse 43</RestaurantAddress>
                    <StarRating rating={5}/>
                    <RestaurantImage src={Restaurant}></RestaurantImage>
                </RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
                <RestaurantCard></RestaurantCard>
            </RestaurantGridContainer>
        </Mainsection>
    )
};

export default RestaurantGrid;