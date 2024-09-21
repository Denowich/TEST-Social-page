import style from './Sfr.module.css';

export const Sfr = (props) => {
      return (
            <div>
                  <div className={style.sfr}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOpJBlgmVhpUUkSh5IH_LfOD-u5cE3aR-OQ&s' />
                        {props.id}
                        {props.name}
                  </div>
            </div>
      );
};
