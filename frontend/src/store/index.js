import {createStore} from 'redux';
import lunaReducer from './reducers';





const store = createStore(lunaReducer);


export default store;