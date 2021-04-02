import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Food from '../../assets/pictures/asian_food.jpeg';
import RestaurantGrid from '../restaurants/restaurantGrid/index';
import {BackgroundColor,
        HeaderImageContainer,
        HeaderImage,
        SearchBarContainer,
        InputField,
        SearchButton,
        HeadlineContainer,
        RestaurantHeadline} from './style';


const Home = () => {
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
                <RestaurantGrid/>
            
            <Footer></Footer>
        </BackgroundColor>
    )
}

export default Home;