import React, { useState, useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
import Food from '../../assets/pictures/asian_food.jpeg';
import {BackgroundColor,
        HeaderImageContainer,
        HeaderImage,
        SearchBarContainer,
        InputField,
        SearchButton,
        HeadlineContainer,
        RestaurantHeadline} from './style';
import {RestaurantCard,
        RestaurantName,
        RestaurantAddress,
        RestaurantImage} from '../restaurants/restaurant/style';
import {RestaurantGridContainer} from '../restaurants/restaurant/style'
import StarRating from '../starrating';
import {connect} from 'react-redux';
import {Mainsection} from '../../globalStyle/globalStyle';


const Home = (props) => {
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
                    res.sort((a, b) => b.average_rating - a.average_rating);
                    let rl = res.slice(0, 4);
                    setRestaurants(rl);
                    //props.dispatch(allRestaurants(res));
                })
                .catch(err => setErrors(err));
                
        }, []);

console.log(restaurants);
    return (
        <BackgroundColor>
            <Header></Header>
            <HeaderImageContainer>
                <SearchBarContainer>
                    <InputField placeholder="Search..."></InputField>
                    <SearchButton>Search</SearchButton>
                </SearchBarContainer>
                <HeaderImage src={Food}></HeaderImage>
            </HeaderImageContainer>
            
                <HeadlineContainer>
                    <RestaurantHeadline>Best Rated Restaurants</RestaurantHeadline>
                </HeadlineContainer>
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
            
            <Footer></Footer>
        </BackgroundColor>
    )
}

const mapStateToProps = (state) => {
    return ({
       // allRestaurants: state.allRestaurants,
       state
    })
}
export default connect(mapStateToProps)(Home)