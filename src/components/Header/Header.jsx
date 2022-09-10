import header from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsAuth, logout } from '../../redux/slices/auth';

function Header(){

  const dispatch = useDispatch();

  const onLogoutClick = () =>{
    dispatch(logout());
  }

  const isAuth = useSelector(selectIsAuth);

    return(
      <header className={header.header}>
        <NavLink to='/profile'><img src='https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png'/></NavLink>
        {isAuth ? (
          <>
            <button onClick={onLogoutClick}>Logout</button>
          </>
          
        ) : (
          <>
            <NavLink to='/login'><button>Login</button></NavLink>
          </>
        )}

        
      </header>
    );
}

export default Header;