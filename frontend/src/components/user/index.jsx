import React from 'react'
import Title from '../../assets/pictures/title.jpg'
import { Mainsection } from '../../globalStyle/globalStyle'
import Footer from '../footer'
import Header from '../header'
import { Background, TitleImage } from './style'
//import UserMenuCard from './UserMenuCard'
import UserSelfMenuCard from './UserSelfMenuCard'
//import UserSelfMenuCard from './UserSelfMenuCard'


export default function ProfilePage() {
    return (
        <>
        <Header />
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <Mainsection>
                {/*<UserMenuCard />*/}
                <UserSelfMenuCard  /> 
            </Mainsection>
        </Background>
        <Footer />
        </>
    )
}
