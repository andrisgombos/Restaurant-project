import React from 'react'
import Title from '../../assets/pictures/title.jpg'
import { Background } from '../../globalStyle/globalStyle'
import Footer from '../footer'
import Header from '../header'
import { TitleImage, Mainsection } from './style'
import CenterContainer from './userCenter'
import UserSelfMenuCard from './UserSelfMenuCard'
import { AboutUserContainer } from './aboutUser/style'


export default function MyProfilePage() {
    return (
        <>
        <Header />
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <Mainsection>
                <UserSelfMenuCard  /> 
                <CenterContainer />
                <AboutUserContainer />
            </Mainsection>
        </Background>
        <Footer />
        </>
    )
}
