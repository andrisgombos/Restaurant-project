import { combineReducers } from 'redux';



const initialState = {
    token: '',
    email: '',
    userMe:[],
    allUsers: [],
    userId: 0,
    allRestaurants: {},
}

// const lunaReducer = (state = initialState, action) => {
//     switch (action.type){
//         case 'REGISTER':
//             //functionality
//             const newState = {...state};
//             newState.email = action.payload
//             return newState;
//         default:
//             return state;
//     }
// }

const menuCount = (state= {pageId:"0"}, action) => {
    if(action.type === 'MENUCOUNTER'){
        return {...state, pageId: action.payload}
    }
    return state
}

const allRestaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_RESTAURANTS':
            const newState = {...state};
            newState.allRestaurants = action.payload;
            return newState;
            break;
        default: 
            return state
    }
}


const allUsersReducer = (state= initialState, action) => {
    if(action.type === 'LIST_USERS'){
        return {...state, allUsers: action.payload}
    }
    return state
}

const getLoggedInUser = (state= initialState, action) => {
    if(action.type === 'LOOGED_IN_USER'){
        return {...state, userMe: action.payload}
    }
    return state
}

const deleteUserAction = (state= initialState, action) => {
    if(action.type === 'DELETE_USER'){
        return {...state, userMe: action.payload}
    }
    return state
}

export const rootReducer = combineReducers({
    // lunaReducer,
    allUsersReducer,
    getLoggedInUser,
    deleteUserAction,
    menuCount,
    allRestaurantsReducer,
});


