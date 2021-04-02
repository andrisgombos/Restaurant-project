import Footer from "../footer/index"
import Header from "../header/index"
import React, { useState, useEffect } from 'react';
import {Mainsection} from "../../globalStyle/globalStyle"
import {UpperContainer, RestInUpperCont} from "./style"
import StarRating from "../starrating/index"
import { Main } from "../../components/userPage/userCenter/reviewsByUser/style"

const RestaurantOverview = () => {

    return  <>
        <Header/>
            <UpperContainer>
                <RestInUpperCont>
                    <div>
                        <h1>Willy Wonka's Chocolate Factory</h1>
                        <h2>Adress</h2>
                        <StarRating/>
                    </div>
                </RestInUpperCont>
            </UpperContainer>
            <Mainsection>
                <Main>
                    <div>
                        <h1>Name</h1>
                        <span>Total reviews</span>
                    </div>
                </Main>
            </Mainsection>
        <Footer/>
        </>
    
}
export default RestaurantOverview
