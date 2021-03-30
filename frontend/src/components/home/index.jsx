import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import Food from '../../assets/pictures/asian_food.jpeg';
import {Mainsection} from '../../globalStyle/globalStyle';

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

const Home = () => {
    return (
        <>
            <Header></Header>
            <HeaderImageContainer>
                <SearchBarContainer>
                    <InputField placeholder="Search..."></InputField>
                    <ButtonPlaceholder>Search</ButtonPlaceholder>
                </SearchBarContainer>
                <HeaderImage src={Food}></HeaderImage>
            </HeaderImageContainer>
            <Mainsection>
                <HeadlineContainer>
                    <RestaurantHeadline>Best Rated Restaurants</RestaurantHeadline>
                </HeadlineContainer>
            </Mainsection>
            <Footer></Footer>
        </>
    )
}

export default Home;