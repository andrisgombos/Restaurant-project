import React from 'react'
import Title from '../../assets/pictures/userFace.JPG'
import { Background, TitleImage } from './style'
import UserMenuCard from './UserMenuCard'

export default function ProfilePage() {
    return (
        <>
        <TitleImage>
            <img src={Title} alt="unsername-titleimage"/>
        </TitleImage>
        <Background>
            <UserMenuCard>

            </UserMenuCard>
        </Background>
        </>
    )
}
