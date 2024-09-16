import { Post } from '../Posts/Post';
import style from './MyPosts.module.css';

export const MyPosts = () => {
      let posts = [
            { id: 1, message: 'Hello!', likesCount: '10' },
            { id: 2, message: "It's my first post!", likesCount: '11' },
            { id: 3, message: 'Welcome!', likesCount: '5' },
            { id: 4, message: 'Blaa Bla', likesCount: '6' },
            { id: 5, message: 'WTF?', likesCount: '9' },
      ];

      let postsElements = posts.map((p) => (
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
