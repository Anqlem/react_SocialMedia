import React from 'react';
import dia from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const active = ({isActive})=>isActive ? dia.active : dia.dialog;



function DialogItem(props){
    return(
        <NavLink to={'./' + props.id} className={active}>
            <div className={dia.user}>
                <img className={dia.pic} src={props.src}/>
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
    
    let dialogElements = props.messagePageData.dialogs.map (d => <DialogItem name={d.name} id={d.id} src={d.pic}/>)
    let messageElements = props.messagePageData.messages.map (m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let newMessage=()=>{
        props.dispatch({type:'ADD-MESSAGE'});
    }

    let updateMessageText=()=>{
        let message=newMessageElement.current.value;
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT' , inputMessage: message});
    }
    
    return(
        <div className={dia.dialogs}>
            <div className={dia.dialogsItems}>
                { dialogElements }
            </div>
            <div className={dia.messages}>
                { messageElements }
                <div className={dia.msgInput}>
                    <textarea className={dia.textInput} onChange={updateMessageText} value={props.messagePageData.newMessageText} ref={newMessageElement} placeholder='Write a message...'></textarea>
                    <span className={dia.iconButton} onClick={newMessage}><img src='https://www.svgrepo.com/show/71915/paper-plane.svg' height='24px' width='24px'></img></span>
                </div>
            </div>
            
        </div> 
    );
}

export default Dialogs;