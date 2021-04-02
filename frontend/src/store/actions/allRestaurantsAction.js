export const allRestaurants = (restaurants) => {
    return ({
        type: "ALL_RESTAURANTS",
        payload: restaurants
    })
}