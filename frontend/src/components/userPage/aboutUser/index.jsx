import React from 'react'
import {AboutUserContainer, InfoField} from './style'



export default function AboutUser(props) {

    // const dateJoined = d => 

    

    return (
        <>
        <AboutUserContainer>
            {/* there will be individual elements in here containing the result of the fetch */}
            <p> About {props.userProfile.first_name}</p>
            <text>Location</text>
            <InfoField>{props.userProfile.location}</InfoField>
            <text>Luna member since</text>
            <InfoField>{props.userProfile.joined_date}</InfoField>
            <text>Things I love</text>
            <InfoField>{props.userProfile.things_i_love}</InfoField>
            <text>Description</text>
            <InfoField>{props.userProfile.description}</InfoField>
        </AboutUserContainer>
            
        </>
    )
}
