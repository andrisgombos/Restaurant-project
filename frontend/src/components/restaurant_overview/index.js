import Footer from "../footer/index"
import Header from "../header/index"
import React, { useState, useEffect } from 'react';
import {Mainsection, Background, OrangeButton} from "../../globalStyle/globalStyle"
import {UpperContainer, RestInUpperCont,MainWrapper, Left, LeftInnerWrapper, RestStarRating, Right, RightWrapper, RestButton} from "./style"
import userimg from "../../assets/pictures/userFace.JPG"
import StarRating from "../starrating/index"

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
            <Background>
            <Mainsection>
                <MainWrapper>
                    <Left>
                        <LeftInnerWrapper>
                            <img src={userimg}/>
                            <div>
                                <h1>Name</h1>
                                <span>Total reviews</span>
                            </div>
                            
                        </LeftInnerWrapper>
                    <div>Review content</div>
                    </Left>
                    <Right>
                        <span>Opening Hours</span>
                        <span>Price level: $$$</span>
                        <RightWrapper>
                            <RestButton>Write a review</RestButton>
                            <RestButton>Edit data</RestButton>
                        </RightWrapper >
                    </Right>
                </MainWrapper>
            </Mainsection>
            </Background>
        <Footer/>
        </>
    
}
export default RestaurantOverview
