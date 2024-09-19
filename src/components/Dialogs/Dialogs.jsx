import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { MessageItem } from './MessageItem/MessageItem';

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
