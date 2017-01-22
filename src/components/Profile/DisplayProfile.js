import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classNames from 'classNames';
import Avatar from 'material-ui/Avatar';
import colors from '~/utils/colors';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const DisplayProfile = ({user}) => {
  return (
    <div className={css(styles.displayProfile)}>
      <h1 className={css(styles.heading)}>
        <FontIcon className={classNames("material-icons", css(styles.iconHeaderStyle))}
          color={colors.primary1Color}>person</FontIcon>
        Your Profile
      </h1>
      <div className={css(styles.profileContent)}>
        <div className={css(styles.profileCol)}>
          <Avatar src={user.getIn(['picture', 'data', 'url'])}
            size={300} style={{margin: '0 auto', 'display': 'block'}} />
        </div>
        <div style={{paddingTop: '50px'}} className={css(styles.profileCol)}>
          <h4 className={css(styles.info)}>
            <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
              color={colors.primary1Color}>person_pin</FontIcon>
            {user.get('full_name')}
          </h4>
          <h4 className={css(styles.info)}>
            <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
              color={colors.primary1Color}>email</FontIcon>
            {user.get('email')}
          </h4>
          <h4 className={css(styles.info)}>
            <FontIcon className={classNames("material-icons", css(styles.infoIcon))}
              color={colors.primary1Color}>location_on</FontIcon>
            {user.get('location', 'Location Unknown') ? user.get('location', 'Location Unknown') : 'Locatoin Unknown'}
          </h4>
          <RaisedButton
            label="CONTINUE SHOPPING"
            primary={true}
            style={{marginTop: '20px'}}
            containerElement={<Link to='/welcome' />}
            className={css(styles.buttonStyle)}
            icon={<FontIcon
                  className={classNames("material-icons", css(styles.searchIcon))}
                  color={colors.primary1Color}>search
                  </FontIcon>} />
        </div>
      </div>
      <div className={css(styles.bio)}>
        <hr />
        <h2 className={css(styles.bioHeader)}>Short Bio</h2>
        <p className={css(styles.bioText)}>
          {user.get('bio') ?
            user.get('bio', 'Tell us something about you ' + user.get('first_name') + '!')
          : 'Tell us something about you ' + user.get('first_name') + '!'
          }
        </p>
      </div>
    </div>
  );
};

DisplayProfile.propTypes = {
  user: PropTypes.object
};

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
    padding: '30px 0'
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
  },
  searchIcon: {
    fontSize: '30px',
    color: colors.white,
    verticalAlign: 'middle',
    marginRight: '5px'
  },
});

export default DisplayProfile;
