import React from 'react'
import { Main, StarRatingInBox } from './style'

export default function UserReviews() {
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
