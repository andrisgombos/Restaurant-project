import React from 'react'
import CommentByUser from './commentsByUser'
// import EditProfile from './editUser'
//import UserReviews from './reviewsByUser'
import { Container } from './style'
import UsersRestaurants from './usersRestaurants'

export default function CenterContainer() {
    return (
        <>
        <Container>
        {/* depending on which user card button is clicked, render a component here --> change profile, view Reviews,comments restaurants*/}
            {/* <EditProfile /> */}
            {/* <UserReviews /> */}
            {/* <UsersRestaurants /> */}
        <CommentByUser />
        </Container>    
        </>
    )
}
