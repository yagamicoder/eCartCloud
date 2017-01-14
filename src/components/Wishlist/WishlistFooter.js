import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import colors from '~/utils/colors';
import {Link} from 'react-router';

const WishlistFooter = () => {
  return (
    <div className={css(styles.footer)}>
      <RaisedButton
        label="CONTINUE SHOPPING"
        primary={true}
        style={{float: 'left'}}
        containerElement={<Link to='/welcome' />}
        className={css(styles.buttonStyle)}
        icon={<FontIcon
              className={classNames("material-icons", css(styles.searchIcon))}
              color={colors.primary1Color}>search
              </FontIcon>} />
    </div>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    fontSize: '30px',
    color: colors.white,
    verticalAlign: 'middle',
    marginRight: '5px'
  },
  footer: {
    padding: '30px 0'
  }
});

export default WishlistFooter;
