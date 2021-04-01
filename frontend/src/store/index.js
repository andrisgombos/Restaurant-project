import {createStore, applyMiddleware} from 'redux';
//import lunaReducer from './reducers';
import { rootReducer } from './reducers';
import  thunk  from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



// const store = createStore(lunaReducer);


export default store;