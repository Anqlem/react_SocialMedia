const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer =  (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage={
                id: 6,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.inputMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageAction = () => ({type:'ADD-MESSAGE'});
export const updateMessageTextAction = (message) => ({type:'UPDATE-NEW-MESSAGE-TEXT' , inputMessage: message});

export default dialogsReducer;