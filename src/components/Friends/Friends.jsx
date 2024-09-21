import { Side } from './Side/Side';

export const Friends = (props) => {
      return (
            <div>
                  <div>
                        <Side friends={props.state.friends} />
                  </div>
            </div>
      );
};
