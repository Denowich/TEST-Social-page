import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

export const NavBar = () => {
      return (
            <div className={style.navBar}>
                  <div className={style.navBarItem}>
                        <NavLink to='./profile'>Profile</NavLink>
                  </div>
                  <div className={style.navBarItem}>
                        <NavLink to='./dialogs'>Messages</NavLink>
                  </div>
                  <div className={style.navBarItem}>
                        <NavLink to='./news'>News</NavLink>
                  </div>
                  <div className={style.navBarItem}>
                        <NavLink to='./music'>Music</NavLink>
                  </div>
                  <div className={style.navBarItem}>
                        <NavLink to='./settings'>Settings</NavLink>
                  </div>
            </div>
      );
};
