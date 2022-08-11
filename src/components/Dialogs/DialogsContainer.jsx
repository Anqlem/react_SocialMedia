import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { addMessageAction, updateMessageTextAction } from '../../redux/dialogs-reducer';

let mapStateToProps=(state)=>{
    return{
        messagePageData: state.messagesPage
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        newMessage:()=>{
            dispatch(addMessageAction());
        },
        updateMessageText:(message)=>{
            dispatch(updateMessageTextAction(message));
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;