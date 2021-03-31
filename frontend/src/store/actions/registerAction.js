const registerAction = (email) =>{
    return ({
        type:"REGISTER",
        payload: email
    })
}
export default registerAction