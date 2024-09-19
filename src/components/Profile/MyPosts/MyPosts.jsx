import { Post } from '../Posts/Post';
import style from './MyPosts.module.css';

export const MyPosts = (props) => {
      let postsElements = props.posts.map((p) => (
            <Post message={p.message} likesCount={p.likesCount} />
      ));

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
                  {postsElements}
            </div>
      );
};
