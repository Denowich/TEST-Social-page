import { Sfr } from '../Sfr/Sfr';

export const Side = (props) => {
      let friendsElements = props.friends.map((f) => (
            <Sfr id={f.id} name={f.name} />
      ));

      return <div>{friendsElements}</div>;
};
