import React, { useState, useEffect } from 'react';
import StarRating from '../../starrating/index'
import {Mainsection} from '../../../globalStyle/globalStyle';
import {RestaurantGridContainer,
        RestaurantCard,
        RestaurantName,
        RestaurantAddress,
        RestaurantImage} from './style';
import {allRestaurants} from '../../../store/actions/allRestaurantsAction';
import {connect} from 'react-redux';

const Restaurant = (props) => {

const [restaurants, setRestaurants] = useState([]);
const [errors, setErrors] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        const restaurantsURL = "https://luna-taurus.propulsion-learn.ch/backend/api/restaurants/";
        const config = {
            method: "GET",
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(restaurantsURL,config)
            .then(res=> res.json())
            .then(res => {
                setRestaurants(res);
                props.dispatch(allRestaurants(res));
            })
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

const mapStateToProps = (state) => {
    return ({
        //allRestaurants: state.allRestaurants
        state
    })
}
export default connect(mapStateToProps)(Restaurant)