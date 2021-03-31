import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import Food from '../../assets/pictures/asian_food.jpeg';
import {Mainsection} from '../../globalStyle/globalStyle';
import Restaurant from '../../assets/pictures/restaurant1.jpeg'
import StarRating from '../starrating/index'
import RestaurantGrid from '../restaurants/restaurantGrid/index'


const BackgroundColor = styled.main`
background-color: #f8f8f8;
`;

const HeaderImageContainer = styled.div`
width: 100%;
height: 40vh;
display: flex;
align-items: center;
justify-content: center;
`;

const HeaderImage = styled.img`
width: 100%;
height: 40vh;
object-fit: cover;
`;

const SearchBarContainer = styled.div`
position: absolute;
width: 40vw;
`;

const InputField = styled.input`
border: none;
padding: 20px;
width: 30vw;
background-color: white;
border-radius: 5px;
`;

const ButtonPlaceholder = styled.button`
background-color: #e47d32;
height: 20px;
width: 100px;
margin: 20px;
border:none;
color: white;
`;

const HeadlineContainer = styled.div`
display: flex;
justify-content: center;
`;

const RestaurantHeadline = styled.p`
font-size: 1.5rem;
text-transform: uppercase;
text-align: center;
padding: 15px;
border-bottom: 2px solid #e47d32;
color: #4c4c4c;
`;

/* const RestaurantGridContainer = styled.div`
display: grid;
grid-template-columns: 20% 20% 20% 20%;
grid-template-rows: auto;
column-gap: 65px;
row-gap: 30px;
margin-top: 1.5rem;
`;

const RestaurantCard = styled.div`
height: 410px;
width: 271px;
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
`; */

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