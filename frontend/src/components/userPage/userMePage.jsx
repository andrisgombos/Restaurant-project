import React from 'react'
import Title from '../../assets/pictures/title.jpg'
import { Background } from '../../globalStyle/globalStyle'
import Footer from '../footer'
import Header from '../header'
import { TitleImage, Mainsection } from './style'
import CenterContainer from './userCenter'
import UserSelfMenuCard from './UserSelfMenuCard'
import AboutUser from "./aboutUser";


export default function MyProfilePage() {
    return (
        <>
        <Header />
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <Mainsection>
                {/* next component holds the menu and the picture */}
                <UserSelfMenuCard  /> 
                {/* next component holds whatever is rendered by the menuselection -- reviews sorted by date is default */}
                 
                <CenterContainer />
                <AboutUser />
            </Mainsection>
        </Background>
        <Footer />
        </>
    )
}
