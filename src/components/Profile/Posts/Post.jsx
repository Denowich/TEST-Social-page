import style from './Post.module.css';

export const Post = (props) => {
      return (
            <div className={style.posts}>
                  <div className={style.postItem}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKIWuHnXWNA-Ctp4wvgsvBKBVXP-SCHtHgQ&s' />
                        {props.message}
                        <h4>likes: {props.likesCount}</h4>
                  </div>
            </div>
      );
};
