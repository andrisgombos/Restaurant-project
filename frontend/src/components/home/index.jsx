import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Food from '../../assets/pictures/asian_food.jpeg';
<<<<<<< HEAD
import RestaurantGrid from '../restaurants/restaurantGrid/index';
import {BackgroundColor,
        HeaderImageContainer,
        HeaderImage,
        SearchBarContainer,
        InputField,
        ButtonPlaceholder,
        HeadlineContainer,
        RestaurantHeadline} from './style';
=======
// import {Mainsection} from '../../globalStyle/globalStyle';
// import Restaurant from '../../assets/pictures/restaurant1.jpeg'
// import StarRating from '../starrating/index'
import RestaurantGrid from '../restaurants/restaurantGrid/index'
>>>>>>> development-frontend


const Home = () => {
    return (
        <BackgroundColor>
            <Header></Header>
            <HeaderImageContainer>
                <SearchBarContainer>
                    <InputField placeholder="Search..."></InputField>
                    <ButtonPlaceholder>Search</ButtonPlaceholder>
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