import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { editUserProfile, setEditFormData } from '~/reducers/user';
import {StyleSheet, css} from 'aphrodite';
import classNames from 'classNames';
import { debounce } from 'lodash';
import Avatar from 'material-ui/Avatar';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import serialize from 'form-serialize';
import TextField from 'material-ui/TextField';
import { SavingProfile } from '~/components/Profile';

export class EditProfile extends Component {
  static propTypes = {
      user: PropTypes.object,
      setEditFormData: PropTypes.func,
      savingProfile: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.handleUpdateFormData = this.handleUpdateFormData.bind(this);
  }

  handleUpdateFormData = debounce((setEditFormData, formData) => {
      setEditFormData(formData);
  }, 50)

  render() {
    const { user, setEditFormData, savingProfile } = this.props;
      return (
        <form id="editProfile" action="javascript:void(0);"
          onChange={() => {
						const form = document.querySelector('#editProfile');
						this.handleUpdateFormData(setEditFormData, serialize(form, {hash: true}));
					}}>
          <div className={css(styles.displayProfile)}>
            <h1 className={css(styles.heading)}>
              <FontIcon className={classNames("material-icons", css(styles.iconHeaderStyle))}
                color={colors.primary1Color}>edit</FontIcon>
              Edit Your Profile
            </h1>
            {savingProfile ? <SavingProfile />
            : <div>
                <div className={css(styles.profileContent)}>
                  <div className={css(styles.profileCol)}>
                    <Avatar src={user.getIn(['picture', 'data', 'url'])}
                      size={300} style={{margin: '0 auto', 'display': 'block'}} />
                  </div>
                  <div style={{paddingTop: '50px'}} className={css(styles.profileCol)}>
                    <h4 className={css(styles.info)}>
                      <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
                        color={colors.primary1Color}>person_pin</FontIcon>
                      <TextField
              					name="first_name"
                        hintText="Please enter your first name"
                        defaultValue={user.get('first_name')}
              				/>
                    </h4>
                    <h4 className={css(styles.info)}>
                      <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
                        color={colors.primary1Color}>person_pin</FontIcon>
                      <TextField
              					name="last_name"
                        hintText="Please enter a last name"
                        defaultValue={user.get('last_name')}
              				/>
                    </h4>
                    <h4 className={css(styles.info)}>
                      <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
                        color={colors.primary1Color}>email</FontIcon>
                      <TextField
              					name="email"
                        hintText="What is your email?"
                        defaultValue={user.get('email')}
              				/>
                    </h4>
                    <h4 className={css(styles.info)}>
                      <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
                        color={colors.primary1Color}>location_on</FontIcon>
                      <TextField
              					name="location"
                        hintText="Where do you live?"
                        defaultValue={user.get('location', 'Naperville, Illinois')}
              				/>
                    </h4>
                  </div>
                </div>
                <div className={css(styles.bio)}>
                  <hr />
                  <h2 className={css(styles.bioHeader)}>Short Bio</h2>
                    <TextField
                      name="bio"
                      multiLine={true}
                      fullWidth={true}
                      hintText="Say something about yourself!"
                      maxLength={500}
                      defaultValue={user.get('bio', 'Some bio about you...')}
                    />
                </div>
            </div>
          }
          </div>
        </form>
      );
    }
}
const styles = StyleSheet.create({
  bio: {
    padding: '10px 0'
  },
  bioHeader: {
    textAlign: 'center',
    color: colors.accent2Color,
    fontSize: '2em'
  },
  bioText: {
    fontSize: '1.2em'
  },
  info: {
    color: colors.primary1Color,
    padding: '7px 0'
  },
  infoIcon: {
    paddingRight: '15px',
    fontSize: '1.5em',
    verticalAlign: 'middle'
  },
  displayProfile: {
    padding: '30px 0',
    position: 'relative'
  },
  heading: {
    textAlign: 'center',
    color: colors.primary1Color,
    fontSize: '2em'
  },
  iconHeaderStyle: {
    paddingRight: '10px',
    fontSize: '1.5em',
    verticalAlign: 'middle'
  },
  profileContent: {
    display: 'flex',
    padding: '40px 0',
    maxWidth: '800px',
    margin: '0 auto'
  },
  profileCol: {
    flex: 2
  }
});

const actions = {
  editUserProfile,
  setEditFormData
};

const mapStateToProps = (state) => {
  const user = fromJS(state).getIn(['user', 'entities'], fromJS({}));
  const savingProfile = fromJS(state).getIn(['user', 'savingProfile'], false);

  return {
      user: user,
      savingProfile: savingProfile
  };
};


export default connect(mapStateToProps, actions)(EditProfile);
