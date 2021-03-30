import React from 'react'
import Title from ""
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
                {/* if the Token is stored then render  the self-menu-card, if no token is present re-direct to signUp page*/}
                {/*UserMenuCard */}
                <UserSelfMenuCard  /> 
            </Mainsection>
        </Background>
        <Footer />
        </>
    )
}
