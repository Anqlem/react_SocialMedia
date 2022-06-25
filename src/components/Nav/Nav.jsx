import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const active = ({isActive})=>isActive ? classes.active : classes.item;

function Nav(){
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;