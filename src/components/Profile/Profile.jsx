import { MyPosts } from './MyPosts/MyPosts';
import style from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
      return (
            <div className={style.profile}>
                  <ProfileInfo />
                  <MyPosts posts={props.posts} />
            </div>
      );
};
