import React from 'react';
import styled from 'styled-components';
import Restaurant from '../../../assets/pictures/restaurant1.jpeg'
import StarRating from '../../starrating/index'
import {Mainsection} from '../../../globalStyle/globalStyle';

const RestaurantGridContainer = styled.div`
display: grid;
grid-template-columns: 270px 270px 270px 270px;
grid-template-rows: auto;
column-gap: 20px;
row-gap: 30px;
margin-top: 1.5rem;
`;

const RestaurantCard = styled.div`
height: 410px;
border-top: 5px solid #e47d32;
background-color: white;

`;

const RestaurantName = styled.p`
padding: 10px;
`;

const RestaurantAddress = styled.p`
padding-left: 10px;
font-size: 14px;
`;

const RestaurantImage = styled.img`
width: 270px;
height: 270px;
object-fit: cover;
`;

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
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
                <RestaurantCard>hello</RestaurantCard>
            </RestaurantGridContainer>
        </Mainsection>
    )
};

export default RestaurantGrid;