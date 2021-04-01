import React from 'react'
import { Main, StarRatingInBox } from './style'
import { useSelector, useDispatch } from 'react-redux';



export default function UserReviews() {

    // const users = useSelector(state => state.usersReducer.users);
    // console.log('users from UserCard:', users);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(listUsersAction());
    // }, [])



    return (
        <>
        <Main>
            <h1>Reviews</h1>
            <span><p>Restaurantname</p><p>Date of review</p></span>
            <StarRatingInBox />
            <div>Review content</div>
        </Main>
        </>
    )
}
