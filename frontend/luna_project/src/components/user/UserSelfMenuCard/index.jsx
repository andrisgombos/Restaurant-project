import React from 'react'
import StarIcon from '../../../assets/icon/star.svg'
import CommentIcom from '../../../assets/icon/comment.svg'
import RestaurantIcon from '../../../assets/icon/restaurant.svg'
import EditIcon from '../../../assets/icon/edit.svg'
import { Card, ImageField, NameField } from './style'


export default function UserSelfMenuCard(props) {
    return (
        <>
            <Card>
                <ImageField>
                <img src={undefined} alt="User's face"/>
                </ImageField>
                <NameField>
                <h3>UserName's Profile</h3>
                </NameField>
                <button><img src={StarIcon} alt="reviews left by user"/></button>
                <button><img src={CommentIcom} alt="comments by user"/></button>
                <button><img src={RestaurantIcon} alt="users favourite restaurants"/></button>
                <button><img src={EditIcon} alt="Edit profile"/></button>
                
            </Card>
        </>
    )
}
