import style from './ProfileInfo.module.css';

export const ProfileInfo = () => {
      return (
            <div className={style.profileInfo}>
                  <div>
                        <img src='http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTDcq0TWUtd2uVXrxRt_7QHm0aSui_UKedn5Vku3goma99ZOQGxc6pUPhDyhJ7dsKRuLlVTFmbywvLLptrOBbw' />
                  </div>
                  <div className={style.descriptionBlock}>
                        ava + description
                  </div>
            </div>
      );
};
