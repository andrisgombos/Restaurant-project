import React from 'react'
import Title from '../../assets/pictures/userFace.JPG'

export default function profilePage() {
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
