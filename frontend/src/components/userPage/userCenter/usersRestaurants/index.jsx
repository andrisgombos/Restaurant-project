import React from 'react'
import { Main, StarRatingInBox } from '../reviewsByUser/style'

export default function UsersRestaurants() {
    return (
        <>
          <Main>
            <h1>Restaurants</h1>
            <span><p>Restaurantname</p></span>
            <StarRatingInBox />
            <div>Discription</div>

          </Main>

        </>
    )
}
