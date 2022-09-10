import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer'
import { authReducer } from './slices/auth';
import { configureStore } from '@reduxjs/toolkit';
import { messagesReducer } from './slices/messages';

const store = configureStore({
    reducer:{
        messagesPage: dialogsReducer,
        profilePage: profileReducer,
        usersPage: usersReducer,
        auth: authReducer,
        messages: messagesReducer
    }
});

export default store;