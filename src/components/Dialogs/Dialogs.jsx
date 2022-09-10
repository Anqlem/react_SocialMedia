import React from 'react';
import dia from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import { fetchMessageData, sendMessage } from '../../redux/slices/messages';

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

const Message = (props)=>{
    return(
        <div className={props.className}>
            <text>{props.text}</text>
        </div>
)}



function Dialogs(props){
    const {auth} = useSelector((state)=> state);
    const {messages} = useSelector((state)=> state.messages);    

    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(fetchMessageData());
    }, [])

    let newMessageElement = React.createRef();

    const onNewMessage = (values) =>{
        dispatch(sendMessage(values));
        console.log(values)
    }
    // let isMessageMe = (msg, messageElements)=>{
    //     messages.items.forEach(item =>{
    //         msg = [item];
    //         messageElements = msg.map(m => <Message text={m.text} className={auth.data._id === m.userID ? (dia.messageMe) : (dia.messageYou)}/>)
    //         console.log(messageElements)
    //     })
    // }
    

    const{register ,handleSubmit, setError, formState:{ errors, isValid }} = useForm({
        defaultValues:{
            text:''
        }
    });
    
    let dialogElements = props.messagePageData.dialogs.map (d => <DialogItem name={d.name} key={d.id} id={d.id} src={d.pic}/>);
    
    
    var messageElement = [];
    messages.items.forEach(item => {
        messageElement.push(<Message text={item.text} className={auth.data._id === item.userID ? (dia.messageMe) : (dia.messageYou)}/>)
    })

    return(
        <div className={dia.dialogs}>
                <div className={dia.dialogsItems}>
                    { dialogElements }
                </div>
                <div className={dia.messages}>
                    {messageElement}
                    <form onSubmit={handleSubmit(onNewMessage)}>
                        <div className={dia.msgInput}>
                            <textarea className={dia.textInput} {...register('text', {required:'Напишите сообщение'})} placeholder='Write a message...'></textarea>
                            <span className={dia.iconButton} type="submit" ><img src='https://www.svgrepo.com/show/71915/paper-plane.svg' height='24px' width='24px' alt='poop'></img></span>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}


export default Dialogs;