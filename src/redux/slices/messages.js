import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios.js'

export const fetchMessageData = createAsyncThunk('messages/fetchMessageData', async(params)=>{
    const {data} = await axios.get('/messages', params);
    return data;
})

export const sendMessage = createAsyncThunk('messages/sendMessage', async(params)=>{
    const {} = await axios.post('/messages', params);
    const {data} = await axios.get('/messages', params);
    return data;
})

const initialState = {
    messages:{
        items:[],
    },
    
};

const messagesSlice = createSlice({
    name: 'messagesData',
    initialState,
    extraReducers:{
        [fetchMessageData.pending]:(state) =>{
            state.status = 'Loading'
            state.messages.items = [];
        },
        [fetchMessageData.fulfilled]:(state, action) =>{
            state.status = 'Loaded'
            state.messages.items = action.payload;
        },
        [fetchMessageData.error]:(state) =>{
            state.status = 'Error'
            state.messages.items = [];
        },
        [sendMessage.pending]:(state) =>{
            state.status = 'Loading'
            state.messages.items = [];
        },
        [sendMessage.fulfilled]:(state, action) =>{
            state.status = 'Loaded'
            state.messages.items = action.payload;
        },
        [sendMessage.error]:(state) =>{
            state.status = 'Error'
            state.messages.items = [];
        },
    }
})


export const messagesReducer = messagesSlice.reducer;