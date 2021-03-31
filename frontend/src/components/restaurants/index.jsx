import React from 'react';
import Header from '../header';
import Footer from '../footer';
// import {Mainsection} from '../../globalStyle/globalStyle';
import RestaurantGrid from '../restaurants/restaurantGrid/index'
import {BackgroundColor,
        SearchBarContainer,
        InputField,
        CategoriesContainer,
        CategorieUnderline,
        Categories} from './style'

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

export default Restaurants;