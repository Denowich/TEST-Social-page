import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

export let DialogItem = (props) => {
      let path = './dialog/' + props.id;
      return (
            <div className={style.dialogsItem}>
                  <NavLink to={path}>{props.name}</NavLink>
            </div>
      );
};
