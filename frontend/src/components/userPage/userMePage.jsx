import Title from '../../assets/pictures/title.jpg'
import { Background } from '../../globalStyle/globalStyle'
import Footer from '../footer'
import Header from '../header'
import { TitleImage, Mainsection } from './style'
import CenterContainer from './userCenter'
import UserSelfMenuCard from './UserSelfMenuCard'
import AboutUser from "./aboutUser";
import React, { useState, useEffect } from 'react';



export default function MyProfilePage() {
    const [up, setUp] = useState({}) 
    useEffect(() => {


        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        
        fetch("https://luna-taurus.propulsion-learn.ch/backend/api/userprofiles/me/", config)
        .then(res => res.json())
        .then(data => setUp(data))

    }, []);
    
    console.log(up)
         

    return (
        <>
        <Header />
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <Mainsection>
                {/* next component holds the menu and the picture */}
                <UserSelfMenuCard userProfile={up} /> 
                {/* next component holds whatever is rendered by the menuselection -- reviews sorted by date is default */}
                 
                <CenterContainer userProfile={up} />
                <AboutUser userProfile={up} />
            </Mainsection>
        </Background>
        <Footer />
        </>
    )
}
