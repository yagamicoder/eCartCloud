import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { DisplayProfile } from '~/components/Profile';

export class ProfileView extends Component {
  static propTypes = {
      user: PropTypes.object
  };

  render() {
    const { user } = this.props;
      return (
        <div>
          <DisplayProfile user={user} />
        </div>
      );
    }
}

const actions = {
};

const mapStateToProps = (state) => {
  const user = fromJS(state).getIn(['user', 'entities'], fromJS({}));
  return {
      user: user
  };
};


export default connect(mapStateToProps, actions)(ProfileView);
