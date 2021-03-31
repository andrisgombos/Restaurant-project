import React from 'react'

import { Main, StarRatingInBox } from '../reviewsByUser/style'

export default function CommentByUser() {
    return (
        <>
            <Main>
            <h1>Comments</h1>
            <span><p>Restaurantname</p><p>Date of comment</p></span>
            <StarRatingInBox />
            <div>Discription</div>
            </Main>
            
        </>
    )
}
