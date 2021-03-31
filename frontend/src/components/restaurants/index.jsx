import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';
import {Mainsection} from '../../globalStyle/globalStyle';
import RestaurantGrid from '../restaurants/restaurantGrid/index'

const BackgroundColor = styled.main`
background-color: #f8f8f8;
`;

const SearchBarContainer = styled.div`
width: 85vw;
`;

const InputField = styled.input`
border: none;
padding: 20px;
width: 85vw;
background-color: white;
border: 1px solid #e9e9e9;
font-weight: bold;
font-size: 16px;
color: #f8f8f8;
`;

const CategoriesContainer = styled.div`
display: flex;
justify-content: center;
`;

const CategorieUnderline = styled.div`
border-bottom: 1px solid #e9e9e9;
display: flex;
`;


const Categories = styled.p`
font-size: 1.2rem;
text-transform: uppercase;
text-align: center;
padding: 15px;
color: #4c4c4c;
cursor: pointer;
font-weight: 600;

:hover {
    border-bottom: 2px solid #e47d32;
}

`;

const Restaurants = () => {
    return (
        <BackgroundColor>
            <Header></Header>
            <SearchBarContainer>
                <InputField placeholder="Search"></InputField>
            </SearchBarContainer>
            <CategoriesContainer>
                <CategorieUnderline>
                    <Categories>Restaurants</Categories>
                    <Categories>Reviews</Categories>
                    <Categories>Users</Categories>
                </CategorieUnderline>
            </CategoriesContainer>
            <RestaurantGrid></RestaurantGrid>
            <Footer></Footer>
        </BackgroundColor> 
        )
}

export default Restaurants