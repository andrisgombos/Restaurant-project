import React, { useState, useEffect } from 'react';
import StarRating from '../../starrating/index'
import {Mainsection} from '../../../globalStyle/globalStyle';
import {RestaurantGridContainer,
        RestaurantCard,
        RestaurantName,
        RestaurantAddress,
        RestaurantImage} from './style';

const Restaurant = () => {

const [restaurants, setRestaurants] = useState([]);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        
        const restaurantsURL = "https://luna-taurus.propulsion-learn.ch/backend/api/restaurants/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3Mzg3MDA1LCJqdGkiOiI0ZDFlZmM4MGFlMjc0MzZmYjkyMjcxYjAwMTIzMGE0NyIsInVzZXJfaWQiOjF9.Wmz8rmox2nvDrFC4zBzAU_X_iEC-t7LbuCzak0D3nTE`,
                "Content-Type": "application/json"
            })
        }
        fetch(restaurantsURL,config)
            .then(res=> res.json())
            .then(res => setRestaurants(res))
            .catch(err => setErrors(err));
            
    }, []);
    return (
        <Mainsection>
            <RestaurantGridContainer>
                {restaurants.map((restaurant) => 
                    <RestaurantCard key={restaurant.id}>
                        <RestaurantName>{restaurant.name}</RestaurantName>
                        <RestaurantAddress>{restaurant.street}</RestaurantAddress>
                        <StarRating rating={restaurant.average_rating}/>
                        <RestaurantImage src={restaurant.image}></RestaurantImage>
                    </RestaurantCard>
                )}  
            </RestaurantGridContainer> 
        </Mainsection>
    )
}

export default Restaurant;