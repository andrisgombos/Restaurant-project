

const initialState = {
    token: '',
    email: ''
}

const lunaReducer = (state = initialState, action) => {
    switch (action.type){
        case 'REGISTER':
            //functionality
            const newState = {...state};
            newState.email = action.payload
            return newState;
            break;
        default:
            return state;
    }
}




export default lunaReducer;