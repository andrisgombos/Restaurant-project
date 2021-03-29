import React from 'react'
import StarIcon from '../../../assets/icon/star.svg'
import CommentIcom from '../../../assets/icon/comment.svg'
import RestaurantIcon from '../../../assets/icon/restaurant.svg'
import EditIcon from '../../../assets/icon/edit.svg'
import { Card } from './style'
import UserFace from '../../../assets/pictures/userFace.JPG'

export default function UserSelfMenuCard(props) {
    return (
        <>
            <Card>
                <img src={UserFace} alt="User's face"/>
                <p><h3>UserName's Profile</h3></p>
                <button><img src={StarIcon} alt="reviews left by user"/></button>
                <button><img src={CommentIcom} alt="comments by user"/></button>
                <button><img src={RestaurantIcon} alt="users favourite restaurants"/></button>
                <button><img src={EditIcon} alt="Edit profile"/></button>
                
            </Card>
        </>
    )
}
