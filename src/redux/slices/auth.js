import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios.js'

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async(params)=>{
    const {data} = await axios.post('/auth/login', params);
    return data;
})
export const fetchUserMe = createAsyncThunk('auth/fetchUserMe', async()=>{
    const {data} = await axios.get('/auth/me', );
    return data;
})

const initialState = {
    data: null,
    status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.data= null
        }
    },
    extraReducers:{
        [fetchUserData.pending]:(state) =>{
            state.status = 'Loading'
            state.data = null;
        },
        [fetchUserData.fulfilled]:(state, action) =>{
            state.status = 'Loaded'
            state.data = action.payload;
        },
        [fetchUserData.error]:(state) =>{
            state.status = 'Error'
            state.data = null;
        },
        [fetchUserMe.pending]:(state) =>{
        state.status = 'Loading'
            state.data = null;
        },
        [fetchUserMe.fulfilled]:(state, action) =>{
            state.status = 'Loaded'
            state.data = action.payload;
        },
        [fetchUserMe.error]:(state) =>{
            state.status = 'Error'
            state.data = null;
        },
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data)

export const {logout} = authSlice.actions; 

export const authReducer = authSlice.reducer;