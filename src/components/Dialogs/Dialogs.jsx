import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

export const Dialogs = () => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>
                        <div className={style.dialogsItem}>
                              <NavLink to='./dialog/1'>Den</NavLink>
                        </div>
                        <div className={style.dialogsItem}>
                              <NavLink to='./dialog/2'>Danya</NavLink>
                        </div>
                        <div className={style.dialogsItem}>
                              <NavLink to='./dialog/3'>Rex</NavLink>
                        </div>
                        <div className={style.dialogsItem}>
                              <NavLink to='./dialog/4'>Vika</NavLink>
                        </div>
                        <div className={style.dialogsItem}>
                              <NavLink to='./dialog/5'>Sashko</NavLink>
                        </div>
                  </div>

                  <div className={style.messagesItems}>
                        <div className={style.messagesItem}>Hi!</div>
                        <div className={style.messagesItem}>How are you?</div>
                        <div className={style.messagesItem}>Beat!</div>
                        <div className={style.messagesItem}>Yoo!</div>
                        <div className={style.messagesItem}>Fuck!'</div>
                  </div>
            </div>
      );
};
