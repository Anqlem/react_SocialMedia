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
    
    return(
        <div className={dia.dialogs}>
            <div className={dia.dialogsItems}>
                { dialogElements }
            </div>
            <div className={dia.messages}>
                { messageElements }
            </div>
        </div> 
    );
}

export default Dialogs;