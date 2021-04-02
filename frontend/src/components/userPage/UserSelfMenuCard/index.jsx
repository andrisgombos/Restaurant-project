import React from 'react'
import StarIcon from '../../../assets/icon/star.svg'
import CommentIcom from '../../../assets/icon/comment.svg'
import RestaurantIcon from '../../../assets/icon/restaurant.svg'
import EditIcon from '../../../assets/icon/edit.svg'
import { Card } from '../style'
import UserFace from '../../../assets/pictures/userFace2.JPG'
import { useDispatch } from 'react-redux'


export default function UserSelfMenuCard(props) {
    const dispatch = useDispatch();

    const menuHandler = value => {
        // debugger
        dispatch({type:"MENUCOUNTER",payload: value})
  };

    return (
        <>
            <Card>
                <img src={props.userProfile.profile_picture} alt="User's face"/>
                <div><p>{props.userProfile.first_name}'s profile</p></div>
                <button
                    onClick={()=>menuHandler("0")}
                ><img src={StarIcon} alt="reviews left by user"/><p>Reviews</p></button>
                <button
                    onClick={()=>menuHandler("1")}
                ><img src={CommentIcom} alt="comments by user"/><p>Comments</p></button>
                <button
                    onClick={()=>menuHandler("2")}
                ><img src={RestaurantIcon} alt="users favourite restaurants"/><p>Restaurants</p></button>
                <button
                    onClick={()=>menuHandler("3")}
                ><img src={EditIcon} alt="Edit profile"/><p>Edit</p></button>
                
            </Card>
        </>
    )
}
