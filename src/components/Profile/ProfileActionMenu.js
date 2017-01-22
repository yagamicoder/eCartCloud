import React, {PropTypes} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import colors from '~/utils/colors';
import validateEditForm from '~/utils/validateEditForm';
import { StyleSheet, css } from 'aphrodite';

const ProfileActionMenu = ({showEditMode, editUserProfile, cancel, editFormData, saveProfile}) => {

  return (
    <div>
      { !showEditMode ? <RaisedButton
        onClick={() => editUserProfile(true)}
        className={css(styles.buttonStyle)}
        backgroundColor={colors.primary2Color}
        title="Edit Profile"
        icon={<FontIcon className={classNames("material-icons", css(styles.iconStyle))}
          color={colors.primary1Color}>edit</FontIcon>}
        /> :
        <div>
          <RaisedButton
            onClick={() => cancel()}
            className={css(styles.buttonStyle)}
            backgroundColor={colors.accent2Color}
            title="Cancel"
            icon={<FontIcon className={classNames("material-icons", css(styles.iconStyle))}
              color={colors.primary1Color}>cancel</FontIcon>}
            />
            <RaisedButton
              onClick={() => saveProfile(editFormData)}
              className={css(styles.buttonStyle)}
              backgroundColor={colors.primary2Color}
              title="Save"
              disabled={!validateEditForm(editFormData)}
              icon={<FontIcon className={classNames("material-icons", css(styles.iconStyle))}
                color={colors.primary1Color}>save</FontIcon>}
              />
        </div>
      }
    </div>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    color: colors.white
  },
  buttonStyle: {
    marginRight: '15px'
  }
});

ProfileActionMenu.propTypes = {
  showEditMode: PropTypes.bool,
  cancel: PropTypes.func,
  editUserProfile: PropTypes.func,
  editFormData: PropTypes.object,
  saveProfile: PropTypes.func
};

export default ProfileActionMenu;
