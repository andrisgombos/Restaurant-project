import React from 'react'
import StarIcon from '../../../assets/icon/star.svg'
import CommentIcom from '../../../assets/icon/comment.svg'
import RestaurantIcon from '../../../assets/icon/restaurant.svg'
import {  Card } from './style'
import UserFace from '../../../assets/pictures/userFace2.JPG'

export default function UserMenuCard(props) {
    return (
        <>
            <Card>
                <img src={UserFace} alt="User's face"/>
                <div><p>UserName's Profile</p></div> 
                <button><img src={StarIcon} alt="reviews left by user"/><p>Reviews</p></button>
                <button><img src={CommentIcom} alt="comments by user"/><p>Comments</p></button>
                <button><img src={RestaurantIcon} alt="users favourite restaurants"/><p>Restaurants</p></button>
            </Card>
        </>
    )
}
