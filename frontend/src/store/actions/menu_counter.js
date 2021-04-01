export const menuCountAction = (count) =>{
    return ({
        type:"MENUCOUNTER",
        payload: count
    })
}
dispatch(menuCountAction)