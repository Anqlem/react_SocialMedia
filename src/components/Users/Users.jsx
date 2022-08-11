import React from "react";
import usr from './Users.module.css';

let Users = (props) =>{
    return <div>{
            props.usersPageData.users.map(u=> <div key={u.id}>
                <div className={usr.user}>
                <img className={usr.pic} src={u.pic} alt='poop'/>
                {u.fullname}''''
                {u.status}''''
                ''''
                {u.location.city}''''
                {u.location.country}
                {u.followed ? 
                <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
            </div>
            )
        }
    </div>
}

export default Users;