import React , from 'react'
import CommentByUser from './commentsByUser'
// import EditProfile from './editUser'
import UserReviews from './reviewsByUser'
import { Container } from './style'
import UsersRestaurants from './usersRestaurants'








export default function CenterContainer() {

    
        
    
       



    return (
        <>
        <Container>
        {/* depending on which user card button is clicked, render a component here --> change profile, view Reviews,comments restaurants*/}
            {/* {count === 0 ? <UserReviews /> : null }
            {count === 1 ? <CommentByUser /> : null}
            {count === 2 ? <UsersRestaurants /> : null} */}
        </Container>    
        </>
    )
}



