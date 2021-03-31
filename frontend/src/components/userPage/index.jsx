import React from 'react'
import Title from '../../assets/pictures/title.jpg'
import { Background } from '../../globalStyle/globalStyle'
import Footer from '../footer'
import Header from '../header'
import  { TitleImage , Mainsection } from './style'
import UserMenuCard from './UserMenuCard'
import CenterContainer from './userCenter';
import AboutUser from "./aboutUser";


export default function ProfilePage() {
    return (
        <>
        <Header />
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <Mainsection>
                {/* if the Token is stored then render  the self-menu-card, if no token is present re-direct to signUp page*/}
                <UserMenuCard />
                <CenterContainer />
                <AboutUser />
            </Mainsection>
        </Background>
        <Footer />
        </>
    )
}
