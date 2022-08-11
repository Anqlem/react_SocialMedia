import React from 'react';
import dia from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const active = ({isActive})=>isActive ? dia.active : dia.dialog;

function DialogItem(props){
    return(
        <NavLink to={'./' + props.id} className={active}>
            <div className={dia.user}>
                <img className={dia.pic} src={props.src} alt='poop'/>
                {props.name}
            </div>
        </NavLink>
    )
}

function Message(props){
    return(
        <div className={dia.message}>
            <text>{props.message}</text>
        </div>
    )
}


function Dialogs(props){
debugger
    let dialogElements = props.messagePageData.dialogs.map (d => <DialogItem name={d.name} key={d.id} id={d.id} src={d.pic}/>)
    let messageElements = props.messagePageData.messages.map (m => <Message message={m.message} key={m.id} />)

    let newMessageElement = React.createRef();

    let onNewMessage=()=>{
        props.newMessage();
    }

    let onUpdateMessageText=()=>{
        let message=newMessageElement.current.value;
        props.updateMessageText(message);
    }
    
    return(
        <div className={dia.dialogs}>
            <div className={dia.dialogsItems}>
                { dialogElements }
            </div>
            <div className={dia.messages}>
                { messageElements }
                <div className={dia.msgInput}>
                    <textarea className={dia.textInput} onChange={onUpdateMessageText} value={props.messagePageData.newMessageText} ref={newMessageElement} placeholder='Write a message...'></textarea>
                    <span className={dia.iconButton} onClick={onNewMessage}><img src='https://www.svgrepo.com/show/71915/paper-plane.svg' height='24px' width='24px' alt='poop'></img></span>
                </div>
            </div>
            
        </div> 
    );
}

export default Dialogs;