import React ,{useState} from 'react'
import StarIcon from '../../../assets/icon/star.svg'
import CommentIcom from '../../../assets/icon/comment.svg'
import RestaurantIcon from '../../../assets/icon/restaurant.svg'
import {  Card } from '../style'
import UserFace from '../../../assets/pictures/userFace2.JPG'

export default function UserMenuCard(props) {

    const [count, setCount] = useState("0");
    
    console.log(count);
    return (
        <>
            <Card>
                <img src={UserFace} alt="User's face"/>
                <div><p>UserName's Profile</p></div> 
                <button
                    onClick={()=>setCount("0")}
                ><img src={StarIcon} alt="reviews left by user"/><p>Reviews</p></button>
                <button
                    onClick={()=>setCount("1")}
                ><img src={CommentIcom} alt="comments by user"/><p>Comments</p></button>
                <button
                    onClick={()=>setCount("2")}
                ><img src={RestaurantIcon} alt="users favourite restaurants"/><p>Restaurants</p></button>
            </Card>
        </>
    )
}