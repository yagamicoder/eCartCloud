import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { DisplayProfile, EditProfile, ProfileActionMenu } from '~/components/Profile';
import { editUserProfile, cancelEditProfile, saveProfile } from '~/reducers/user';

export class ProfileView extends Component {
  static propTypes = {
      user: PropTypes.object,
      showEditMode: PropTypes.bool,
      editUserProfile: PropTypes.func,
      cancelEditProfile: PropTypes.func,
      editFormData: PropTypes.object,
      saveProfile: PropTypes.func,
      savingProfile: PropTypes.bool
  };

  render() {
    const { user, showEditMode, editUserProfile, cancelEditProfile, editFormData, saveProfile, savingProfile } = this.props;
      return (
        <div>
          {!savingProfile ?
            <ProfileActionMenu
            showEditMode={showEditMode}
            editUserProfile={editUserProfile}
            cancel={cancelEditProfile}
            editFormData={editFormData}
            saveProfile={saveProfile}
            /> : null }
          {showEditMode ? <EditProfile /> : <DisplayProfile user={user} /> }
        </div>
      );
    }
}

const actions = {
  editUserProfile,
  cancelEditProfile,
  saveProfile
};

const mapStateToProps = (state) => {
  const user = fromJS(state).getIn(['user', 'entities'], fromJS({}));
  const showEditMode = fromJS(state).getIn(['user', 'showEditMode'], false);
  const savingProfile = fromJS(state).getIn(['user', 'savingProfile'], false);
  const editFormData = fromJS(state).getIn(['user', 'editFormData'], fromJS({}));

  return {
      user: user,
      showEditMode: showEditMode,
      editFormData: editFormData,
      savingProfile: savingProfile
  };
};


export default connect(mapStateToProps, actions)(ProfileView);
