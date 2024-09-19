import style from './MessageItem.module.css';

export let MessageItem = (props) => {
      return <div className={style.messagesItem}>{props.message}</div>;
};
