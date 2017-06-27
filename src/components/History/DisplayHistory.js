import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import classNames from 'classNames';
import colors from '~/utils/colors';
import {Link} from 'react-router';

const DisplayHistory = ({history, selectProduct, fetchReviews, deleteHistoryItem}) => {

  const mapHistory = !history.isEmpty() ? history.reverse().map(item => {
    return (
      <article key={item.get('itemId')} className={css(styles.historyItem)}>
        <div>
          <Avatar src={item.get('largeImage')} size={250} />
        </div>
        <div className={css(styles.prodInfo)}>
          <h2 className={css(styles.itemTitle)}>
            <Link className={css(styles.itemLink)} to={"/product/" + item.get('itemId')}
              onClick={() => { selectProduct(item.get('itemId')); fetchReviews(item.get('itemId')); }}>
              {item.get('name')}
            </Link>
            <span className={css(styles.dateViewed)}>{item.get('dateViewed')}</span>
          </h2>
          <p className={css(styles.price)}>${item.get('salePrice', item.get('msrp'))}</p>
          <RaisedButton
            label="DELETE"
            primary={true}
            className={css(styles.buttonStyle)}
            onClick={() => deleteHistoryItem(item.get('itemId'))}
            icon={<FontIcon
                  className={classNames("material-icons", css(styles.iconStyle))}
                  color={colors.primary1Color}>delete
                  </FontIcon>} />
          </div>
        </article>
      );
  }) : <h2 className={css(styles.noItems)}>You have not viewed any items.</h2>;
  return (
    <div className={css(styles.historyItemsWrap)}>
      {mapHistory}
    </div>
  );
};

DisplayHistory.propTypes = {
  history: PropTypes.object,
  selectProduct: PropTypes.func,
  fetchReviews: PropTypes.func,
  deleteHistoryItem: PropTypes.func
};

const styles = StyleSheet.create({
  dateViewed: {
    fontSize: '15px',
    color: colors.primary2Color,
    float: 'right'
  },
  iconStyle: {
    fontSize: '30px',
    color: colors.white,
    marginRight: '5px'
  },
  buttonStyle: {
		marginTop: '15px'
	},
  historyItem: {
    padding: '35px 0',
    borderBottom: '1px solid #E0E0E0',
    display: 'flex'
  },
  itemTitle: {
    color: colors.primary1Color,
    fontSize: '1.5em'
  },
  prodInfo: {
    paddingLeft: '50px',
    width: '100vw'
  },
  price: {
    fontSize: '1.3em',
    fontWeight: '400',
    color: colors.primary1Color
  },
  itemLink: {
    textDecoration: 'none',
    transition: 'all ease 400ms',
    color: colors.primary1Color,
    ':hover': {
      textDecoration: 'none',
      color: colors.accent1Color,
      transition: 'all ease 400ms'
    }
  },
  historyItemsWrap: {
    marginTop: '50px'
  },
  noItems: {
    textAlign: 'center',
    color: colors.primary1Color,
    fontSize: '1.8em',
    padding: '60px 0'
  }
});

export default DisplayHistory;
