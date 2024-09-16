import { Post } from '../Posts/Post';
import style from './MyPosts.module.css';

export const MyPosts = () => {
      return (
            <div className={style.myPosts}>
                  <h3>My Posts</h3>
                  <div className={style.myPostsItem}>
                        <div>
                              <textarea placeholder='Enter your text...' />
                        </div>
                        <div>
                              <button className={style.button}>Add post</button>
                        </div>
                  </div>
                  <Post message='Hello!' likesCount='10' />
                  <Post message="It's my first post!" likesCount='15' />
            </div>
      );
};
