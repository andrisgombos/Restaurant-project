import React  from 'react'
import {useSelector} from 'react-redux'
import CommentByUser from './commentsByUser'
import UserReviews from './reviewsByUser'
import { Container } from './style'
import UsersRestaurants from './usersRestaurants'



export default function CenterContainer() {

    
     const menuCount = useSelector(state => state.menuCount.pageId);

    return (
        <>
        <Container>
        
            {menuCount === "0" ? <UserReviews /> : null }
            {menuCount === "1" ? <CommentByUser /> : null}
            {menuCount === "2" ? <UsersRestaurants /> : null}
        </Container>    
        </>
    )
}



