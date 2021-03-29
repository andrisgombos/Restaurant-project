import React from 'react'
import StarIcon from '../../../assets/icon/star.svg'
import CommentIcom from '../../../assets/icon/comment.svg'
import RestaurantIcon from '../../../assets/icon/restaurant.svg'
import EditIcon from '../../../assets/icon/edit.svg'


export default function UserMenuCard(props) {
    return (
        <>
        <Card>
            <img src={undefined} alt="User's face"/>
            <h3>UserName's Profile</h3>
            <ButtonInUserCard>
                <img src={StarIcon} alt="reviews left by user"/>
            </ButtonInUserCard>
            <ButtonInUserCard>
                <img src={CommentIcom} alt="comments by user"/>
            </ButtonInUserCard>
            <ButtonInUserCard>
                <img src={RestaurantIcon} alt="users favourite restaurants"/>
            </ButtonInUserCard>
            <ButtonInUserCard>
                <img src={EditIcon} alt="Edit profile"/>
            </ButtonInUserCard>
        </Card>
        </>
    )
}
