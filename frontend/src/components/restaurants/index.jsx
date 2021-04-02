import React from 'react';
import Header from '../header';
import Footer from '../footer';
// import {Mainsection} from '../../globalStyle/globalStyle';
import RestaurantGrid from '../restaurants/restaurantGrid/index'
import {BackgroundColor} from './style'
import Navbar from './navbar';



const Restaurants = () => {

    return (
        <BackgroundColor>
            <Header/>
            <Navbar/>
            <RestaurantGrid/>
            <Footer/>
        </BackgroundColor> 
        )
}

export default Restaurants;