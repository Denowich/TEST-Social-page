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

let dialogs = [
      { id: 1, name: 'Den' },
      { id: 2, name: 'Danya' },
      { id: 3, name: 'Rex' },
      { id: 4, name: 'Vika' },
      { id: 5, name: 'Sashko' },
];

let dialogsElements = dialogs.map((d) => (
      <DialogItem id={d.id} name={d.name} />
));

let MessageItem = (props) => {
      return <div className={style.messagesItem}>{props.message}</div>;
};

let messages = [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Best!' },
      { id: 4, message: 'Fuck!' },
      { id: 5, message: 'Yoo!' },
];

let messagesElements = messages.map((m) => (
      <MessageItem id={m.id} message={m.message} />
));

export const Dialogs = () => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>{dialogsElements}</div>

                  <div className={style.messagesItems}>{messagesElements}</div>
            </div>
      );
};
