import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

let DialogItem = (props) => {
      let path = './dialog/' + props.id;
      return (
            <div className={style.dialogsItem}>
                  <NavLink to={path}>{props.name}</NavLink>
            </div>
      );
};

let MessageItem = (props) => {
      return <div className={style.messagesItem}>{props.message}</div>;
};

export const Dialogs = (props) => {
      let dialogsElements = props.dialogs.map((d) => (
            <DialogItem id={d.id} name={d.name} />
      ));

      let messagesElements = props.messages.map((m) => (
            <MessageItem id={m.id} message={m.message} />
      ));

      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>{dialogsElements}</div>

                  <div className={style.messagesItems}>{messagesElements}</div>
            </div>
      );
};
