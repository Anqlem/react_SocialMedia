import header from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
      <header className={header.header}>
        <NavLink to='/profile'><img src='https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png'/></NavLink>
      </header>
    );
}

export default Header;