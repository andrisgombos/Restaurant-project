import React, { useState, useEffect } from 'react';
import Header from '../header';
import Footer from '../footer';
// import {Mainsection} from '../../globalStyle/globalStyle';
import RestaurantGrid from '../restaurants/restaurantGrid/index'
import {BackgroundColor,
        SearchBarContainer,
        InputField,
        CategoriesContainer,
        CategoriesUnderline,
        Categories} from './style'



const Restaurants = () => {

    return (
        <BackgroundColor>
            <Header></Header>
            <SearchBarContainer>
                <InputField placeholder="Search"></InputField>
            </SearchBarContainer>
            <CategoriesContainer>
                <CategoriesUnderline>
                    <Categories>Restaurants</Categories>
                    <Categories>Reviews</Categories>
                    <Categories>Users</Categories>
                </CategoriesUnderline>
            </CategoriesContainer>
            <RestaurantGrid></RestaurantGrid>
            <Footer></Footer>
        </BackgroundColor> 
        )
}

export default Restaurants;