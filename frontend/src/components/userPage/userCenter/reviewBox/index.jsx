import React from 'react'
import { Main, StarRatingInBox } from './style'

export default function ReviewBox() {
    return (
        <>
        <Main>
            <span><p>Restaurantname</p><p>Date of review</p></span>
            <StarRatingInBox />
            <div>Review content</div>

        </Main>
            
        </>
    )
}
