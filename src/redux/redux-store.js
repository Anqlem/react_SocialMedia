import {legacy_createStore as createStore,combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer'
let reducers = combineReducers({
    messagesPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer

});

let store = createStore(reducers);

export default store;