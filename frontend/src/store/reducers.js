

const initialState = {
    token: '',
    email: '',
    count:"",
}

const lunaReducer = (state = initialState, action) => {
    switch (action.type){
        case 'REGISTER':
            //functionality
            const newState = {...state};
            newState.email = action.payload
            return newState;
        case 'MENUCOUNTER':
            return {...state,count:action.payload}
            
            
        default:
            return state;
        
    }
}




export default lunaReducer;