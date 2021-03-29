import React from 'react'
import Title from '../../assets/pictures/title.jpg'
import { Mainsection } from '../../globalStyle/globalStyle'
import { Background, TitleImage } from './style'
import UserMenuCard from './UserMenuCard'
//import UserSelfMenuCard from './UserSelfMenuCard'


export default function ProfilePage() {
    return (
        <>
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <Mainsection>
                <UserMenuCard />
                {/*<UserSelfMenuCard  /> */}
            </Mainsection>
        </Background>
        </>
    )
}
