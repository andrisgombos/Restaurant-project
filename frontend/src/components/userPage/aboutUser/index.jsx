import React from 'react'
import {AboutUserContainer, InfoField} from './style'

export default function AboutUser() {
    return (
        <>
        <AboutUserContainer>
            {/*there will be individual elements in here containing the result of the fetch */}
            <p>About username</p>
            <text>Location</text>
            <InfoField>fetched location</InfoField>
            <text>Luna member since</text>
            <InfoField>fetched Date of -create profile-</InfoField>
            <text>Things I love</text>
            <InfoField>fetched information</InfoField>
            <text>Description</text>
            <InfoField>fetched discription</InfoField>
        </AboutUserContainer>
            
        </>
    )
}
