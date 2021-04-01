import { combineReducers } from 'redux';



const initialState = {
    token: '',
    email: '',
    count:"",
    userMe:[],
    allUsers: [],
}

const lunaReducer = (state = initialState, action) => {
    switch (action.type){
        case 'REGISTER':
            //functionality
            const newState = {...state};
            newState.email = action.payload
            return newState;
        default:
            return state;
        
    }
}

const allUsersReducer = (state= initialState, action) => {
    if(action.type === 'LIST_USERS'){
        return {...state, allUsers: action.payload}
    }
    return state
}


export const rootReducer = combineReducers({
    lunaReducer,
    allUsersReducer,
});


