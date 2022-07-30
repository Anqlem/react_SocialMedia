import React from 'react';
import Dialogs from './Dialogs';
import { addMessageAction, updateMessageTextAction } from '../../redux/dialogs-reducer';

function DialogsContainer(props){
    let state = props.store.getState().messagesPage;

    let newMessage=()=>{
        props.store.dispatch(addMessageAction());
    }

    let updateMessageText=(message)=>{
        props.store.dispatch(updateMessageTextAction(message));
    }
    
    return(
        <Dialogs newMessage={newMessage} updateMessageText={updateMessageText} messagePageData={state} />
    );
}

export default DialogsContainer;